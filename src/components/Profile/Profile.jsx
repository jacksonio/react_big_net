import React from 'react';
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import Loader from "../Loader/Loader";

const Profile = (props) => {
    return (
        <div>
            {props.isLoading
                ? <Loader/>
                : <>
                    <ProfileInfo
                        profile={props.profile}
                        status={props.status}
                        // updateUserStatusThunk={props.updateUserStatusThunk}
                        />

                    <MyPostsContainer/>
                </>
            }
        </div>
    )
}

export default Profile;
