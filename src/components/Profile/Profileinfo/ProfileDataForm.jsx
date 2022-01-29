import React from "react"
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';
import styles from './ProfileDataForm.module.css'

const ProfileDataForm = (props) => {
  let intial = {
    ...props.profile,
    // contacts: {
    //   website: props.profile.contacts.website || '',
    // }
  };
  return (
    <>
      <Formik
        initialValues={
          { ...intial }
        }
        validationSchema={
          Yup.object({
            fullName: Yup.string().max(20, 'Слишком длинный Логин').min(1).required('Пустое поле login'),
            lookingForAJob: Yup.boolean(),
            lookingForAJobDescription: Yup.string().max(30, 'Слишком длинное описание').min(1).required('Пустое поле описание'),
            aboutMe: Yup.string().max(40, 'Слишком иного о себе').min(1).required('Пустое поле о себе'),
            
          })
        }
        onSubmit={(values, {  }) => {
          props.saveProfile(values);
          props.goEditMode();
        }}
      >
        {props => (
          <Form className={styles.profile_info__content}>
            <div className={styles.profile_info__title}>
              <label className={styles.form_box__input}>
                Логин
                <Field type='text' id='fullName' name='fullName' className={styles.form_inputLarge} />
                {props.errors.fullName && props.touched.fullName ? (
                  <div>{props.errors.fullName}</div>
                ) : null}
              </label>
            </div>
            <div className={styles.profile_info__about}>
              <label className={styles.form_box__input}>
                Обо мне:
                <Field type='text' id='aboutMe' name='aboutMe' className={styles.form_input} />
              </label>
              <label >
                В поисках работы:
                <Field type='checkbox' id='lookingForAJob' name='lookingForAJob' className={styles.form_input} />
              </label>
              <label className={styles.form_box__input}>
                Описание работы:
                <Field type='text' id='lookingForAJobDescription' name='lookingForAJobDescription' className={styles.form_input} />
              </label>
            </div>
            <div className={styles.profile_info__contact}>
              <ul> Контакты
                <li className={styles.form_box__input}>
                  <span>Facebook:</span>
                  <Field type='text' id='contacts.facebook' name='contacts.facebook' className={styles.form_input} />
                  {/* {props.errors.contacts.facebook && props.touched.contacts.facebook ? (
                  <div>{props.errors.contacts.facebook}</div>
                ) : null} */}
                </li>
                <li className={styles.form_box__input}>
                  <span>Website:</span>
                  <Field type='text' id='contacts.website' name='contacts.website' className={styles.form_input} />
                  {/* {props.errors.contacts.website && props.touched.contacts.website ? (
                    <div>{props.errors.contacts.website}</div>
                  ) : null} */}
                </li>
                <li className={styles.form_box__input}>
                  <span>VK:</span>
                  <Field type='text' id='contacts.vk' name='contacts.vk' className={styles.form_input} />
                </li>
                <li className={styles.form_box__input}>
                  <span>Twitter:</span>
                  <Field type='text' id='contacts.twitter' name='contacts.twitter' className={styles.form_input} />
                </li>
                <li className={styles.form_box__input}>
                  <span>Instagram:</span>
                  <Field type='text' id='contacts.instagram' name='contacts.instagram' className={styles.form_input} />
                </li>
                <li className={styles.form_box__input}>
                  <span>Youtube:</span>
                  <Field type='text' id='contacts.youtube' name='contacts.youtube' className={styles.form_input} />
                </li>
                <li className={styles.form_box__input}>
                  <span>Github:</span>
                  <Field type='text' id='contacts.github' name='contacts.github' className={styles.form_input} />
                </li>
                <li className={styles.form_box__input}>
                  <span>MainLink:</span>
                  <Field type='text' id='contacts.mainLink' name='contacts.mainLink' className={styles.form_input} />
                </li>
              </ul>
            </div>
            <button className={styles.profile_edit__button} type="submit" disabled={false}>
              Сохранить
            </button>
            <div>{props.errorMessage}</div>
            {/* </div> */}
            {/* <div className={styles.messageAlert + ' ' + ((props.touched.email && props.errors.email) || (props.touched.password && props.errors.password) || (props.status) ? styles.messageAlert_active : null)} >
              {props.touched.email && props.errors.email && <div>{props.errors.email}</div>}
              {props.touched.password && props.errors.password && <div>{props.errors.password}</div>}
              <div>{props.status}</div>
            </div> */}

          </Form>
        )}
      </Formik>


    </>
  )
}

export default ProfileDataForm;