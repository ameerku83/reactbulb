import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const [formData, setFormData] = useState({ email: '', password: '' });
    const [error, setError] = useState('');
    const history = useNavigate();

    const { email, password } = formData;

    const onChange = e => setFormData({ ...formData, [e.target.name]: e.target.value });

    const onSubmit = async  e => {
        e.preventDefault();

        try {
               axios.post('http://localhost:3400/login', { email, password });
            
         await   history('/login/home');
        } catch (err) {
            setError('Invalid credentials'+err);
        }
    };

    return (
        <div>
            <h2>Login</h2>
            {error && <p style={{ color: 'red' }}>{error}</p>}
            <form onSubmit={onSubmit}>
                <div>
                    <input type="email" name="email" value={email}  onChange={onChange} placeholder="Email" required  />
                </div>
                <div>
                    <input type="password" name="password" value={password} onChange={onChange} placeholder="Password" required />
                </div>
                <button type="submit">Login</button>
            </form>
        </div>
    );   
};

export default Login;
