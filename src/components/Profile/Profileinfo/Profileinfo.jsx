import React from 'react';
import styles from './Profileinfo.module.css';
import Preloader from './../../Common/Preloader/Preloader'

const Profileinfo = (props) => {
  if (!props.profile) {
    return (
      <div>
        <Preloader />
      </div>
    )
  }
  return (
    <div className={styles.profile_info_container}>
      <img className={styles.profile_info__image} src={props.profile.photos.large} ></img>
      <div className={styles.profile_info__content}>
        <div className={styles.profile_info__title}>
          {props.profile.fullName}
        </div>
        <div className={styles.profile_info__about}>
          <span>Обо мне:</span> {props.profile.aboutMe} <br/>
          <span>Описание:</span>{props.profile.lookingForAJobDescription}
        </div>
        <div className={styles.profile_info__contact}>
          <ul> Контакты
            <li>
            <span>Facebook:</span> {props.profile.contacts.facebook}
            </li>
            <li>
            <span>Website:</span> {props.profile.contacts.website}
            </li>
            <li>
            <span>VK:</span> {props.profile.contacts.vk}
            </li>
            <li>
            <span>Twitter:</span> {props.profile.contacts.twitter}
            </li>
            <li>
            <span>Instagram:</span> {props.profile.contacts.instagram}
            </li>
            <li>
            <span>Youtube:</span> {props.profile.contacts.youtube}
            </li>
            <li>
            <span>Github:</span> {props.profile.contacts.github}
            </li>
            <li>
            <span>MainLink:</span> {props.profile.contacts.mainLink}
            </li>
          </ul>
        </div>
      </div>
    </div>
  )
};

export default Profileinfo;