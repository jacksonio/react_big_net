import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";

const Dialogs = (props) => {

    let state = props.store.getState().dialogsPage;

    let dialogsElements = state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = state.messages.map(m => <Message message={m.message}/>);

    const submitHandler = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    const onChangeHandler = (e) => {
        let text = e.target.value
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    <textarea onChange={onChangeHandler} value={state.newMessageText}/>
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
