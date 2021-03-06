import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__list_item}>
                    <NavLink to="/profile" className = { navData => navData.isActive ? styles.active_a : styles.item }>Профиль</NavLink>
                </li>
                <li className={styles.nav__list_item}>
                    <NavLink to="/dialogs" className = { navData => navData.isActive ? styles.active_a : styles.item }>Диалоги</NavLink>
                </li>
                <li className={styles.nav__list_item}>
                    <NavLink to="/content" className = { navData => navData.isActive ? styles.active_a : styles.item }>Контент</NavLink>
                </li>
                <li className={styles.nav__list_item}>
                    <NavLink to="/users" className = { navData => navData.isActive ? styles.active_a : styles.item }>Однокурсники</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;