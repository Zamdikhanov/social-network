import React from 'react';
import { NavLink } from 'react-router-dom';
import { addDialogPostActionCreator, changeDialogTextActionCreator } from '../../redux/dialog-reducer';
import Dialogs from './Dialogs';


const DialogsContainer = (props) => {

    let state = props.store.getState();

    let onChangeAreaValue = (text) => {
        props.store.dispatch(changeDialogTextActionCreator(text));
    }

    let onAddPost = () => {
        props.store.dispatch(addDialogPostActionCreator());
    }

    return (
        <Dialogs onChangeAreaValue={onChangeAreaValue} onAddPost={onAddPost} usersData={state.dialogPage.usersData} usersPost={state.dialogPage.usersPost} newPostText={state.dialogPage.newPostText} />
    )
};

export default DialogsContainer;