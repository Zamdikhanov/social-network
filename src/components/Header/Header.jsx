import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.css';

const Header = (props) => {
    return (
        <header className={styles.header}>
            <h2>Zamdikhanov</h2>
            <div className={styles.login_block}>
                {props.isAuth ? props.login : <NavLink to={'/login'}>Войти {props.login }</NavLink>}
            </div>
        </header>
    )
};

export default Header;