import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from "../actions/auth";
import '../styles/Login.css';
import Header from "../components/Header";
import Footer from "../components/Footer";

const Login = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    // const [error, setError] = useState(null); 
    const navigate = useNavigate();
 

    const dispatch = useDispatch();
    const error = useSelector((state) => state.auth.error);

    const handleLogin = async (e) => {
        e.preventDefault();
        dispatch(loginUser(email, password, navigate));
    };

    return(
        <div className="login">
            <Header />
            <main className="main bg-dark">
                <section className="sign-in-content">
                    <i className="fa fa-user-circle sign-in-icon"></i>
                    <h1>Sign In</h1>
                        <form onSubmit={handleLogin}>
                            <div className="input-wrapper">
                                <label htmlFor="email">email</label>
                                <input type="email" id="email" value={email}
                                onChange={(e) => setEmail(e.target.value)} />
                            </div>
                            <div className="input-wrapper">
                                <label htmlFor="password">Password</label>
                                <input type="password" id="password" value={password} 
                                onChange={(e) => setPassword(e.target.value)} />
                            </div>
                            <div className="input-remember">
                                <input type="checkbox" id="remember-me" />
                                <label htmlFor="remember-me">Remember me</label>
                            </div>
                            <button type='submit' className="sign-in-button" onClick={handleLogin}>Login</button>
                            {error && <p style={{ color: 'red'}}>{error}</p>}
                        </form>
                </section>
            </main>
            <Footer/>
        </div>
    );
}

export default Login;
