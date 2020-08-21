import {addPostActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profileStore: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostActionCreator: (text) => {
            dispatch(addPostActionCreator(text))
        }
    }
}


let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
