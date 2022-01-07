import { Formik, Field, Form } from 'formik';
import React from 'react';
import styles from './Login.module.css'

const Login = (props) => {
    return (
        <>
            <h2 className={styles.title_message} >Необходимо войти в сеть</h2>
            <LoginForm />
        </>
    )
}

const LoginForm = () => {
    return (
        <Formik
            initialValues={{
                login: '',
                password: '',
                rememberMe: false,
            }}
            onSubmit={async values => {
                console.log('formik ok');
            }}
        >
            <Form className={styles.form_box}>
            <h2 className={styles.form_box__title} >Авторизация</h2>
                <label className={styles.form_box__input}>
                    Логин
                    <Field type='text' id='login' name='login' />
                </label>
                <label className={styles.form_box__input}>
                    Пароль
                    <Field type='text' id='password' name='password' />
                </label>
                <label className={styles.form_box__checkbox}>
                    Запомнить меня
                    <Field type='checkbox' id='rememberMe' name='rememberMe' />
                </label>
                <button type="submit" disabled={false}>
                    Войти
                </button>
            </Form>
        </Formik>
    )
}

export default Login;
