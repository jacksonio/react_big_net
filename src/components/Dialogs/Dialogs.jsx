import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
const Dialogs = (props) => {

    let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.state.messages.map(m => <Message message={m.message}/>);

    const submitHandler = () => {
        props.submitHandler()
    }
    const onChangeHandler = (e) => {
        let text = e.target.value
        props.onChangeHandler(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    <textarea onChange={onChangeHandler} value={props.state.newMessageText}/>
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
