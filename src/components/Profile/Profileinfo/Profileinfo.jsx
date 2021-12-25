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
    <div>
      <img className={styles.profile__image} src="https://images.pexels.com/photos/8347501/pexels-photo-8347501.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260"></img>
      <div>
        {props.info}
      </div>
      <div>
        {props.profile.fullName}
      </div>
      <div>
        {props.profile.aboutMe}
      </div>
      <img className={styles.profile__image} src={props.profile.photos.large} ></img>
    </div>
  )
};

export default Profileinfo;