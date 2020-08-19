import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
const Dialogs = (props) => {

    let dialogsElements = props.dialogsStore.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsStore.messages.map(m => <Message message={m.message}/>);

    const submitHandler = () => {
        props.submitHandler()
    }
    const onChangeHandler = (e) => {
        let text = e.target.value
        props.onChangeHandler(text)
    }

    if(!props.isAuth) return <Redirect to={'/login'} />


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    <textarea onChange={onChangeHandler} value={props.dialogsStore.newMessageText}/>
                </div>
                <div>
                    <button onClick={submitHandler}>Add</button>
                </div>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;
