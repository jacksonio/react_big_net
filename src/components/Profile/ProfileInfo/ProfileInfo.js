import React from "react";
import classes from './ProfileInfo.module.css'
export default () => {
    return (
        <>
            <div>
                <img
                    src='https://images.pexels.com/photos/248797/pexels-photo-248797.jpeg?auto=compress&cs=tinysrgb&h=350'
                    alt={'profile_img'}/>
            </div>
            <div className={classes.profileDescription}>
                ava + description
            </div>
        </>
    )
}
