import React from 'react';
import { LayoutDashboard, CheckSquare, Clock, BookOpen, BarChart2, Settings, LogOut } from 'lucide-react';

const Sidebar = ({ activeTab, setActiveTab }) => {
    const menuItems = [
        { id: 'dashboard', icon: LayoutDashboard, label: 'Dashboard' },
        { id: 'tasks', icon: CheckSquare, label: 'Tasks' },
        { id: 'focus', icon: Clock, label: 'Focus Timer' },
        { id: 'notes', icon: BookOpen, label: 'Notes' },
        { id: 'analytics', icon: BarChart2, label: 'Analytics' },
        { id: 'settings', icon: Settings, label: 'Settings' },
    ];

    return (
        <div className="glass-panel" style={{ height: 'calc(100vh - 40px)', margin: '20px', padding: '24px', display: 'flex', flexDirection: 'column', position: 'sticky', top: '20px' }}>
            <div className="brand" style={{ fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '40px', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{ width: '32px', height: '32px', background: 'var(--primary)', borderRadius: '8px', rotate: '45deg' }}></div>
                GravityHub
            </div>

            <nav style={{ flex: 1 }}>
                {menuItems.map((item) => (
                    <button
                        key={item.id}
                        onClick={() => setActiveTab(item.id)}
                        style={{
                            width: '100%',
                            display: 'flex',
                            alignItems: 'center',
                            gap: '12px',
                            padding: '14px',
                            borderRadius: '12px',
                            border: 'none',
                            background: activeTab === item.id ? 'rgba(99, 102, 241, 0.15)' : 'transparent',
                            color: activeTab === item.id ? 'var(--primary)' : 'var(--text-muted)',
                            cursor: 'pointer',
                            marginBottom: '8px',
                            fontWeight: activeTab === item.id ? '600' : '400',
                            transition: 'var(--transition)',
                            textAlign: 'left'
                        }}
                    >
                        <item.icon size={20} />
                        {item.label}
                    </button>
                ))}
            </nav>

            <button
                style={{
                    width: '100%',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '14px',
                    borderRadius: '12px',
                    border: 'none',
                    background: 'transparent',
                    color: '#f87171',
                    cursor: 'pointer',
                    marginTop: 'auto'
                }}
            >
                <LogOut size={20} />
                Log Out
            </button>
        </div>
    );
};

export default Sidebar;
