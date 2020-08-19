import {addMessageActionCreator, updateNewMessageTextActionCreator} from "../../redux/dialogs-reducer";
import Dialogs from "./Dialogs";
import {connect} from "react-redux";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";

let mapStateToProps = (state) => {
    return {
        dialogsStore: state.dialogsPage,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        submitHandler: () => {
            dispatch(addMessageActionCreator())
        },
        onChangeHandler: (text) => {
            dispatch(updateNewMessageTextActionCreator(text))
        }
    }
}

export default compose(
    withAuthRedirect,
    connect(mapStateToProps, mapDispatchToProps),
)(Dialogs)
