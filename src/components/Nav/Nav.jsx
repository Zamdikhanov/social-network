import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
                <li className={styles.nav__list_item}>
                    <NavLink to="/profile" className = { navData => navData.isActive ? styles.active_a : styles.item }>profile</NavLink>
                </li>
                <li className={styles.nav__list_item}>
                    <NavLink to="/dialogs" className = { navData => navData.isActive ? styles.active_a : styles.item }>dialog</NavLink>
                </li>
                <li className={styles.nav__list_item}>
                    <NavLink to="/content" className = { navData => navData.isActive ? styles.active_a : styles.item }>content</NavLink>
                </li>
            </ul>
        </nav>
    )
};

export default Nav;