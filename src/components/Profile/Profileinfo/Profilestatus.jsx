import React from 'react';
import styles from './Profilestatus.module.css';


class Profilestatus extends React.Component {
  statusInputRef = React.createRef;

  state = {
    editMode: false,
    status: this.props.status,
  }

  toggleEditMode = () => {
    if (this.state.editMode) {
      this.setState({ editMode: false });
      this.props.updateUserStatus(this.state.status);
    } else {
      this.setState({ editMode: true })
    }
  }

  onStatusChange = (e) => {
    this.setState({ status: e.currentTarget.value});
  }

  render() {
    return (
      <div className={styles.profile_status}>
        {!this.state.editMode
          ? (
            <div className={styles.profile_status__inner}>
              <div className={styles.profile_status__text}>
                Статус:
              </div>
              <span>{this.props.status || '*****'}</span>
              <button className={styles.profile_status__button} onClick={this.toggleEditMode} >изм.</button>
            </div>
          )
          : (
            <div className={styles.profile_status__inner}>
              <div className={styles.profile_status__text}>
                Статус:
              </div>
              <input onChange={this.onStatusChange} value={this.state.status} onBlur={this.toggleEditMode} autoFocus={true} />
            </div>
          )
        }
      </div>
    )
  }
};

export default Profilestatus;