import React from 'react';
import './App.css';
import HeaderContainer from "./components/Header/HeaderContainer";
import ProfileContainer from "./components/Profile/ProfileContainer";
import {Route} from "react-router-dom";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";
import DialogsContainer from "./components/Dialogs/DialogsContainer";
import NavbarContainer from "./components/Navbar/NavbarContainer";
import UsersContainer from "./components/Users/UsersContainer";
import Login from "./components/Login/Login";

export const App = (props) => {
    return (
        <div className='app-wrapper'>
            <HeaderContainer/>
            <NavbarContainer/>
            <div className='app-wrapper-content'>
                <Route path='/profile/:userId'
                       render={() => <ProfileContainer/>}
                />
                <Route path='/login' render={() => <Login />} />
                <Route path='/dialogs' render={() => <DialogsContainer/>}/>
                <Route path='/users' render={() => <UsersContainer/>}/>
                <Route path='/settings' component={Settings}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
            </div>
        </div>
    )
}
