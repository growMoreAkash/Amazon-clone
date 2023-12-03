import React, { useState } from 'react';
import './css/Login.css'
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from '../firebase';

function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');




    const signIn = e => {
        e.preventDefault();
        if(!email || !password) return alert("Please provide the cradentials")
        console.log({email})
            signInWithEmailAndPassword(auth,email, password)
            .then(user => {
                console.log(user)
                if (user) navigate('/')
                else alert("Wrong user credantials")
            })
            .catch(error => alert(error.message))
    }

    const register = e => {
        e.preventDefault();
        if(!email || !password) return alert("Please provide the cradentials")
        createUserWithEmailAndPassword(auth,email, password)
            .then((userCredential) => {
                // it successfully created a new user with email and password
                if (userCredential) {
                    navigate('/')
                }
            })
            .catch(error => alert(error.message))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img
                    className="login__logo"
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                />
            </Link>

            <div className='login__container'>
                <h1>Sign-in</h1>

                <form>
                    <h5>E-mail</h5>
                    <input type='text' value={email} onChange={e => setEmail(e.target.value)} />

                    <h5>Password</h5>
                    <input type='password' value={password} onChange={e => setPassword(e.target.value)} />

                    <button type='submit' onClick={signIn} className='login__signInButton'>Sign In</button>
                </form>

                <p>
                    By signing-in you agree to the AMAZON FAKE  Conditions of Use & Sale. Please
                    see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.
                </p>

                <button onClick={register} className='login__registerButton'>Create your Amazon Account</button>
            </div>
        </div>
    )
}

export default Login
