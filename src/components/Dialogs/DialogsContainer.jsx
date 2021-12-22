import React from 'react';
import { connect } from 'react-redux';
import { addDialogPostActionCreator, changeDialogTextActionCreator } from '../../redux/dialog-reducer';
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
        onChangeAreaValue: (text) => {
            dispatch(changeDialogTextActionCreator(text));
        },
        onAddPost: () => {
                dispatch(addDialogPostActionCreator());
        },
    }
}

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs)

export default DialogsContainer;