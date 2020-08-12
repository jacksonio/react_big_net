import React from 'react';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

    const state = props.store.getState().profilePage;

    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (text) => {
        props.store.dispatch(updatePostTextActionCreator(text))
    }

    return (
       <MyPosts updatePostTextActionCreator={onPostChange} addPostActionCreator={addPost} state={state} />
    )

}

export default MyPostsContainer;
