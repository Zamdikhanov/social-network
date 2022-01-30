import { Formik, Field, Form } from 'formik';
import React from 'react';
import styles from './Login.module.css';
import * as Yup from 'yup';
import { login } from '../../redux/auth-reducer';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';

const Login = (props) => {
    return (
        <>
            <h2 className={styles.title_message} >Необходимо войти в сеть</h2>
            <LoginForm {...props} />
        </>
    )
}

const LoginForm = ({ isAuth, captchaURL, login }) => {
    if (isAuth) {
        return <Navigate to="/profile/" />
    }

    return (
        <Formik
            initialValues={{
                email: '',
                password: '',
                rememberMe: false,
                captcha: '',
            }}
            validationSchema={
                Yup.object({
                    email: Yup.string().max(40, 'Слишком длинная почта').min(1).required('Пустое поле Email'),
                    password: Yup.string().max(20, 'Слишком длинный пароль').min(1).required('Пустое поле Password'),
                    rememberMe: Yup.boolean(),
                    captcha: Yup.string().max(20, 'Слишком длинная капча'),
                })
            }
            onSubmit={(values, { setSubmitting, setStatus }) => {
                login(values.email, values.password, values.rememberMe, values.captcha, setStatus);
                setSubmitting(false);
            }}
        >
            {props => (
                <Form className={styles.form_box}>
                    <div className={styles.form_box__inner} >
                        <h2 className={styles.form_box__title} >Авторизация</h2>
                        <label className={styles.form_box__input}>
                            Email
                            <Field type='email' id='email' name='email'
                                className={styles.form_box__inputField + ' ' + (props.touched.email && props.errors.email ? styles.form_box__inputField_alert : null)} />
                        </label>
                        <div className={styles.form_box__clue} >
                            Тестовый Email: <br /><span>free@samuraijs.com</span>
                        </div>
                        <label className={styles.form_box__input}>
                            Пароль
                            <Field type='password' id='password' name='password'
                                className={styles.form_box__inputField + ' ' + (props.touched.password && props.errors.password ? styles.form_box__inputField_alert : null)} />
                        </label>
                        <div className={styles.form_box__clue} >
                            Тестовый Password: <br /><span>free</span>
                        </div>
                        <label className={styles.form_box__checkbox}>
                            Запомнить меня
                            <Field type='checkbox' id='rememberMe' name='rememberMe' />
                        </label>
                        {captchaURL && <img className={styles.captcha_img} src={captchaURL} alt='captcha' />}
                        {captchaURL && <Field type='text' id='captcha' name='captcha'
                            className={styles.form_box__inputField
                                + ' '
                                + (props.touched.password && props.errors.password
                                    ? styles.form_box__inputField_alert
                                    : null)} />}
                        <button type="submit" disabled={false}>
                            Войти
                        </button>
                    </div>
                    <div className={styles.messageAlert
                        + ' '
                        + ((props.touched.email && props.errors.email)
                            || (props.touched.password && props.errors.password)
                            || (props.status) ? styles.messageAlert_active : null)} >
                        {props.touched.email && props.errors.email && <div>{props.errors.email}</div>}
                        {props.touched.password && props.errors.password && <div>{props.errors.password}</div>}
                        <div>{props.status}</div>
                    </div>

                </Form>
            )}
        </Formik>
    )
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    captchaURL: state.auth.captchaURL,
})

export default connect(mapStateToProps, { login })(Login);
