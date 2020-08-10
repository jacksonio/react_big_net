import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";

const Dialogs = (props) => {


    let dialogsElements = props.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.messages.map(m => <Message message={m.message}/>);

    let textareaRef = React.createRef();

    const submitHandler = () => {
        props.addMessage()
    }

    const onChangeHandler = () => {
        let text = textareaRef.current.value
        props.updateNewMessageText(text)
    }
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <div>
                    <textarea ref={textareaRef} onChange={onChangeHandler} value={props.newMessageText}/>
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
