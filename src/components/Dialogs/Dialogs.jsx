import React from 'react';
import { NavLink } from 'react-router-dom';
import { addDialogPostActionCreator, changeDialogTextActionCreator } from '../../not_redux/state';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import UserData from './UserData/UserData';


const Dialogs = (props) => {

    let text='';

    let changeAreaValue = (event) => {
        text = event.target.value;
        props.dispatch(changeDialogTextActionCreator(text));
    }

    let addPost = () => {
        props.dispatch(addDialogPostActionCreator());
    }

    let userDataElements = props.state.usersData.map(user => <UserData key={user.id} id={user.id} name={user.name} />);
    let messageElements = props.state.usersPost.map(post => <Message message={post.message} likesCount={post.likesCount} />);

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
                    <textarea className={styles.textarea} value={props.state.newPostText} placeholder="Введите ваше сообщение" onChange={changeAreaValue}></textarea>
                    <button onClick={addPost}>Add Post</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;