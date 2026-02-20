import React, { useState } from 'react';
import { Plus, Trash2, CheckCircle2, Circle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const TaskManager = () => {
    const [tasks, setTasks] = useState([
        { id: 1, text: 'Complete Math Assignment', completed: false, priority: 'High' },
        { id: 2, text: 'Review Physics Notes', completed: true, priority: 'Medium' },
        { id: 3, text: 'Plan Group Project', completed: false, priority: 'Low' },
    ]);
    const [newTask, setNewTask] = useState('');

    const addTask = (e) => {
        e.preventDefault();
        if (!newTask.trim()) return;
        setTasks([{ id: Date.now(), text: newTask, completed: false, priority: 'Medium' }, ...tasks]);
        setNewTask('');
    };

    const toggleTask = (id) => {
        setTasks(tasks.map(t => t.id === id ? { ...t, completed: !t.completed } : t));
    };

    const deleteTask = (id) => {
        setTasks(tasks.filter(t => t.id !== id));
    };

    return (
        <div className="animate-fade-in" style={{ padding: '24px' }}>
            <header style={{ marginBottom: '32px' }}>
                <h2 style={{ fontSize: '2rem', marginBottom: '8px' }}>Task Manager</h2>
                <p style={{ color: 'var(--text-muted)' }}>Stay on top of your education.</p>
            </header>

            <form onSubmit={addTask} style={{ display: 'flex', gap: '12px', marginBottom: '32px' }}>
                <input
                    type="text"
                    value={newTask}
                    onChange={(e) => setNewTask(e.target.value)}
                    placeholder="What needs to be done?"
                    style={{
                        flex: 1,
                        background: 'rgba(255,255,255,0.05)',
                        border: '1px solid var(--surface-border)',
                        borderRadius: '12px',
                        padding: '14px 20px',
                        color: 'white',
                        outline: 'none'
                    }}
                />
                <button type="submit" className="glass-button">
                    <Plus size={20} /> Add Task
                </button>
            </form>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <AnimatePresence>
                    {tasks.map((task) => (
                        <motion.div
                            key={task.id}
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            className="glass-panel"
                            style={{
                                padding: '16px 20px',
                                display: 'flex',
                                alignItems: 'center',
                                gap: '16px',
                                borderRadius: '16px'
                            }}
                        >
                            <button
                                onClick={() => toggleTask(task.id)}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: task.completed ? '#4ade80' : 'var(--text-muted)' }}
                            >
                                {task.completed ? <CheckCircle2 size={24} /> : <Circle size={24} />}
                            </button>

                            <span style={{
                                flex: 1,
                                textDecoration: task.completed ? 'line-through' : 'none',
                                color: task.completed ? 'var(--text-muted)' : 'var(--text-main)',
                                fontSize: '1rem'
                            }}>
                                {task.text}
                            </span>

                            <span style={{
                                fontSize: '0.75rem',
                                padding: '4px 10px',
                                borderRadius: '20px',
                                background: task.priority === 'High' ? 'rgba(239, 68, 68, 0.1)' : 'rgba(255, 255, 255, 0.05)',
                                color: task.priority === 'High' ? '#ef4444' : 'var(--text-muted)',
                                fontWeight: 'bold'
                            }}>
                                {task.priority}
                            </span>

                            <button
                                onClick={() => deleteTask(task.id)}
                                style={{ background: 'none', border: 'none', cursor: 'pointer', color: '#f87171', opacity: 0.6 }}
                            >
                                <Trash2 size={18} />
                            </button>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};

export default TaskManager;
