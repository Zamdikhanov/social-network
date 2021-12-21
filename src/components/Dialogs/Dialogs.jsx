import React from 'react';
import { NavLink } from 'react-router-dom';
import { addDialogPostActionCreator, changeDialogTextActionCreator } from '../../redux/dialog-reducer';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import UserData from './UserData/UserData';


const Dialogs = (props) => {

    let text='';

    let onChangeAreaValue = (event) => {
        text = event.target.value;
        props.onChangeAreaValue(text);
    }

    let onAddPost = () => {
        props.onAddPost();
    }

    let userDataElements = props.usersData.map(user => <UserData key={user.id} id={user.id} name={user.name} />);
    let messageElements = props.usersPost.map(post => <Message message={post.message} likesCount={post.likesCount} />);

    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogList}>
                {userDataElements}
            </div >
            <div className={styles.messages}>
                <div>
                    {messageElements}
                </div>
                <div>
                    <textarea className={styles.textarea} value={props.newPostText} placeholder="Введите ваше сообщение" onChange={onChangeAreaValue}></textarea>
                    <button onClick={onAddPost}>Add Post</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;