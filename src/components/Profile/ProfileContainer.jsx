
import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import Profile from './Profile';
import { getUserProfile, getUserStatus, updateUserStatus } from './../../redux/profile-reducer';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = 21488;
    if (this.props.match) {
      userId = this.props.match.params.userId;
    } else if (this.props.userId != null) {
      userId = this.props.userId;
    }
    this.props.getUserProfile(userId);
    this.props.getUserStatus(userId);
  }

  render() {
    return (
      <Profile {...this.props} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  userId: state.auth.userId,
})

const ProfileURLMatch = (props) => {
  const match = useMatch('/profile/:userId/');
  return <ProfileContainer {...props} match={match} />;
}

export default connect(mapStateToProps, {
  getUserProfile, getUserStatus, updateUserStatus
})(ProfileURLMatch);