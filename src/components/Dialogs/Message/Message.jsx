import React from 'react';
import styles from './Message.module.css';

const Message = (props) => {
    return (
        <div className={styles.message}>
            {props.message}
            <div className={styles.likes}>
                Likes: {props.likesCount}
            </div>
        </div>
    )
};

export default Message;