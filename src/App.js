import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';


function App(props) {
    return (
        <BrowserRouter>
            <div className="App" >
                <Header />
                <Nav />
                <main className="main" >
                    <Routes >
                        {/* <Route path="/" element={< Profile state={props.state.profilePage}/>} /> */}
                        <Route path="/dialogs/*" element={< DialogsContainer />} />
                        <Route path="/profile" element={< Profile />} />
                        <Route path="/users" element={< UsersContainer />} />
                    </Routes >
                </main>
            </div >
        </BrowserRouter>
    );
};

export default App;