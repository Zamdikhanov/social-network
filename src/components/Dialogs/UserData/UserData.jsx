import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './UserData.module.css';

const UserData = (props) => {
    return (
        <div className={styles.dialog + ' ' + styles.active}>
            <NavLink to={'social-network/login' + props.id} > {props.name} </NavLink>
        </div>
    )
};

export default UserData;