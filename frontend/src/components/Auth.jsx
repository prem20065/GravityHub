import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, Lock, User, ArrowRight, Github } from 'lucide-react';

const Auth = ({ onAuthSuccess, onBack }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // In a real app, this would call Firebase Auth
        // console.log("Authenticating...", { email, password, name });
        onAuthSuccess({ name: name || 'Alex Carter', email });
    };

    return (
        <div style={{
            minHeight: '100vh',
            background: 'var(--bg-darker)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            padding: '20px',
            position: 'relative',
            overflow: 'hidden'
        }}>
            {/* Background blobs */}
            <div style={{
                position: 'absolute',
                width: '40vw',
                height: '40vw',
                background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, rgba(99,102,241,0) 70%)',
                top: '-10%',
                left: '-10%',
                zIndex: 0
            }}></div>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                className="glass-panel"
                style={{
                    width: '100%',
                    maxWidth: '450px',
                    padding: '48px',
                    position: 'relative',
                    zIndex: 10
                }}
            >
                <header style={{ textAlign: 'center', marginBottom: '40px' }}>
                    <div
                        onClick={onBack}
                        style={{
                            width: '48px',
                            height: '48px',
                            background: 'var(--primary)',
                            borderRadius: '12px',
                            rotate: '45deg',
                            margin: '0 auto 24px',
                            cursor: 'pointer'
                        }}
                    ></div>
                    <h2 style={{ fontSize: '2rem', fontWeight: '800', marginBottom: '8px' }}>
                        {isLogin ? 'Welcome Back' : 'Join GravityHub'}
                    </h2>
                    <p style={{ color: 'var(--text-muted)' }}>
                        {isLogin ? 'Sign in to continue your progress' : 'Start your productivity journey today'}
                    </p>
                </header>

                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                    {!isLogin && (
                        <div style={{ position: 'relative' }}>
                            <User size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                            <input
                                type="text"
                                placeholder="Full Name"
                                required
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                style={{
                                    width: '100%',
                                    background: 'rgba(255,255,255,0.03)',
                                    border: '1px solid var(--surface-border)',
                                    borderRadius: '12px',
                                    padding: '14px 14px 14px 48px',
                                    color: 'white',
                                    outline: 'none'
                                }}
                            />
                        </div>
                    )}

                    <div style={{ position: 'relative' }}>
                        <Mail size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="email"
                            placeholder="Email Address"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            style={{
                                width: '100%',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid var(--surface-border)',
                                borderRadius: '12px',
                                padding: '14px 14px 14px 48px',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <div style={{ position: 'relative' }}>
                        <Lock size={18} style={{ position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="password"
                            placeholder="Password"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            style={{
                                width: '100%',
                                background: 'rgba(255,255,255,0.03)',
                                border: '1px solid var(--surface-border)',
                                borderRadius: '12px',
                                padding: '14px 14px 14px 48px',
                                color: 'white',
                                outline: 'none'
                            }}
                        />
                    </div>

                    <button type="submit" className="glass-button" style={{ justifyContent: 'center', padding: '16px' }}>
                        {isLogin ? 'Sign In' : 'Create Account'} <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                    </button>
                </form>

                <div style={{ marginTop: '32px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: 'var(--text-muted)', fontSize: '0.875rem', marginBottom: '24px' }}>
                        <div style={{ flex: 1, height: '1px', background: 'var(--surface-border)' }}></div>
                        OR
                        <div style={{ flex: 1, height: '1px', background: 'var(--surface-border)' }}></div>
                    </div>

                    <div style={{ display: 'flex', gap: '12px' }}>
                        <button className="glass-button secondary" style={{ flex: 1, justifyContent: 'center' }}>
                            <Github size={20} /> GitHub
                        </button>
                        <button className="glass-button secondary" style={{ flex: 1, justifyContent: 'center' }}>
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4" />
                                <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853" />
                                <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l3.66-2.84z" fill="#FBBC05" />
                                <path d="M12 5.38c1.62 0 3.06.56 4.21 1.66l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335" />
                            </svg>
                            Google
                        </button>
                    </div>
                </div>

                <p style={{ textAlign: 'center', marginTop: '32px', color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    {isLogin ? "Don't have an account?" : "Already have an account?"}{' '}
                    <span
                        onClick={() => setIsLogin(!isLogin)}
                        style={{ color: 'var(--primary)', fontWeight: '600', cursor: 'pointer' }}
                    >
                        {isLogin ? 'Sign Up' : 'Log In'}
                    </span>
                </p>
            </motion.div>
        </div>
    );
};

export default Auth;
