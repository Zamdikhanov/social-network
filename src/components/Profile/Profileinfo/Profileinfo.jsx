import React from 'react';
import styles from './Profileinfo.module.css';
import Preloader from './../../Common/Preloader/Preloader';
import userPhoto from '../../../assets/images/unload-avatar.webp';
import Profilestatus from './Profilestatus';
import ProfileDataForm from './ProfileDataForm';
import { useState } from 'react';


const Profileinfo = (props) => {

  let [isEditMode, setEditMode] = useState(false);


  const onSaveAvatar = (e) => {
    if (e.target.files.length) {
      props.savePhoto(e.target.files[0]);
    }
  }

  if (!props.profile) {
    return (
      <div className={styles.profile_info_container}>
        <img className={styles.profile_info__image} src={userPhoto} alt='avatar'></img>
        <div className={styles.profile_info__content} >
          <div className={styles.profile_info__title}>
            Пользователь не загружен
          </div>
          <div className={styles.profile_info__about}>
            <span>Обо мне:</span> если вы видите это сообщение, значит сервер не отвечает, либо кончилась подписка на API запросы для GITHUB. Если загрузите на свой локальный сервер, то будет работать<br />
            <span>Описание:</span>данные не загружены
          </div>
          <div>
            <Preloader isFetching={props.isFetching} />
          </div>
          <div className={styles.profile_info__contact}>
            <ul> Контакты
              <li>
                <span>Соц. сеть:</span> данные не загружены
              </li>
            </ul>
          </div>
        </div>
        {/* <profileData {... props}/> */}
      </div>
    )
  }
  return (
    <div className={styles.profile_info_container}>
      <div className={styles.profile_info__image_box}>
        <img className={styles.profile_info__image} src={(props.profile && props.profile.photos.large) ? props.profile.photos.large : userPhoto} alt='avatar'></img>
        {props.userId && !props.match && <input className={styles.profile_info__image_button} type={'file'} onChange={onSaveAvatar} />}
      </div>
      {isEditMode
        ? <ProfileDataForm {...props} goEditMode={() => setEditMode(false)} />
        : <ProfileData {...props} goEditMode={() => setEditMode(true)} />
      }
    </div>
  )
};

function ProfileData(props) {
  return (
    <div className={styles.profile_info__content} >
      <div className={styles.profile_info__title}>
        {props.profile.fullName}
      </div>
      <Profilestatus {...props} />
      <div className={styles.profile_info__about}>
        <span>Обо мне:</span> {props.profile.aboutMe} <br />
        <span>В поисках работы:</span> {props.profile.lookingForAJob ? ' Да' : ' Нет'} <br />
        <span>Описание работы:</span>{props.profile.lookingForAJobDescription}
      </div>
      <div className={styles.profile_info__contact}>
        <ul> Контакты
          <li>
            <span>Facebook:</span> <a href={props.profile.contacts.facebook} target="_blank" rel="noopener noreferrer">{props.profile.contacts.facebook}</a>
          </li>
          <li>
            <span>Website:</span> <a href={props.profile.contacts.website} target="_blank" rel="noopener noreferrer">{props.profile.contacts.website}</a>
          </li>
          <li>
            <span>VK:</span> <a href={props.profile.contacts.vk} target="_blank" rel="noopener noreferrer">{props.profile.contacts.vk}</a>
          </li>
          <li>
            <span>Twitter:</span> <a href={props.profile.contacts.twitter} target="_blank" rel="noopener noreferrer">{props.profile.contacts.twitter}</a>
          </li>
          <li>
            <span>Instagram:</span> <a href={props.profile.contacts.instagram} target="_blank" rel="noopener noreferrer">{props.profile.contacts.instagram}</a>
          </li>
          <li>
            <span>Youtube:</span> <a href={props.profile.contacts.youtube} target="_blank" rel="noopener noreferrer">{props.profile.contacts.youtube}</a>
          </li>
          <li>
            <span>Github:</span> <a href={props.profile.contacts.github} target="_blank" rel="noopener noreferrer">{props.profile.contacts.github}</a>
          </li>
          <li>
            <span>MainLink:</span> <a href={props.profile.contacts.mainLink} target="_blank" rel="noopener noreferrer">{props.profile.contacts.mainLink}</a>
          </li>
        </ul>
        {props.userId && !props.match && <button className={styles.profile_edit__button} onClick={props.goEditMode}>Редактировать</button>}
      </div>
    </div>
  )
}


export default Profileinfo;