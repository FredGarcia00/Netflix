import React, { useState } from 'react'
// import TextField from '@material-ui/core/TextField'
import { Link, useHistory } from 'react-router-dom'
import { auth } from './firebase'
import './Login.css'

function Login() {
    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('')

    const form = () => {
        const input = document.forms[0].value;
    }

    const login = (event) => {
        event.preventDefault(); //stops refresh
        //login logic...
        auth
        .signInWithEmailAndPassword(email, password)
          .then((auth) => {
            //logged in, redirect to homepage...
            history.push("/");
          })
          .catch((e) => alert(e.message))
    };

      const register = (event) => {
        event.preventDefault(); //stops refresh
        //register logic
        auth
          .createUserWithEmailAndPassword(email, password)
          .then((auth) => {
            //created a user and logged in, redirect to homepage
            history.push("/");
          })
          .catch((e) => alert(e.message));
      };

    return (
        <div className="login">
            {/* <div className="login__background">
              <img src="https://assets.nflxext.com/ffe/siteui/vlv3/43375087-3875-4574-86c4-4c14c3473535/9a253a8f-2091-4850-accd-f2768b1f9f6c/US-en-20200921-popsignuptwoweeks-perspective_alpha_website_large.jpg" 
              alt=""/>
            </div> */}
                <div className="login__container">
            <Link to="/">
                <img className="login__logo" 
                src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
                alt="Netflix Logo"/>
            </Link>
            <div className="login__form">
                <form>
                  <div className="login__title">
                    <h1>sign in</h1>
                  </div>

                  <div className="login__inputContainer">

                  <label className="login__custom-field">
                  <input className="login__input" required value={email} onChange={e => setEmail(e.target.value)}/>
                  <span className="login__placeholder">Email or phone number</span>
                  </label>

                  <label className="login__custom-field-1">
                  <input  type="password" required value={password} onChange={e => setPassword(e.target.value)}/>
                  <span className="login__placeholder-1">Password</span>
                  </label>

                  </div>
                 
                      <button onClick={login} className="login__btn">sign in</button>
                      <div className="login__registerContainer">
                      <span className="login__question">New to Netflix?</span>
                      <div onClick={register} className="login__signUp">sign up here</div>
                      </div>
                </form>
            </div>
                </div>
        </div>
    )
}

export default Login
