import React from 'react';
import styles from './Users.module.css';

const Users = (props) => {
    return (
        <div>
            {
                props.users.map(user => <div key={user.id} className={styles.userCard} style={{ 'backgroundImage': "url('https://content.tviz.tv/gfx/res/44466/azb4n7wrxnkg0w4gwsk0w0o4o.jpg')" }}>
                    <div className={styles.gradient}>
                    </div>
                    <div className={styles.userCard__inner}>
                        <div className={styles.fullName}>
                            {user.fullName}
                        </div>
                        <div className={styles.data}>
                            {user.location.city + ', ' + user.location.country}
                        </div>
                        <div className={styles.data}>
                            {user.status}
                        </div>
                        <button className={styles.button}>Подписаться</button>
                        <button className={styles.button}>Посмотреть профиль</button>
                    </div>
                </div>
                )
            }

        </div>
    )
}

export default Users;