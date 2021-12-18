import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import UserData from './UserData/UserData';


const Dialogs = (props) => {
    let userDataElements = props.state.usersData.map( user => <UserData key={user.id} id={user.id} name={user.name}/> );
    let messageElements = props.state.usersPost.map ( post => <Message message={post.message} likesCount={post.likesCount}/>);
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogList}>
                {userDataElements}
            </div >
            <div className={styles.messages}>
                {messageElements}
            </div>
        </div>
    )
};

export default Dialogs;