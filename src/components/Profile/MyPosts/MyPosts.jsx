import React from 'react';
import s from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {

    const postData = [
        { id: 1, message: 'Hi my name is Jack', likesCount: 4},
        { id: 2, message: 'lorem ipsum', likesCount: 123},
        { id: 3, message: 'It\'s my first post', likesCount: 1},
    ]

    return (
        <div className={s.PostsBlock}>
            <h3>My posts</h3>
            <div>
                <div>
                    <textarea />
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                {postData.map((post => <Post id={post.id} message={post.message} likesCount={post.likesCount} />))}
            </div>
        </div>
    )

}

export default MyPosts;
