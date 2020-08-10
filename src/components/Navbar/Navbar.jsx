import React from 'react';
import s from './Navbar.module.css';
import {NavLink} from "react-router-dom";

const Navbar = (props) => {
    return (
        <nav className={s.nav}>
            <div>
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
            </div>
            <div className={s.friendBlockTitle}>
                <h3>Friends</h3>
            </div>
            <div className={s.friendBlock}>

                {props.friends.map(friend => (
                    <div>
                        <img src={friend.url}  alt="avatar"/>
                        <p>{friend.name}</p>
                    </div>
                ))}

                {/*<div>*/}
                {/*    <img src={props.friends[1].url}  alt="avatar"/>*/}
                {/*    <p>{props.friends[1].name}</p>*/}
                {/*</div>*/}
                {/*<div>*/}
                {/*    <img src={props.friends[2].url}  alt="avatar"/>*/}
                {/*    <p>{props.friends[2].name}</p>*/}
                {/*</div>*/}
            </div>
        </nav>
    )
}

export default Navbar;
