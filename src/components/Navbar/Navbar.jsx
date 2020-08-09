import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = () => {
    return (
        <nav className={s.nav}>
            <div className={s.item}>
                <NavLink to={'/profile'} activeClassName={s.activeClass}>Profile</NavLink>
            </div>
            <div className={`${s.item}`}>
                <NavLink to={'/dialogs'} activeClassName={s.activeClass}>Dialogs</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/news'} activeClassName={s.activeClass}>News</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/music'} activeClassName={s.activeClass}>Music</NavLink>
            </div>
            <div className={s.item}>
                <NavLink to={'/settings'} activeClassName={s.activeClass}>Settings</NavLink>
            </div>
        </nav>
    )
}

export default Navbar;
