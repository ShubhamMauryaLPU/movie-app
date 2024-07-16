import React, { useState } from 'react';
import './LoginRegister.css';

const LoginRegister = () => {
    const [action, setAction] = useState('');

    const registerLink = (e) => {
        e.preventDefault();
        setAction(' active');
    };

    const loginLink = (e) => {
        e.preventDefault();
        setAction('');
    };

    return (
        <div className={`wrapper${action}`}>
            <div className="form-box login">
                <form action="">
                    <h1>Login</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" /> Remember Me</label>
                        <a href="#">Forgot Password</a>
                    </div>

                    <button type="submit">Login</button>
                    <div className="register-link">
                        <p>Don't have an account? <a href="#" onClick={registerLink}>Register</a></p>
                    </div>
                </form>
            </div>

            <div className="form-box register">
                <form action="">
                    <h1>Registration</h1>
                    <div className="input-box">
                        <input type="text" placeholder='Username' required />
                    </div>

                    <div className="input-box">
                        <input type="email" placeholder='Email' required />
                    </div>

                    <div className="input-box">
                        <input type="password" placeholder='Password' required />
                    </div>

                    <div className="remember-forgot">
                        <label><input type="checkbox" /> I agree to the terms & conditions</label>
                    </div>

                    <button type="submit">Register</button>
                    <div className="register-link">
                        <p>Already have an account? <a href="#" onClick={loginLink}>Login</a></p>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginRegister;
