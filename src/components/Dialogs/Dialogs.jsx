import React from 'react';
import { Formik, Field, Form, useFormik } from 'formik';
import styles from './Dialogs.module.css';
import Message from './Message/Message';
import UserData from './UserData/UserData';


const Dialogs = (props) => {

    let text = '';

    let onChangeAreaValue = (event) => {
        text = event.target.value;
        props.onChangeAreaValue(text);
    }

    let onAddPost = () => {
        props.onAddPost();
    }

    let userDataElements = props.usersData.map(user => <UserData key={user.id} id={user.id} name={user.name} />);
    let messageElements = props.usersPost.map(post => <Message message={post.message} likesCount={post.likesCount} />);


    return (
        <div className={styles.dialogs}>
            <div className={styles.dialogList}>
                {userDataElements}
            </div >
            <div className={styles.messages}>
                <div>
                    {messageElements}
                </div>
                <AddMessageForm {...props} />
            </div>
        </div>
    )
};

const AddMessageForm = (props) => {
    return (
        <Formik
            initialValues={{
                textarea: '',
            }}
            onSubmit={async values => {
                props.onAddPost(values.textarea);
                values.textarea = '';
            }}
        >
            <Form className={styles.form_box}>
                <label className={styles.form_box__input}>
                    <Field className={styles.textarea} as='textarea' id='textarea' name='textarea' placeholder="Введите ваше сообщение" />
                </label>
                <button type="submit" disabled={false}>
                    Добавить сообщение
                </button>
            </Form>
        </Formik>
    )
}

export default Dialogs;