import React, { useState, useEffect } from 'react';
import LandingPage from './components/LandingPage';
import Auth from './components/Auth';
import Sidebar from './components/Sidebar';
import TaskManager from './components/TaskManager';
import FocusTimer from './components/FocusTimer';
import NotesSection from './components/NotesSection';
import Analytics from './components/Analytics';
import Settings from './components/Settings';
import { Search, Bell, User } from 'lucide-react';

function App() {
    const [view, setView] = useState('landing'); // landing, auth, dashboard
    const [user, setUser] = useState(null);
    const [activeTab, setActiveTab] = useState('dashboard');
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme);
    }, [theme]);

    const handleAuthSuccess = (userData) => {
        setUser(userData);
        setView('dashboard');
    };

    if (view === 'landing') {
        return <LandingPage onStart={() => setView('auth')} />;
    }

    if (view === 'auth') {
        return <Auth onAuthSuccess={handleAuthSuccess} onBack={() => setView('landing')} />;
    }

    const renderContent = () => {
        switch (activeTab) {
            case 'tasks': return <TaskManager />;
            case 'focus': return <FocusTimer />;
            case 'notes': return <NotesSection />;
            case 'analytics': return <Analytics />;
            case 'settings': return <Settings theme={theme} setTheme={setTheme} />;
            default: return (
                <div className="animate-fade-in" style={{ padding: '24px' }}>
                    <header style={{ marginBottom: '32px' }}>
                        <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Welcome back, {user?.name || 'Explorer'}!</h2>
                        <p style={{ color: 'var(--text-muted)' }}>You've completed 75% of your daily goals.</p>
                    </header>

                    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px' }}>
                        <div className="glass-panel" style={{ padding: '40px', gridColumn: 'span 2', minHeight: '300px' }}>
                            <h3 style={{ marginBottom: '24px' }}>Daily Focus Intensity</h3>
                            <div style={{ height: '200px', width: '100%', background: 'linear-gradient(90deg, var(--primary) 0%, transparent 100%)', opacity: 0.1, borderRadius: '12px' }}></div>
                            <p style={{ marginTop: '24px', color: 'var(--text-muted)' }}>Your productivity peaked at 11:00 AM today. Keep it up!</p>
                        </div>

                        <div className="glass-panel" style={{ padding: '32px' }}>
                            <h3 style={{ marginBottom: '24px' }}>Quick Stats</h3>
                            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                                {[
                                    { label: 'Tasks done', value: '12' },
                                    { label: 'Focus time', value: '4.2h' },
                                    { label: 'Note streaks', value: '5 days' }
                                ].map((stat, i) => (
                                    <div key={i} style={{ display: 'flex', justifyContent: 'space-between', borderBottom: '1px solid var(--surface-border)', paddingBottom: '12px' }}>
                                        <span style={{ color: 'var(--text-muted)' }}>{stat.label}</span>
                                        <strong style={{ fontSize: '1.1rem' }}>{stat.value}</strong>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="glass-panel" style={{ padding: '32px', gridColumn: 'span 3', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <h3 style={{ marginBottom: '8px' }}>Upcoming Exam: Particle Physics</h3>
                                <p style={{ color: 'var(--text-muted)' }}>Scheduled for March 15, 2024 (In 24 days)</p>
                            </div>
                            <button className="glass-button">View Study Plan</button>
                        </div>
                    </div>
                </div>
            );
        }
    };

    return (
        <div className="dashboard-grid">
            <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

            <main style={{ padding: '20px', overflowY: 'auto', background: 'var(--bg-darker)' }}>
                {/* Top Header */}
                <div style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    marginBottom: '20px',
                    padding: '0 24px'
                }}>
                    <div style={{ position: 'relative', width: '400px' }}>
                        <Search size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Search tasks, notes..."
                            style={{
                                width: '100%',
                                background: 'var(--surface)',
                                border: '1px solid var(--surface-border)',
                                borderRadius: '12px',
                                padding: '12px 12px 12px 48px',
                                color: 'var(--text-main)',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
                        <button className="glass-button secondary" style={{ width: '44px', height: '44px', padding: '0', justifyContent: 'center' }}>
                            <Bell size={20} />
                        </button>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '6px 6px 6px 16px', background: 'var(--surface)', borderRadius: '30px', border: '1px solid var(--surface-border)' }}>
                            <div style={{ textAlign: 'right' }}>
                                <div style={{ fontSize: '0.85rem', fontWeight: '700', color: 'var(--text-main)' }}>{user?.name || 'User'}</div>
                                <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)' }}>Pro Member</div>
                            </div>
                            <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'white' }}>
                                <User size={18} />
                            </div>
                        </div>
                    </div>
                </div>

                {renderContent()}
            </main>
        </div>
    );
}

export default App;
