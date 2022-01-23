import React from 'react';
import styles from './UserCard.module.css';
import userPhoto from '../../../assets/images/unload-avatar.webp';
import { NavLink } from 'react-router-dom';


const UserCard = ({ user, followingInProgress, onClickFollow }) => {

    return (
        <div className={styles.userCard} style={{ 'backgroundImage': user.photos.large != null ? ("url(" + user.photos.large + ")") : ("url(" + userPhoto + ")") }}>
            <div className={styles.userCard__inner}>
                <div className={styles.fullName}>
                    {user.name}
                </div>
                <div className={styles.data}>
                    ID:{user.id}
                </div>
                <div className={styles.data}>
                    {user.status}
                </div>
                <button disabled={followingInProgress.some(id => id === user.id)} className={styles.button} onClick={() => onClickFollow(user)}>
                    {(user.followed) ? 'Отписаться' : 'Подписаться'}
                </button>
                <NavLink to={'/profile/' + user.id} className={styles.link}>
                    <button className={styles.button} onClick={() => window.scrollTo(0, 0)}>Перейти в профиль</button>
                </NavLink>
            </div>
        </div>
    )
}

export default UserCard;