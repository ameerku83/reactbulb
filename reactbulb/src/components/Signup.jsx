import React, { useState } from 'react';
import axios from 'axios';
import {useNavigate } from 'react-router-dom';

const Signup = () => {
    const [formData, setFormData] = useState({ name: '', email: '', password: ''});
    const [error, setError] = useState('');
    const history = useNavigate();

    const { name, email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async e => {
        e.preventDefault();
        if (name.length<2) {
            setError('name must be greater than 3');
            return;
        }

        if (password.length<5) {
            setError('Passwords must be greater than 5');
            return;
        }

        try {
            await axios.post('http://localhost:3400/signup', { name, email, password });
              history('/reactbulb/login');
        } catch (err) {
            setError('Error signing up'+err);
        }
    };

    return (
        <div>
            <h2>Sign Up</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={onSubmit}>
                <div>
                    <input type="text" name="name" value={name} onChange={onChange} placeholder="Name" required />
                </div>
                <div>
                    <input type="email" name="email" value={email} onChange={onChange} placeholder="Email" required />
                </div>
                <div>
                    <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
                </div>
                
                <button type="submit">Sign Up</button>
            </form>
        </div>
    );
};

export default Signup;
