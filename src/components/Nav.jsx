import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./Nav.module.css";

const Nav = () => {
    return (
        <nav className={styles.nav}>
            <ul className={styles.nav__list}>
            <li className={styles.nav__list_item}>
                <NavLink to="profile">profie</NavLink>
            </li>
            <li className={styles.nav__list_item}>
                <NavLink to="dialogs">message</NavLink>
            </li>
            <li className={styles.nav__list_item}>
                <NavLink to="content">content</NavLink>
            </li>
            </ul>
         </nav>
    )
};

export default Nav;