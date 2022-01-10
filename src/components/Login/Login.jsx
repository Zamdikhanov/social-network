import { Formik, Field, Form } from 'formik';
import React from 'react';
import styles from './Login.module.css';
import * as Yup from 'yup';

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
            validationSchema={
                Yup.object({
                    login: Yup.string().max(15, 'Слишком длинный логин').min(1).required('Пустое поле Логин'),
                    password: Yup.string().max(20, 'Слишком длинный пароль').min(1).required('Пустое поле Пароль'),
                    rememberMe: Yup.boolean(),
                })
            }
            onSubmit={async values => {
                alert('login');
            }}
        >
            {props => (
                <Form className={styles.form_box}>
                    <div className={styles.form_box__inner} >
                        <h2 className={styles.form_box__title} >Авторизация</h2>
                        <label className={styles.form_box__input}>
                            Логин
                            <Field type='text' id='login' name='login' className={styles.form_box__inputField + ' ' + (props.touched.login && props.errors.login ? styles.form_box__inputField_alert : null)} />
                        </label>
                        <label className={styles.form_box__input}>
                            Пароль
                            <Field type='text' id='password' name='password' className={styles.form_box__inputField + ' ' + (props.touched.password && props.errors.password ? styles.form_box__inputField_alert : null)} />
                        </label>
                        <label className={styles.form_box__checkbox}>
                            Запомнить меня
                            <Field type='checkbox' id='rememberMe' name='rememberMe' />
                        </label>
                        <button type="submit" disabled={false}>
                            Войти
                        </button>
                    </div>
                    <div className={styles.messageAlert + ' ' + ((props.touched.login && props.errors.login) || (props.touched.password && props.errors.password) ? styles.messageAlert_active : null)} >
                        {props.touched.login && props.errors.login && <div>{props.errors.login}</div>}
                        {props.touched.password && props.errors.password && <div>{props.errors.password}</div>}
                    </div>
                </Form>
            )}
        </Formik>
    )
}

export default Login;
