import React from 'react';
import './App.css';
import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Profile from "./components/Profile/Profile";
import {Route} from "react-router-dom";
import Dialogs from "./components/Dialogs/Dialogs";
import Settings from "./components/Settings/Settings";
import News from "./components/News/News";
import Music from "./components/Music/Music";

export const App = (props) => {
    return (
        <div className='app-wrapper'>
            <Header/>
            <Navbar friends={props.state.sidebar.friends}/>
            <div className='app-wrapper-content'>
                <Route path='/profile'
                       render={() => <Profile
                           profilePage={props.state.profilePage}
                           dispatch={props.dispatch}
                       />}
                />
                <Route path='/dialogs' render={() => <Dialogs
                    {...props}
                    messages={props.state.messagesPage.messages}
                    dialogs={props.state.messagesPage.dialogs}
                    dispatch={props.dispatch}
                    newMessageText={props.state.messagesPage.newMessageText}
                />}
                />
                <Route path='/settings' component={Settings}/>
                <Route path='/news' component={News}/>
                <Route path='/music' component={Music}/>
            </div>
        </div>
    )
}
