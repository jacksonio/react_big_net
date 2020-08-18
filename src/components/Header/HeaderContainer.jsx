import React from 'react';
import Header from "./Header";
import {connect} from "react-redux";
import {setUserData, setUserDataThunk} from "../../redux/auth-reducer";

class HeaderContainer extends React.Component {
    componentDidMount() {
        this.props.setUserDataThunk()
    }
    render() {
        return <Header {...this.props} />
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login
})

const mapDispatchToProps = ({
    setUserData,
    setUserDataThunk
})

export default connect(mapStateToProps, mapDispatchToProps)(HeaderContainer);
