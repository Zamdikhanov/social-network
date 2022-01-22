import React from 'react';
import styles from './Users.module.css';
import PageSwitcher from './PageSwitcher';
import UserCard from './UserCard/UserCard';
import Preloader from '../Common/Preloader/Preloader';


const Users = (props) => {
    return (
        <div className={styles.main}>
            <PageSwitcher {...props} />
            {(props.isFetching)
                ? <Preloader isFetching={props.isFetching} />
                : props.users.map(user => (
                    <UserCard key={user.id} user={user}
                        followingInProgress={props.followingInProgress}
                        onClickFollow={props.onClickFollow} />
                ))}
            <PageSwitcher {...props} />
        </div>
    )
}

export default Users;