import React from "react";
import styles from "./Post.module.css";

const Post = (props) => {
    return (
        <div className={styles.post}>
          <img className={styles.postImage} src="https://svgx.ru/svg/159301.svg"></img>
          {props.message}
        </div>
    )
};

export default Post;