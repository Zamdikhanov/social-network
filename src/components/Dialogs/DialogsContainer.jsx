import { connect } from 'react-redux';
import { compose } from 'redux';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';
import { addDialogPostActionCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';


let mapStateToProps = (state) => {
    return {
        usersData: state.dialogPage.usersData,
        usersPost: state.dialogPage.usersPost,
        newPostText: state.dialogPage.newPostText,
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        onAddPost: (text) => {
                dispatch(addDialogPostActionCreator(text));
        },
    }
}


const DialogsContainer = compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect,
)(Dialogs)

export default DialogsContainer;