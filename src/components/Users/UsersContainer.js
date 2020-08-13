import React from 'react';
import {toggleFollowingAC, setUsersAC} from "../../redux/users-reducer";
import Users from "./Users";
import {connect} from "react-redux";



let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        toggleFollowing: (userId) => dispatch(toggleFollowingAC(userId)),
        setUsers: (users) => dispatch(setUsersAC(users))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Users)


