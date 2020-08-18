import React from 'react';
import Profile from "./Profile";
import {connect} from "react-redux";
import { setUserProfileThunk} from "../../redux/profile-reducer";
import { withRouter } from "react-router-dom";

class ProfileContainer extends React.Component {
    componentDidMount() {
        let userId = this.props.match.params.userId
        this.props.setUserProfileThunk(userId);
    }



    render() {
      return <Profile {...this.props} />
  }
}

let mapStateToProps = (state) => ({
    profile: state.profilePage.profile
})

let mapDispatchToProps =  {
    setUserProfileThunk
}

let profileComponentWithRouterParams = withRouter(ProfileContainer)

export default connect(mapStateToProps, mapDispatchToProps)(profileComponentWithRouterParams);
