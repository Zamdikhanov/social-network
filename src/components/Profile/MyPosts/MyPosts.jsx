import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";


const MyPosts = (props) => {

  let posts = props.posts.map( post => <Post message={post.message} />);

  let newPostElement = React.createRef();

  let addPost = () => {
    let text = newPostElement.current.value;
    alert(text);
    newPostElement.current.value ='';
  }

    return (
      <main className={styles.myPosts}>
        <div className={styles.addPost}>
          <h3>My Posts</h3>
          <textarea className={styles.textarea} ref={newPostElement}></textarea>
          <button onClick={addPost}>Add Post</button>
        </div>
        {posts}
    </main>
    )
};

export default MyPosts;