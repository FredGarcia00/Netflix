import React from 'react'
import Row from './Row'; 
import requests from './requests';
import Banner from './Banner';
import Nav from './Nav';
import './Nav.css';
import './App.css';
import './Banner.css';

export default function App() {
    return (
        <div className="app">
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
        </div>
    )
}


// api key '1622c40ec666fe6ccbe9fc69173b9b84'