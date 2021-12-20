import React from "react";
import { addDialogPostActionCreator, changeDialogTextActionCreator } from "../../../not_redux/dialog-reducer";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

  let newPostElement = React.createRef();

  let changeAreaValue = () => {
    let text = newPostElement.current.value;
    props.dispatch(changeDialogTextActionCreator(text));
  }

  let addPost = () => {
    props.dispatch(addDialogPostActionCreator());
  }

  let posts = props.state.postsData.map(postsData => <Post postsData={postsData} />).reverse();

  return (
    <main className={styles.myPosts}>
      <div className={styles.addPost}>
        <h3>My Posts</h3>
        <textarea className={styles.textarea} ref={newPostElement} value={props.state.newPostText} placeholder="Введите ваше сообщение" onChange={changeAreaValue}></textarea>
        <button onClick={addPost}>Add Post</button>
      </div>
      {posts}
    </main>
  )
};

export default MyPosts;