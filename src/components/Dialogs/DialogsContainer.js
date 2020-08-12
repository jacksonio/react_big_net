import React from 'react';
import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";

// const DialogsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//
//                     const dialogsStore = store.getState().dialogsPage
//
//
//                     const submitHandler = () => {
//                         store.dispatch(addMessageActionCreator())
//                     }
//                     const onChangeHandler = (text) => {
//                         store.dispatch(updateNewMessageTextActionCreator(text))
//                     }
//
//                     return <Dialogs state={dialogsStore} submitHandler={submitHandler} onChangeHandler={onChangeHandler}/>
//                 }
//             }
//         </StoreContext.Consumer>
//
//     )
// }

let mapStateToProps = (state) => {
    return {
        dialogsStore: state.dialogsPage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        submitHandler: () => {
            dispatch(addMessageActionCreator())
        },
        onChangeHandler: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)
export default DialogsContainer;
