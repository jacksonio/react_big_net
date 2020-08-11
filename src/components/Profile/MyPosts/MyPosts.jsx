import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";


const MyPosts = (props) => {

    const state = props.store.getState().profilePage;
    const addPost = () => {
        props.store.dispatch(addPostActionCreator());
    }

    const onPostChange = (e) => {

        let text = e.target.value;
        props.store.dispatch(updatePostTextActionCreator(text))
    }

    return (
        <div className={s.PostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={state.newProfileText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {state.posts.map((post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>))}
            </div>
        </div>
    )

}

export default MyPosts;
