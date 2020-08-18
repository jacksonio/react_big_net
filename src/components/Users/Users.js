import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import {NavLink} from "react-router-dom";
import {usersAPI} from "../../api/api";


let Users = (props) => {

    // let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= 10; i++) {
        pages.push(i)
    }


    return (
        <div>
            {pages.map(p => {
                return <span
                    className={props.currentPage === p && styles.selectedPage}
                    onClick={() => {
                        props.onPageChange(p)
                    }}


                >{p}</span>
            })}
            {
                props.users.map(u => <div key={u.id}>
                <span>
                    <div>
                        <NavLink to={`/profile/${u.id}`}>
                            <img src={u.photos.small !== null ? u.photos.small : userPhoto}
                                 className={styles.userPhoto}
                            />
                        </NavLink>

                    </div>
                    <div>
                         <button disabled={props.isFollowingInProgress.some(id => id === u.id)} onClick={() => {
                             if (u.isFollow) {
                                 props.followingInProgress(true, u.id)
                                 usersAPI.unfollowUser(u.id).then(data => {
                                     if (data.resultCode === 0) {
                                         props.toggleFollowing(u.id)
                                     }
                                     props.followingInProgress(false, u.id)
                                 });
                             } else {
                                 props.followingInProgress(true, u.id)
                                 usersAPI.followUser(u.id).then(data => {
                                     if (data.resultCode === 0) {
                                         props.toggleFollowing(u.id)
                                     }
                                     props.followingInProgress(false, u.id)
                                 });
                             }
                         }}
                         >
                             {u.isFollow ? "Unfollow" : "Follow"}
                         </button>

                    </div>
                </span>
                    <span>
                    <span>
                        <div>{u.name}</div>
                        <div>{u.status}</div>
                    </span>
                    <span>
                        <div>{"u.location.country"}</div>
                        <div>{"u.location.city"}</div>
                    </span>
                </span>
                </div>)
            }
        </div>
    )
}

export default Users
