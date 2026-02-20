import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Zap, Target, BookOpen, Clock, Shield } from 'lucide-react';

const LandingPage = ({ onStart }) => {
    return (
        <div style={{ background: 'var(--bg-darker)', minHeight: '100vh', overflow: 'hidden' }}>
            {/* Background blobs */}
            <div style={{
                position: 'fixed',
                width: '50vw',
                height: '50vw',
                background: 'radial-gradient(circle, rgba(99,102,241,0.15) 0%, rgba(99,102,241,0) 70%)',
                top: '-10%',
                right: '-10%',
                zIndex: 0
            }}></div>
            <div style={{
                position: 'fixed',
                width: '40vw',
                height: '40vw',
                background: 'radial-gradient(circle, rgba(236,72,153,0.1) 0%, rgba(236,72,153,0) 70%)',
                bottom: '-10%',
                left: '-10%',
                zIndex: 0
            }}></div>

            {/* Navbar */}
            <nav className="container" style={{ height: '100px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', position: 'relative', zIndex: 10 }}>
                <div className="brand" style={{ fontSize: '1.75rem', fontWeight: '800', display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '36px', height: '36px', background: 'var(--primary)', borderRadius: '10px', rotate: '45deg' }}></div>
                    GravityHub
                </div>
                <div style={{ display: 'flex', gap: '40px', alignItems: 'center' }}>
                    <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: '500' }}>Features</a>
                    <a href="#" style={{ color: 'var(--text-muted)', textDecoration: 'none', fontWeight: '500' }}>Pricing</a>
                    <button onClick={onStart} className="glass-button">Get Started</button>
                </div>
            </nav>

            {/* Hero Section */}
            <main className="container" style={{ padding: '120px 0', position: 'relative', zIndex: 10 }}>
                <div style={{ textAlign: 'center', maxWidth: '900px', margin: '0 auto' }}>
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <span style={{
                            padding: '8px 20px',
                            background: 'rgba(99,102,241,0.1)',
                            borderRadius: '30px',
                            color: 'var(--primary)',
                            fontSize: '0.875rem',
                            fontWeight: '700',
                            border: '1px solid rgba(99,102,241,0.2)'
                        }}>
                            V2.0 IS NOW LIVE
                        </span>
                        <h1 style={{ fontSize: '5rem', fontWeight: '800', lineHeight: '1.1', marginTop: '32px', letterSpacing: '-0.02em' }}>
                            Master Your Studies with <br />
                            <span className="gradient-text">Gravitational Focus.</span>
                        </h1>
                        <p style={{ fontSize: '1.25rem', color: 'var(--text-muted)', marginTop: '32px', maxWidth: '600px', margin: '32px auto' }}>
                            GravityHub is the all-in-one productivity platform designed for the modern student. Organize, focus, and excel.
                        </p>
                        <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', marginTop: '48px' }}>
                            <button
                                onClick={onStart}
                                style={{ padding: '18px 36px', fontSize: '1.1rem' }}
                                className="glass-button"
                            >
                                Launch Dashboard <ArrowRight size={20} style={{ marginLeft: '8px' }} />
                            </button>
                            <button style={{ padding: '18px 36px', fontSize: '1.1rem' }} className="glass-button secondary">
                                Watch Demo
                            </button>
                        </div>
                    </motion.div>
                </div>

                {/* Features Preview */}
                <div style={{ marginTop: '140px', display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '32px' }}>
                    {[
                        { title: 'Smart Tasks', icon: Target, desc: 'AI-powered task prioritization for maximum efficiency.' },
                        { title: 'Deep Work', icon: Clock, desc: 'Optimized Pomodoro cycles to keep you in the zone.' },
                        { title: 'Rich Notes', icon: BookOpen, desc: 'Latex-ready notes with lightning-fast organization.' },
                    ].map((feature, i) => (
                        <motion.div
                            key={i}
                            whileHover={{ y: -10 }}
                            className="glass-panel"
                            style={{ padding: '40px' }}
                        >
                            <div style={{ width: '56px', height: '56px', background: 'rgba(255,255,255,0.03)', borderRadius: '16px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}>
                                <feature.icon size={28} color="var(--primary)" />
                            </div>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '16px' }}>{feature.title}</h3>
                            <p style={{ color: 'var(--text-muted)' }}>{feature.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </main>

            {/* Social Proof */}
            <div style={{ borderTop: '1px solid var(--surface-border)', padding: '60px 0', marginTop: '100px' }}>
                <div className="container" style={{ textAlign: 'center' }}>
                    <p style={{ color: 'var(--text-muted)', fontSize: '0.875rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '40px' }}>Trusted by students at</p>
                    <div style={{ display: 'flex', justifyContent: 'center', gap: '80px', opacity: 0.5, filter: 'grayscale(1)' }}>
                        <span style={{ fontSize: '1.5rem', fontWeight: '800' }}>STANFORD</span>
                        <span style={{ fontSize: '1.5rem', fontWeight: '800' }}>MIT</span>
                        <span style={{ fontSize: '1.5rem', fontWeight: '800' }}>HARVARD</span>
                        <span style={{ fontSize: '1.5rem', fontWeight: '800' }}>OXFORD</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LandingPage;
