import React, { useState } from 'react';
import { Sun, Moon, Monitor, Bell, Shield, Cloud, Smartphone } from 'lucide-react';

const Settings = ({ theme, setTheme }) => {
    return (
        <div className="animate-fade-in" style={{ padding: '24px' }}>
            <header style={{ marginBottom: '32px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Settings</h2>
                <p style={{ color: 'var(--text-muted)' }}>Customize your GravityHub experience.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '24px' }}>
                {/* Appearance */}
                <div className="glass-panel" style={{ padding: '32px' }}>
                    <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Monitor size={20} color="var(--primary)" /> Appearance
                    </h3>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <div style={{ fontWeight: '600' }}>Theme Mode</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Switch between light and dark themes</div>
                            </div>
                            <div style={{
                                display: 'flex',
                                background: 'rgba(255,255,255,0.05)',
                                padding: '4px',
                                borderRadius: '12px',
                                border: '1px solid var(--surface-border)'
                            }}>
                                <button
                                    onClick={() => setTheme('light')}
                                    style={{
                                        padding: '8px 12px',
                                        border: 'none',
                                        background: theme === 'light' ? 'var(--primary)' : 'transparent',
                                        color: theme === 'light' ? 'white' : 'var(--text-muted)',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        transition: 'var(--transition)'
                                    }}
                                >
                                    <Sun size={16} />
                                </button>
                                <button
                                    onClick={() => setTheme('dark')}
                                    style={{
                                        padding: '8px 12px',
                                        border: 'none',
                                        background: theme === 'dark' ? 'var(--primary)' : 'transparent',
                                        color: theme === 'dark' ? 'white' : 'var(--text-muted)',
                                        borderRadius: '8px',
                                        cursor: 'pointer',
                                        transition: 'var(--transition)'
                                    }}
                                >
                                    <Moon size={16} />
                                </button>
                            </div>
                        </div>

                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <div>
                                <div style={{ fontWeight: '600' }}>Glassmorphism</div>
                                <div style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>Enable background blur effects</div>
                            </div>
                            <input type="checkbox" defaultChecked style={{ width: '40px', height: '20px' }} />
                        </div>
                    </div>
                </div>

                {/* Notifications */}
                <div className="glass-panel" style={{ padding: '32px' }}>
                    <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Bell size={20} color="#fbbf24" /> Notifications
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        {['Pomodoro Breaks', 'Task Deadlines', 'Study Reminders'].map((item) => (
                            <div key={item} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                <div style={{ fontWeight: '600' }}>{item}</div>
                                <input type="checkbox" defaultChecked style={{ width: '40px', height: '20px' }} />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Security */}
                <div className="glass-panel" style={{ padding: '32px' }}>
                    <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Shield size={20} color="#4ade80" /> Privacy & Security
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <button className="glass-button secondary" style={{ justifyContent: 'center' }}>Change Password</button>
                        <button className="glass-button secondary" style={{ justifyContent: 'center' }}>Enable 2FA</button>
                    </div>
                </div>

                {/* Sync */}
                <div className="glass-panel" style={{ padding: '32px' }}>
                    <h3 style={{ marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <Cloud size={20} color="#818cf8" /> Data & Sync
                    </h3>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <Smartphone size={20} color="var(--text-muted)" />
                            <div>
                                <div style={{ fontSize: '0.9rem' }}>Last synced with iPhone 15</div>
                                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>2 minutes ago</div>
                            </div>
                        </div>
                        <button className="glass-button secondary" style={{ justifyContent: 'center' }}>Export Data (JSON)</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Settings;
