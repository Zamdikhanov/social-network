import React from 'react';
import styles from './Profilestatus.module.css';


class Profilestatus extends React.Component {
  state = {
    editMode: false,
  }

  toggleEditMode = () => {
    // this.state.editMode = !this.state.editMode;
    // this.forceUpdate();
    if (this.state.editMode) {
      this.setState({ editMode: false })
    } else {
      this.setState({ editMode: true })
    }
  }

  render() {
    return (
      <div className={styles.profile_status}>
        {!this.state.editMode
          ? (
            <div className={styles.profile_status__text}>
              Статус: <span>{this.props.status}</span>
              <button className={styles.profile_status__button} onClick={this.toggleEditMode} >изм.</button>
            </div>
          )
          : (
            <div className={styles.profile_status__input}>
              Статус: <input value={this.props.status} onBlur={this.toggleEditMode} autoFocus={true}/>
            </div>
          )
        }
      </div>
    )
  }
};

export default Profilestatus;