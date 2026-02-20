import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Coffee } from 'lucide-react';
import { motion } from 'framer-motion';

const FocusTimer = () => {
    const [minutes, setMinutes] = useState(25);
    const [seconds, setSeconds] = useState(0);
    const [isActive, setIsActive] = useState(false);
    const [isBreak, setIsBreak] = useState(false);

    useEffect(() => {
        let interval = null;
        if (isActive) {
            interval = setInterval(() => {
                if (seconds > 0) {
                    setSeconds(seconds - 1);
                } else {
                    if (minutes === 0) {
                        setIsBreak(!isBreak);
                        setMinutes(isBreak ? 25 : 5);
                        setSeconds(0);
                        setIsActive(false);
                    } else {
                        setMinutes(minutes - 1);
                        setSeconds(59);
                    }
                }
            }, 1000);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive, seconds, minutes, isBreak]);

    const toggleTimer = () => setIsActive(!isActive);
    const resetTimer = () => {
        setIsActive(false);
        setMinutes(25);
        setSeconds(0);
        setIsBreak(false);
    };

    const progress = ((isBreak ? 5 : 25) * 60 - (minutes * 60 + seconds)) / ((isBreak ? 5 : 25) * 60) * 100;

    return (
        <div className="animate-fade-in" style={{ padding: '24px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <header style={{ marginBottom: '48px', textAlign: 'center' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Focus Timer</h2>
                <p style={{ color: 'var(--text-muted)' }}>Boost your productivity with Pomodoro tech.</p>
            </header>

            <div style={{ position: 'relative', width: '300px', height: '300px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <svg style={{ position: 'absolute', width: '100%', height: '100%', transform: 'rotate(-90deg)' }}>
                    <circle
                        cx="150" cy="150" r="140"
                        style={{
                            fill: 'none',
                            stroke: 'rgba(255,255,255,0.05)',
                            strokeWidth: '8'
                        }}
                    />
                    <motion.circle
                        cx="150" cy="150" r="140"
                        style={{
                            fill: 'none',
                            stroke: isBreak ? 'var(--secondary)' : 'var(--primary)',
                            strokeWidth: '8',
                            strokeLinecap: 'round',
                            strokeDasharray: '880',
                            strokeDashoffset: (880 - (880 * progress) / 100).toString()
                        }}
                    />
                </svg>

                <div style={{ textAlign: 'center', z_index: 10 }}>
                    <div style={{ fontSize: '4.5rem', fontWeight: 'bold', fontFamily: 'Outfit' }}>
                        {String(minutes).padStart(2, '0')}:{String(seconds).padStart(2, '0')}
                    </div>
                    <div style={{ textTransform: 'uppercase', letterSpacing: '2px', color: isBreak ? 'var(--secondary)' : 'var(--primary)', fontWeight: 'bold' }}>
                        {isBreak ? 'Break Time' : 'Focus Session'}
                    </div>
                </div>
            </div>

            <div style={{ marginTop: '48px', display: 'flex', gap: '24px' }}>
                <button
                    onClick={toggleTimer}
                    className="glass-button"
                    style={{ width: '64px', height: '64px', borderRadius: '50%', justifyContent: 'center' }}
                >
                    {isActive ? <Pause size={24} /> : <Play size={24} />}
                </button>
                <button
                    onClick={resetTimer}
                    className="glass-button secondary"
                    style={{ width: '64px', height: '64px', borderRadius: '50%', justifyContent: 'center' }}
                >
                    <RotateCcw size={24} />
                </button>
            </div>

            <div style={{ marginTop: '48px', display: 'flex', gap: '16px' }} className="glass-panel">
                <div style={{ padding: '20px 32px', textAlign: 'center' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Sessions Today</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>4</div>
                </div>
                <div style={{ width: '1px', background: 'var(--surface-border)', margin: '15px 0' }}></div>
                <div style={{ padding: '20px 32px', textAlign: 'center' }}>
                    <div style={{ color: 'var(--text-muted)', fontSize: '0.875rem' }}>Total Focus</div>
                    <div style={{ fontSize: '1.5rem', fontWeight: 'bold' }}>1h 40m</div>
                </div>
            </div>
        </div>
    );
};

export default FocusTimer;
