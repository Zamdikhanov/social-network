import React from 'react';
import styles from './Profileinfo.module.css';
import Preloader from './../../Common/Preloader/Preloader';
import userPhoto from '../../../assets/images/unload-avatar.webp';
import Profilestatus from './Profilestatus';


const Profileinfo = (props) => {
  if (!props.profile) {
    return (
      <div className={styles.profile_info_container}>
        <img className={styles.profile_info__image} src={userPhoto} ></img>
        <div className={styles.profile_info__content} >
          <div className={styles.profile_info__title}>
            Пользователь не загружен
          </div>
          <div className={styles.profile_info__about}>
            <span>Обо мне:</span> если вы видите это сообщение, значит сервер не отвечает, либо кончилась подписка на API запросы для GITHUB. Если загрузите на свой локальный сервер, то будет работать<br />
            <span>Описание:</span>данные не загружены
          </div>
          <div>
            <Preloader isFetching={props.isFetching}/>
          </div>
          <div className={styles.profile_info__contact}>
            <ul> Контакты
              <li>
                <span>Соц. сеть:</span> данные не загружены
              </li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
  return (
    <div className={styles.profile_info_container}>
      <img className={styles.profile_info__image} src={props.profile.photos.large ? props.profile.photos.large : userPhoto} ></img>
      <div className={styles.profile_info__content} >
        <div className={styles.profile_info__title}>
          {props.profile.fullName}
        </div>
        <Profilestatus status={props.status} updateUserStatus={props.updateUserStatus}/>
        <div className={styles.profile_info__about}>
          <span>Обо мне:</span> {props.profile.aboutMe} <br />
          <span>В поисках работы:</span> {props.profile.lookingForAJob ? ' Да' : ' Нет'} <br />
          <span>Описание работы:</span>{props.profile.lookingForAJobDescription}
        </div>
        <div className={styles.profile_info__contact}>
          <ul> Контакты
            <li>
              <span>Facebook:</span> <a href={props.profile.contacts.facebook} target="_blank">{props.profile.contacts.facebook}</a>
            </li>
            <li>
              <span>Website:</span> <a href={props.profile.contacts.website} target="_blank">{props.profile.contacts.website}</a>
            </li>
            <li>
              <span>VK:</span> <a href={props.profile.contacts.vk} target="_blank">{props.profile.contacts.vk}</a>
            </li>
            <li>
              <span>Twitter:</span> <a href={props.profile.contacts.twitter} target="_blank">{props.profile.contacts.twitter}</a>
            </li>
            <li>
              <span>Instagram:</span> <a href={props.profile.contacts.instagram} target="_blank">{props.profile.contacts.instagram}</a>
            </li>
            <li>
              <span>Youtube:</span> <a href={props.profile.contacts.youtube} target="_blank">{props.profile.contacts.youtube}</a>
            </li>
            <li>
              <span>Github:</span> <a href={props.profile.contacts.github} target="_blank">{props.profile.contacts.github}</a>
            </li>
            <li>
              <span>MainLink:</span> <a href={props.profile.contacts.mainLink} target="_blank">{props.profile.contacts.mainLink}</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Profileinfo;