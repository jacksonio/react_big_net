import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";

const DialogsContainer = (props) => {


    let state = props.store.getState().dialogsPage;

    const submitHandler = () => {
        props.store.dispatch(addMessageActionCreator())
    }
    const onChangeHandler = (text) => {
        props.store.dispatch(updateNewMessageTextActionCreator(text))
    }
    return (
       <Dialogs state={state} submitHandler={submitHandler} onChangeHandler={onChangeHandler} />
    )
}

export default DialogsContainer;
