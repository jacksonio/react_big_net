import {addPostActionCreator, updatePostTextActionCreator} from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";
import {connect} from "react-redux";

let mapStateToProps = (state) => {
    return {
        profileStore: state.profilePage
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        addPostActionCreator: () => {
            dispatch(addPostActionCreator())
        },
        updatePostTextActionCreator: (text) => {
            dispatch(updatePostTextActionCreator(text))
        }
    }
}


let MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)
export default MyPostsContainer;
