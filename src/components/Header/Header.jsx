import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';
import hintPhoto from './../../assets/images/lenin-way.png';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <div className={styles.header_text}>
                Создается по курсу "Путь самурая"
            </div>
            <img className={styles.hint_img} src={hintPhoto } ></img>
            <h2>SOCIAL NETWORK</h2>
            <div className={styles.login_block}>
                {props.isAuth ? props.login : <NavLink to={'/login'} className={styles.login_block__link}>Войти {props.login}</NavLink>}
            </div>
        </header>
    )
};

export default Header;