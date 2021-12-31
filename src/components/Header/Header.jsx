import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import hintPhoto from './../../assets/images/lenin-way.png';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <NavLink to={'social-network/'} className={styles.header_text}>
                Создается по курсу "Путь самурая"
            </NavLink>
            <img className={styles.hint_img} src={hintPhoto} ></img>
            <h2>SOCIAL NETWORK</h2>

            <div className={styles.login_block}>
                {props.isAuth ? props.login : <NavLink to={'social-network/login'} className={styles.login_block__link}>Войти {props.login}</NavLink>}
            </div>
        </header>
    )
};

export default Header;