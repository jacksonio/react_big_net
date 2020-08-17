import React from 'react';
import {
    toggleFollowing,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleLoading
} from "../../redux/users-reducer";
import {connect} from "react-redux";
import axios from 'axios'
import Users from "./Users";
import Loader from "../Loader/Loader";

class UsersContainer extends React.Component {
    componentDidMount() {
        if (this.props.users.length === 0) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {
                withCredentials: true,
            })
                .then(response => {
                    this.props.setUsers(response.data.items)
                    this.props.setTotalUsersCount(response.data.totalCount)
                    this.props.toggleLoading(false)
                });
        }
    }

    onPageChange = (page) => {
        this.props.toggleLoading(true)
        this.props.setCurrentPage(page)
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${page}&count=${this.props.pageSize}`, {
            withCredentials: true,
        })
            .then(response => {
                this.props.setUsers(response.data.items)
                this.props.toggleLoading(false)
            });
    }


    render() {

        return this.props.isLoading
            ? <Loader />
            : <Users
                currentPage={this.props.currentPage}
                totalUsersCount={this.props.totalUsersCount}
                pageSize={this.props.pageSize}
                onPageChange={this.onPageChange}
                users={this.props.users}
                toggleFollowing={this.props.toggleFollowing}

            />

    }
}


let mapStateToProps = (state) => {
    return {
        users: state.usersPage.users,
        totalUsersCount: state.usersPage.totalUsersCount,
        pageSize: state.usersPage.pageSize,
        currentPage: state.usersPage.currentPage,
        isLoading: state.usersPage.isLoading
    }
}

export default connect(mapStateToProps, {
    toggleFollowing,
    setUsers,
    setCurrentPage,
    setTotalUsersCount,
    toggleLoading
})(UsersContainer)


