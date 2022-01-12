import React from "react";
import styles from "./MyPosts.module.css";
import Post from "./Post/Post";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const MyPosts = (props) => {

  let posts = props.postsData.map((postsData, i) => <Post key={i} postsData={postsData} />).reverse();

  return (
    <main className={styles.myPosts}>
      <MyPostsForm {...props} />
      <div className={styles.postsContainer}>
        {posts}
      </div>
    </main>
  )
};

const MyPostsForm = (props) => {
  return (
    <Formik
      initialValues={{
        textarea: '',
      }}
      validationSchema={
        Yup.object({
          textarea: Yup.string().max(70, 'Слишком большое сообщение').min(1).required('Нечего добавлять')
        })
      }
      onSubmit={async values => {
        props.addPost(values.textarea);
        values.textarea = '';
      }}
    >
      {props => (
        <Form className={styles.addPost}>
          <h3 className={styles.addPost__title}>Мои сообщения</h3>
          <Field as='textarea' className={styles.textarea + ' ' + (props.touched.textarea && props.errors.textarea ? styles.textarea_alert : null)} id='textarea' name='textarea' placeholder="Введите ваше сообщение" />
          {props.touched.textarea && props.errors.textarea && <span>{props.errors.textarea}</span>}
          <button className={styles.addPost__button} type="submit" >Добавить сообщение</button>
        </Form>
      )}
    </Formik >
  )
};

export default MyPosts;