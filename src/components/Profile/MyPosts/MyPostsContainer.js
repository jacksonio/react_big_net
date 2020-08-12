import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";


// const MyPostsContainer = (props) => {
//
//     return (
//         <StoreContext.Consumer>
//             {
//                 (store) => {
//                     const profileStore = store.getState().profilePage
//                     debugger
//                     const addPost = () => {
//                         store.dispatch(addPostActionCreator());
//                     }
//
//                     const onPostChange = (text) => {
//                         store.dispatch(updatePostTextActionCreator(text))
//                     }
//
//                     return <MyPosts updatePostTextActionCreator={onPostChange} addPostActionCreator={addPost} state={profileStore} />
//                 }
//             }
//
//         </StoreContext.Consumer>
//     )
//
// }

let mapStateToProps = (state) => {
    return {
        profileStore: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostActionCreator: () => {
            dispatch(addPostActionCreator())
        },
        updatePostTextActionCreator: (text) => {
            dispatch(updatePostTextActionCreator(text))
        }
    }
}


let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
