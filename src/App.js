import React, { useEffect } from 'react'
import Row from './Row'; 
import Login from "./Login";
import Nav from './Nav';
import Banner from './Banner';
import requests from './requests';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { useDispatch } from "react-redux";
import { auth } from './firebase'
import {login, logout } from './features/UserSlice'

import './Nav.css';
import './App.css';
import './Banner.css';

export default function App() {
    const dispatch = useDispatch();

    useEffect(() => {
        auth.onAuthStateChanged(authUser => {
          if (authUser) {
            dispatch(login({
              user: authUser.email
            }))
          }
          else {
            dispatch(logout());
          }
        })
      },[dispatch])
    return (
        <Router>
        <div className="app">
            <Switch>
            <Route path="/login">
                <Login/>
            </Route>
            <Route path="/">
            <Nav/>
            <Banner/>

            <Row title="NETFLIX ORIGINALS"fetchUrl={requests.fetchNetflixOriginals}
            isLargeRow/>
            <Row title="Trending Now"fetchUrl={requests.fetchTrending}/>
            <Row title="Action Movies"fetchUrl={requests.fetchActionMovies}/>
            <Row title="Comedy Movies"fetchUrl={requests.fetchComedyMovies}/>
            <Row title="Horror Movies"fetchUrl={requests.fetchHorrorMovies}/>
            <Row title="Romance"fetchUrl={requests.fetchRomanceMovies}/>
            <Row title="Documentaries"fetchUrl={requests.fetchDocumentaries}/>
            </Route>
            </Switch>
        </div>
            </Router>
    )
}


// api key '1622c40ec666fe6ccbe9fc69173b9b84'