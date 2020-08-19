import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import {setUserProfileThunk} from "../../redux/profile-reducer";
import {withRouter} from "react-router-dom";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.setUserProfileThunk(userId);
    }


    render() {
        return <Profile
            isLoading={this.props.isLoading}
            {...this.props}
        />
    }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile,
    isLoading: state.usersPage.isLoading,
})

let mapDispatchToProps = {
    setUserProfileThunk
}

export default compose(
    withAuthRedirect,
    withRouter,
    connect(mapStateToProps, mapDispatchToProps)
)(ProfileContainer)
