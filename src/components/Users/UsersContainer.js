import React from 'react';
import {
    toggleFollowing,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleLoading, followingInProgress
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import Users from "./Users";
import Loader from "../Loader/Loader";
import {usersAPI} from "../../api/api";

class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
                this.props.setUsers(data.items)
                this.props.setTotalUsersCount(data.totalCount)
                this.props.toggleLoading(false)
            });
        }
    }

    onPageChange = (page) => {
        this.props.toggleLoading(true)
        this.props.setCurrentPage(page)
        usersAPI.getUsers(page, this.props.pageSize).then(data => {
                this.props.setUsers(data.items)
                this.props.toggleLoading(false)
            });
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
                toggleFollowing={this.props.toggleFollowing}
                followingInProgress={this.props.followingInProgress}
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
    toggleFollowing,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleLoading,
    followingInProgress
})(UsersContainer)


