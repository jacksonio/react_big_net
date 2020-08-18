import React from 'react';
import {
    toggleFollowing,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleLoading, followingInProgress, getUsersThunkCreator, followingUser, unfollowingUser
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Loader from "../Loader/Loader";

class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            this.props.getUsersThunkCreator(this.props.currentPage, this.props.pageSize)
        }
    }

    onPageChange = (page) => {
        this.props.getUsersThunkCreator(page, this.props.pageSize)
    }


    render() {

        return this.props.isLoading
            ? <Loader/>
            : <Users
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChange={this.onPageChange}
                users={this.props.users}
                followingUser={this.props.followingUser}
                unfollowingUser={this.props.unfollowingUser}
                isFollowingInProgress={this.props.isFollowingInProgress}
            />

    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading,
        isFollowingInProgress: state.usersPage.isFollowingInProgress
    }
}

export default connect(mapStateToProps, {
    getUsersThunkCreator,
    followingUser,
    unfollowingUser
})(UsersContainer)


