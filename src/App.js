import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';


function App(props) {
    return ( 
    <BrowserRouter>
        <div className = "App" >
            <HeaderContainer />
            <Nav />
            <main className = "main" >
                <Routes>
                    <Route path = "social-network/*" element = { < ProfileContainer /> }/>
                    <Route path = "social-network/dialogs/*" element = { < DialogsContainer /> }/>
                    <Route path = "social-network/profile/*" element = { < ProfileContainer /> }/>
                    <Route path = "social-network/users" element = { < UsersContainer /> }/>
                    <Route path = "social-network/content" element = { < div /> }/>
                    <Route path = "social-network/login" element = { < Login /> }/>
                < /Routes>
            </main>
        < /div>
    </BrowserRouter>
    )
};

export default App;