import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';


const MyPosts = (props) => {

    const addPost = () => {
        props.addPostActionCreator()
    }

    const onPostChange = (e) => {
        let text = e.target.value;
        props.updatePostTextActionCreator(text)
    }
    return (
        <div className={s.PostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} value={props.profileStore.newProfileText}/>
                </div>
                <div>
                    <button onClick={addPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {props.profileStore.posts.map((post => <Post id={post.id} message={post.message} likesCount={post.likesCount}/>))}
            </div>
        </div>
    )
}

export default MyPosts;
