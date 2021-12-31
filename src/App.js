import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ProfileContainer from './components/Profile/ProfileContainer';
import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';


function App(props) {
    return (
        <BrowserRouter>
            <div className="App" >
                <HeaderContainer />
                <Nav />
                <main className="main" >
                    <Routes >
                        <Route path="social-network/*" element={< ProfileContainer />} />
                        <Route path="social-network/dialogs/*" element={< DialogsContainer />} />
                        <Route path="social-network/profile/*" element={< ProfileContainer />} />
                        <Route path="social-network/users" element={< UsersContainer />} />
                    </Routes >
                </main>
            </div >
        </BrowserRouter>
    );
};

export default App;