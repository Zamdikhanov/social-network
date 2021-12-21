import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let onAreaChange = () => {
    let text = newPostElement.current.value;
    props.changeText(text);
  }

  let onAddPost = () => {
    props.addPost();
  }

  let posts = props.postsData.map(postsData => <Post postsData={postsData} />).reverse();

  return (
    <main className={styles.myPosts}>
      <div className={styles.addPost}>
        <h3>My Posts</h3>
        <textarea className={styles.textarea} ref={newPostElement} value={props.newPostText} placeholder="Введите ваше сообщение" onChange={onAreaChange}></textarea>
        <button onClick={onAddPost}>Add Post</button>
      </div>
      {posts}
    </main>
  )
};

export default MyPosts;