import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfileThunk, getUserStatusThunk, updateUserStatusThunk} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        if(!userId) {
            userId = 10934
        }
        this.props.setUserProfileThunk(userId);
        this.props.getUserStatusThunk(userId)
    }


    render() {
        return <Profile
            {...this.props}
        />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isLoading: state.usersPage.isLoading,
    status: state.profilePage.status
})

let mapDispatchToProps = {
    setUserProfileThunk,
    getUserStatusThunk,
    updateUserStatusThunk
}

export default compose(
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer)
