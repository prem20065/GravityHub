import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Bar } from 'recharts';
import { Target, TrendingUp, Award, Zap } from 'lucide-react';

const data = [
    { name: 'Mon', tasks: 4, focus: 120 },
    { name: 'Tue', tasks: 6, focus: 180 },
    { name: 'Wed', tasks: 2, focus: 90 },
    { name: 'Thu', tasks: 8, focus: 240 },
    { name: 'Fri', tasks: 5, focus: 150 },
    { name: 'Sat', tasks: 3, focus: 60 },
    { name: 'Sun', tasks: 1, focus: 30 },
];

const Analytics = () => {
    return (
        <div className="animate-fade-in" style={{ padding: '24px' }}>
            <header style={{ marginBottom: '32px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Progress Analytics</h2>
                <p style={{ color: 'var(--text-muted)' }}>Visualize your academic journey.</p>
            </header>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '20px', marginBottom: '32px' }}>
                {[
                    { label: 'Weekly Tasks', value: '29', icon: Target, color: '#818cf8' },
                    { label: 'Focus Hours', value: '14.5h', icon: Zap, color: '#c084fc' },
                    { label: 'Avg Productivity', value: '84%', icon: TrendingUp, color: '#f472b6' },
                    { label: 'Achievements', value: '12', icon: Award, color: '#fbbf24' },
                ].map((stat, i) => (
                    <div key={i} className="glass-panel" style={{ padding: '24px' }}>
                        <stat.icon size={24} color={stat.color} style={{ marginBottom: '16px' }} />
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '4px' }}>{stat.label}</div>
                        <div style={{ fontSize: '1.75rem', fontWeight: 'bold' }}>{stat.value}</div>
                    </div>
                ))}
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '24px' }}>
                <div className="glass-panel" style={{ padding: '32px', height: '400px' }}>
                    <h3 style={{ marginBottom: '24px' }}>Focus Distribution (Minutes)</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <AreaChart data={data}>
                            <defs>
                                <linearGradient id="colorFocus" x1="0" y1="0" x2="0" y2="1">
                                    <stop offset="5%" stopColor="var(--primary)" stopOpacity={0.3} />
                                    <stop offset="95%" stopColor="var(--primary)" stopOpacity={0} />
                                </linearGradient>
                            </defs>
                            <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                            <Tooltip
                                contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                                itemStyle={{ color: 'white' }}
                            />
                            <Area type="monotone" dataKey="focus" stroke="var(--primary)" strokeWidth={3} fillOpacity={1} fill="url(#colorFocus)" />
                        </AreaChart>
                    </ResponsiveContainer>
                </div>

                <div className="glass-panel" style={{ padding: '32px', height: '400px' }}>
                    <h3 style={{ marginBottom: '24px' }}>Tasks Completed</h3>
                    <ResponsiveContainer width="100%" height="100%">
                        <BarChart data={data}>
                            <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickLine={false} axisLine={false} />
                            <YAxis hide />
                            <Tooltip
                                contentStyle={{ background: '#1e293b', border: '1px solid rgba(255,255,255,0.1)', borderRadius: '12px' }}
                                cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                            />
                            <Bar dataKey="tasks" fill="var(--secondary)" radius={[6, 6, 0, 0]} />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </div>
        </div>
    );
};

export default Analytics;
