import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Profile from './components/Profile/Profile';
import Nav from './components/Nav/Nav';
import Dialogs from './components/Dialogs/Dialogs';

function App() {
    return (
        <BrowserRouter>
            <div className="App" >
                <Header />
                <Nav />
                <main className="main" >
                    <Routes >
                        <Route path="/" element={< Profile />} />
                        <Route path="dialogs" element={< Dialogs />} />
                        <Route path="profile" element={< Profile />} />
                    </Routes >
                </main>
            </div >
        </BrowserRouter>
    );
};

export default App;