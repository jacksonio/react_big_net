import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import {StoreContext} from "./StoreContext";
import NavbarContainer from "./components/Navbar/NavbarContainer";

export const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <NavbarContainer />
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile />}
                />
                <Route path='/dialogs' render={() => <DialogsContainer

                />}
                />
                <Route path='/settings' component={Settings}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
            </div>
        </div>
    )
}
