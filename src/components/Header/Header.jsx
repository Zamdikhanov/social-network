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
            <img className={styles.hint_img} src={hintPhoto} alt='Lenin'></img>
            <h2>SOCIAL NETWORK</h2>
            <button className={styles.login_button}>
                {props.isAuth
                    ? <span onClick={props.logOut}>{props.login}</span>
                    : <NavLink to={'social-network/login'} className={styles.login_button__link}>Войти</NavLink>}
            </button>
        </header>
    )
};

export default Header;