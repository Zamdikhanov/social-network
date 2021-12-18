import React from 'react';
import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css"

const Dialog = (props) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={"/dialogs/" + props.id}> {props.name} </NavLink>
        </div>
    )
};

let postData = [
    { id: "1", message: "Hello world!", likesCount: "5" },
    { id: "2", message: "I am programming", likesCount: "6" },
    { id: "3", message: "It`s cool!", likesCount: "10" }
];

const Message = (props) => {
    return (
        <div className={styles.message}>
            {props.message}
            <div className={styles.likes}>
                Likes: {props.likesCount}
            </div>
        </div>
    )
}

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogList}>
                <Dialog name="Airat" id="1" />
                <Dialog name="Lilya" id="2" />
                <Dialog name="Bulat" id="3" />
            </div >
            <div className={styles.messages}>
                <Message message={postData[0].message} likesCount={postData[0].likesCount} />
                <Message message={postData[1].message} likesCount={postData[1].likesCount} />
                <Message message={postData[2].message} likesCount={postData[2].likesCount} />
            </div>
        </div>
    )
};

export default Dialogs;