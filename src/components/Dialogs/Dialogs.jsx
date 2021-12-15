import { NavLink } from "react-router-dom";
import styles from "./Dialogs.module.css"

const Dialogs = () => {
    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogList}>
                <div className={styles.dialog}>
                    <NavLink to="/dialogs/1">Ayrat</NavLink>
                </div>
                <div className={styles.dialog}>
                <NavLink to="/dialogs/1">Bulat</NavLink>
                </div>
            </div >
            <div className={styles.messages}>
                <div className={styles.message}>
                    Hello world!
                </div>
                <div className={styles.message}>
                    I am programming
                </div>
                <div className={styles.message}>
                    It`s cool!
                </div>
            </div>
        </div>
    )
};

export default Dialogs;