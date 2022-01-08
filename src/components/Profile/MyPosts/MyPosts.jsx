import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Formik, Form, Field } from 'formik';


const MyPosts = (props) => {

  let posts = props.postsData.map(postsData => <Post postsData={postsData} />).reverse();

  return (
    <main className={styles.myPosts}>
      <MyPostsForm {...props} />
      {posts}
    </main>
  )
};

const MyPostsForm = (props) => {
  return (
    <Formik
      initialValues={{
        textarea: '',
      }}
      onSubmit={async values => {
        props.addPost(values.textarea);
        values.textarea = '';
      }}
    >
      <Form className={styles.addPost}>
        <h3 className={styles.addPost__title}>Мои сообщения</h3>
        <Field as='textarea' className={styles.textarea} id='textarea' name='textarea' placeholder="Введите ваше сообщение" />
        <button className={styles.addPost__button} type="submit" >Добавить сообщение</button>
      </Form>
    </Formik >
  )
};

export default MyPosts;