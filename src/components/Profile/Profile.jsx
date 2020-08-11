import React from 'react';
import MyPosts from './MyPosts/MyPosts';
import ProfileInfo from "./ProfileInfo/ProfileInfo";

const Profile = (props) => {
  return (
    <div>
      <ProfileInfo />
      <MyPosts
          posts={props.profilePage.posts}
          newProfileText={props.profilePage.newProfileText}
          dispatch={props.dispatch}
      />
    </div>
  )
}

export default Profile;
