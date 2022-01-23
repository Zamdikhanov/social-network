import React from 'react';
import { connect } from 'react-redux';
import { Routes, Route, HashRouter } from 'react-router-dom';
import './App.css';
import ProfileContainer from './components/Profile/ProfileContainer';
import Nav from './components/Nav/Nav';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import UsersContainer from './components/Users/UsersContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import Login from './components/Login/Login';
import { initializeApp } from './redux/app-reducer';
import Preloader from './components/Common/Preloader/Preloader';


class App extends React.Component {
    componentDidMount() {
        this.props.initializeApp();
    }

    render() {
        if (!this.props.initialized) {
        return (<Preloader />);
        }
        return (
            <HashRouter>
                <div className="App" >
                    <HeaderContainer />
                    <Nav />
                    <main className="main" >
                        <Routes >
                            <Route path="/*"
                                element={< ProfileContainer />} />
                            <Route path="/dialogs/*"
                                element={< DialogsContainer />} />
                            <Route path="/profile/*"
                                element={< ProfileContainer />} />
                            <Route path="/users"
                                element={< UsersContainer />} />
                            <Route path="/content"
                                element={< div />} />
                            <Route path="/login"
                                element={< Login />} />
                        </Routes>
                    </main>
                </div>
            </HashRouter>
        )
    }
};

const mapStateToProps = (state) => ({
    // isAuth: state.auth.isAuth,
    // login: state.auth.login,
    initialized: state.app.initialized,
});

export default connect(mapStateToProps, { initializeApp })(App);