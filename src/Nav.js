import React, { useEffect,useState } from 'react';
import { Link } from "react-router-dom";
import { useSelector } from 'react-redux';
import { selectUser } from './features/UserSlice';
import { auth } from './firebase';
import './Nav.css';

function Nav() {
    const [show, handleShow] = useState(false);
    const user = useSelector(selectUser);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100 ) {
                handleShow(true);
            }
            else handleShow(false);
        });
        // return () => {
        //     window.removeEventListener('scroll');
        // };
    },[]);

    const login = () => {
        if(user) {
          auth.signOut();
        }
      }

    return (
        <div className={`nav ${show && "nav__black"}`}>
            <Link to="/">
            <img className="nav__logo" 
            src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" 
            alt="Netflix Logo"/>
            </Link>
            
            <Link to={"/login"} style={{textDecoration:'none'}}>
                <div className="nav__signIn" onClick={login}>
                    <img src={user? 'https://pro2-bar-s3-cdn-cf1.myportfolio.com/dddb0c1b4ab622854dd81280840458d3/98032aebff601c1d993e12a0_rw_600.png?h=8030f4d5734548795c22da59ca72e3e1' : ''} 
                     className="nav__avatar"
                    alt=""/>
                     {user? 'Sign out': 'Sign in'}
                </div>
            </Link>
           
        </div>
    )
}


export default Nav;
