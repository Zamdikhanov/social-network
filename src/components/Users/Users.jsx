import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/unload-avatar.webp';
import { NavLink } from 'react-router-dom';
// import Preloader from '../Common/Preloader/Preloader';


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);
    let pages = [];
    for (let i = 0; i < 20; i++) {
        pages.push(i);
    }

    return (
        <div className={styles.main}>
            <div className={styles.pageNumbers}>
                {pagesCount} страниц
                {/* <Preloader isFetching={props.isFetching} /> */}
                {pages.map(p => {
                    return (
                        <span className={props.currentPage === p ? styles.selectedPage : styles.unSelectedPage} onClick={() => { props.onPageChanged(p) }}>{p}</span>);
                })}
            </div>
            {props.users.map(user => (
                <div key={user.id} className={styles.userCard} style={{ 'backgroundImage': user.photos.large != null ? ("url(" + user.photos.large + ")") : ("url(" + userPhoto + ")") }}>
                    <div className={styles.gradient}>
                    </div>
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
                        <button className={styles.button} onClick={() => { props.onClickFollow(user.id) }}> {(user.isfollowed) ? 'Отписаться' : 'Подписаться'}</button>
                        <NavLink to={'/profile/' + user.id} className={styles.link}>
                            <button className={styles.button}>Перейти в профиль</button>
                        </NavLink>
                    </div>
                </div>
            )
            )
            }
        </div>
    )
}

export default Users;