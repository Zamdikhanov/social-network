import * as axios from 'axios';
import React from 'react';
import styles from './Users.module.css';
import userPhoto from '../../assets/images/unload-avatar.webp';

class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length < 4) {
            axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                    this.props.setTotalCount(response.data.totalCount);
                });
        }
    }
   
    onPageChanged = (pageNumber) => {
        this.props.setCurrentPages(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber+1}&count=${this.props.pageSize}`)
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
    }

    render() {

        let pagesCount = Math.ceil(this.props.totalUsersCount/this.props.pageSize);
        let pages = [];
        for (let i=0; i<20; i++) {
            pages.push(i);
        }

        return (
            <div className={styles.main}>
                <div className={styles.pageNumbers}>
                    {pagesCount} страниц
                    {pages.map(p => {
                        return (
                        <span className={ this.props.currentPage === p ? styles.selectedPage : styles.unSelectedPage} onClick={() => {this.onPageChanged(p)}}>{p}</span>);
                    })}
                </div>
                {this.props.users.map(user => (
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
                            <button className={styles.button} onClick={() => { this.props.onClickFollow(user.id) }}> {(user.isfollowed) ? 'Отписаться' : 'Подписаться'}</button>
                            <button className={styles.button}>Посмотреть профиль</button>
                        </div>
                    </div>
                )
                )
                }

            </div>
        )
    }
}

export default Users;