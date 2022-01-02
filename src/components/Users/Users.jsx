import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/unload-avatar.webp';
import { NavLink } from 'react-router-dom';
import Preloader from '../Common/Preloader/Preloader';


const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize);

    let newPage = React.createRef();

    return (
        <div className={styles.main}>
            <div className={styles.pageNumbers}>
                <button className={styles.switchingPageButton} onClick={() => { props.onPageChanged(props.currentPage - 1) }}>
                    Предыдущая
                </button>
                <div> стр. {props.currentPage} из {pagesCount} </div>
                <button className={styles.switchingPageButton} onClick={() => { props.onPageChanged(props.currentPage + 1) }}>
                    Следующая
                </button>
                <Preloader isFetching={props.isFetching} />
            </div>
            <div className={styles.pageNumbers}>
                <input className={styles.pageNumberInput} type='number' min='1' ref={newPage} placeholder={props.currentPage} />
                <button className={styles.switchingPageButton} onClick={() => {
                    props.onPageChanged(Math.round(newPage.current.value));
                    newPage.current.value='';
                    }}>
                    Перейти
                </button>
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
                        <button disabled={props.followingInProgress.some(id => id == user.id)} className={styles.button} onClick={() => props.onClickFollow(user)}>
                            {(user.followed) ? 'Отписаться' : 'Подписаться'}
                        </button>
                        <NavLink to={'/social-network/profile/' + user.id} className={styles.link}>
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