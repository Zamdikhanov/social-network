import React from "react";
import preloader from './../../../assets/images/preloader.svg';
import styles from './Preloader.module.css';


let Preloader = (props) => {
    return (
        <div className={styles.container}>
            {props.isFetching
                ? <img className={styles.img} src={preloader} alt="download" ></img>
                : null}
        </div>
    )
}

export default Preloader;