import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/userPhoto.png";
import {NavLink} from "react-router-dom";
import axios from "axios";


let Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
    for (let i = 1; i <= pagesCount; i++) {
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
                         <button onClick={() => {
                             if (u.isFollow) {
                                 console.log("отписка")
                                 axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                     withCredentials: true,
                                     headers: {
                                         "API-KEY": "828b4e74-97fa-43b1-ac31-8a11dac7fc70"
                                     }
                                 })
                                     .then(response => {
                                         if (response.data.resultCode === 0) {
                                             props.toggleFollowing(u.id)
                                         }
                                     });

                             } else {
                                 axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, null, {
                                     withCredentials: true,
                                     headers: {
                                         "API-KEY": "828b4e74-97fa-43b1-ac31-8a11dac7fc70"
                                     }
                                 })
                                     .then(response => {
                                         if (response.data.resultCode === 0) {
                                             props.toggleFollowing(u.id)
                                         }
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