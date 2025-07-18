'use client'
import  { useState } from 'react';

const CreateAccountPage = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        password: '',
        accountType: 'personal',
    });

    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Here you would send form data to your backend API
        setMessage('Account created successfully!');
        setForm({
            name: '',
            email: '',
            password: '',
            accountType: 'personal',
        });
    };

    return (
        <div style={{ maxWidth: 400, margin: '40px auto', padding: 24, border: '1px solid #ccc', borderRadius: 8 }}>
            <h2>Create Account</h2>
            <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: 16 }}>
                    <label>Name</label>
                    <input
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: 8, marginTop: 4 }}
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label>Email</label>
                    <input
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: 8, marginTop: 4 }}
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        value={form.password}
                        onChange={handleChange}
                        required
                        style={{ width: '100%', padding: 8, marginTop: 4 }}
                    />
                </div>
                <div style={{ marginBottom: 16 }}>
                    <label>Account Type</label>
                    <select
                        name="accountType"
                        value={form.accountType}
                        onChange={handleChange}
                        style={{ width: '100%', padding: 8, marginTop: 4 }}
                    >
                        <option value="personal">Personal</option>
                        <option value="business">Business</option>
                    </select>
                </div>
                <button type="submit" style={{ padding: '10px 20px' }}>Create Account</button>
            </form>
            {message && <p style={{ color: 'green', marginTop: 16 }}>{message}</p>}
        </div>
    );
};

export default CreateAccountPage;