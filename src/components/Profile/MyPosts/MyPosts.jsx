import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";

const MyPosts = () => {
    return (
      <main className={styles.myPosts}>
        <div>
          <textarea></textarea>
          <button>Add Post</button>
        </div>
        <Post message="My first Post" />
        <Post message="Второй день (15.12.21) Курс: Путь самурая" />
        <Post />
        <Post />
    </main>
    )
};

export default MyPosts;