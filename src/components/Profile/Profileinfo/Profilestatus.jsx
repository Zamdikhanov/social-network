import React from 'react';
import { useState } from 'react';
import styles from './Profilestatus.module.css';


const Profilestatus = (props) => {

  let [editMode, setEditMode] = useState(false);
  let [status, setStatus] = useState(props.status)

  const toggleEditMode = () => {
    if (editMode) {
      setEditMode(false);
      props.updateUserStatus(status);
    } else {
      setEditMode(true);
    }
  }

  const onStatusChange = (e) => {
    setStatus(e.currentTarget.value);
  }

  return (
    <div className={styles.profile_status}>
      {!editMode
        ? (
          <div className={styles.profile_status__inner}>
            <div className={styles.profile_status__text}>
              Статус:
            </div>
            <span>{props.status || '*****'}</span>
            {props.userId && !props.match &&
              <button className={styles.profile_status__button} onClick={toggleEditMode} >
                изм.
              </button>}
          </div>
        )
        : (
          <div className={styles.profile_status__inner}>
            <div className={styles.profile_status__text}>
              Статус:
            </div>
            <input onChange={onStatusChange} value={status} onBlur={toggleEditMode} autoFocus={true} />
          </div>
        )
      }
    </div>
  )
};

export default Profilestatus;