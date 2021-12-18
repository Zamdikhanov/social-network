import React from "react";
import styles from "./Profileinfo.module.css";

const Profileinfo = (props) => {
    return (
        <div>
          <img className={styles.profile__image} src="https://images.pexels.com/photos/8347501/pexels-photo-8347501.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"></img>
          {props.info}
        </div>
    )
};

export default Profileinfo;