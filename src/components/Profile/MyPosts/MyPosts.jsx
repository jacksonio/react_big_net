import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';
import {Field, reduxForm, reset} from "redux-form";


const MyPosts = (props) => {

    const submitHandler = (values) => {
        props.addPostActionCreator(values.postText)
    }

    return (
        <div className={s.PostsBlock}>
            <h3>My posts</h3>
            <div>
               <PostReduxForm onSubmit={submitHandler} />
            </div>
            <div className={s.posts}>
                {props.profileStore.posts.map((post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>))}
            </div>
        </div>
    )
}

const PostForm = (props) => {
    const {handleSubmit} = props
    return (
        <form onSubmit={handleSubmit}>
            <Field name={'postText'} placeholder={'your post message'} component={'textarea'} />
            <button>Add post</button>
        </form>

    )
}

const resetAfterSubmit = (result, dispatch) => dispatch(reset('postForm'))

const PostReduxForm = reduxForm({
    form: 'postForm',
    onSubmitSuccess: resetAfterSubmit
})(PostForm)

export default MyPosts;
