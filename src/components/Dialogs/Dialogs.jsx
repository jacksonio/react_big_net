import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm, reset} from "redux-form";
const Dialogs = (props) => {

    let dialogsElements = props.dialogsStore.dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);
    let messagesElements = props.dialogsStore.messages.map(m => <Message message={m.message}/>);

    const sendForm = (values) => {
        props.submitHandler(values.textarea)
    }

    if(!props.isAuth) return <Redirect to={'/login'} />


    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                <DialogsReduxForm onSubmit={sendForm} />
                {messagesElements}
            </div>
        </div>
    )
}

const DialogsForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name={'textarea'} component={'textarea'} />
            <button>Add</button>
        </form>
    )
}

const resetAfterSubmit = (result, dispatch) => dispatch(reset('dialogsForm'));

const DialogsReduxForm = reduxForm({
    form: 'dialogsForm',
    onSubmitSuccess: resetAfterSubmit,
})(DialogsForm)

export default Dialogs;
