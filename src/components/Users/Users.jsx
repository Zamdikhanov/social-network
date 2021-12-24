import * as axios from 'axios';
import React from 'react';
import styles from './Users.module.css';

class Users extends React.Component {

    componentDidMount() {
        if (this.props.users.length < 4) {
            axios.get('https://social-network.samuraijs.com/api/1.0/users')
                .then(response => {
                    this.props.setUsers(response.data.items);
                });
        }
    }

    // getUsers = () => {
    //     if (this.props.users.length === 0) {
    //         axios.get ('https://social-network.samuraijs.com/api/1.0/users')
    //             .then (response => {
    //                 this.props.setUsers(response.data.items);
    //             });
    //     } 
    // }

    render() {
        return (
            <div className={styles.main}>
                {this.props.users.map(user => (
                    <div key={user.id} className={styles.userCard} style={{ 'backgroundImage': "url('https://content.tviz.tv/gfx/res/44466/azb4n7wrxnkg0w4gwsk0w0o4o.jpg')" }}>
                        <div className={styles.gradient}>
                        </div>
                        <div className={styles.userCard__inner}>
                            <div className={styles.fullName}>
                                {user.name}
                            </div>
                            <div className={styles.data}>
                                {/* {user.location.city + ', ' + user.location.country} */}zaglushka 
                            </div>
                            <div className={styles.data}>
                                {user.status}
                            </div>
                            <button className={styles.button} onClick={() => { this.props.onClickFollow(user.id) }}> {(user.isfollowed) ? 'Подписаться' : 'Отписаться'}</button>
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