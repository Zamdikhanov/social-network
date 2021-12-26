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
                        <Route path="/dialogs/*" element={< DialogsContainer />} />
                        <Route path="/profile/*" element={< ProfileContainer />} />
                        <Route path="/users" element={< UsersContainer />} />
                    </Routes >
                </main>
            </div >
        </BrowserRouter>
    );
};

export default App;