import React, { useState, useEffect } from 'react';
import { Save, FileText, Clock, Search } from 'lucide-react';

const NotesSection = () => {
    const [content, setContent] = useState(localStorage.getItem('gravityhub_notes') || '');
    const [lastSaved, setLastSaved] = useState(null);
    const [isSaving, setIsSaving] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if (content !== localStorage.getItem('gravityhub_notes')) {
                saveNotes();
            }
        }, 1000);
        return () => clearTimeout(timer);
    }, [content]);

    const saveNotes = () => {
        setIsSaving(true);
        localStorage.setItem('gravityhub_notes', content);
        setTimeout(() => {
            setLastSaved(new Date().toLocaleTimeString());
            setIsSaving(false);
        }, 500);
    };

    return (
        <div className="animate-fade-in" style={{ padding: '24px', height: '100%', display: 'flex', flexDirection: 'column' }}>
            <header style={{ marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <div>
                    <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Smart Notes</h2>
                    <p style={{ color: 'var(--text-muted)' }}>Auto-saving your thoughts...</p>
                </div>
                <div style={{ textAlign: 'right', fontSize: '0.875rem', color: 'var(--text-muted)' }}>
                    {isSaving ? 'Saving...' : lastSaved ? `Last saved at ${lastSaved}` : 'No changes yet'}
                </div>
            </header>

            <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '300px 1fr', gap: '24px' }}>
                <div className="glass-panel" style={{ padding: '20px' }}>
                    <div style={{ position: 'relative', marginBottom: '20px' }}>
                        <Search size={16} style={{ position: 'absolute', left: '12px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
                        <input
                            type="text"
                            placeholder="Search notes..."
                            style={{ width: '100%', background: 'rgba(255,255,255,0.05)', border: 'none', borderRadius: '8px', padding: '10px 10px 10px 36px', color: 'white' }}
                        />
                    </div>

                    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                        <div style={{ padding: '12px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', border: '1px solid rgba(99, 102, 241, 0.2)' }}>
                            <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Physics Lecture Notes</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Just now</div>
                        </div>
                        <div style={{ padding: '12px', borderRadius: '12px', border: '1px solid transparent' }}>
                            <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Math Formulas</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>2 hours ago</div>
                        </div>
                        <div style={{ padding: '12px', borderRadius: '12px', border: '1px solid transparent' }}>
                            <div style={{ fontWeight: '600', fontSize: '0.9rem' }}>Project Ideas</div>
                            <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>Yesterday</div>
                        </div>
                    </div>
                </div>

                <div className="glass-panel" style={{ padding: '32px', display: 'flex', flexDirection: 'column' }}>
                    <textarea
                        value={content}
                        onChange={(e) => setContent(e.target.value)}
                        placeholder="Type your notes here..."
                        style={{
                            flex: 1,
                            background: 'transparent',
                            border: 'none',
                            resize: 'none',
                            color: 'white',
                            fontSize: '1.1rem',
                            lineHeight: '1.8',
                            outline: 'none',
                            fontFamily: 'Inter, sans-serif'
                        }}
                    />
                </div>
            </div>
        </div>
    );
};

export default NotesSection;
