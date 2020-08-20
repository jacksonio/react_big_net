import React from "react";
import classes from './ProfileInfo.module.css'
import ProfileStatus from "./ProfileStatus";

export default (props) => {
    if(!props.profile) {
        return <div>Пользователь не предоставил информации о себе</div>
    }
    return (
        <>
            <div className={classes.profileDescription}>
                <img src={props.profile.photos.large} alt="profilePhoto"/>
                <ProfileStatus
                    profile={props.profile}
                    status={props.status}
                    updateUserStatusThunk={props.updateUserStatusThunk}
                />
            </div>
        </>
    )
}
