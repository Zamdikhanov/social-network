
import React from 'react';
import { connect } from 'react-redux';
import { useMatch } from 'react-router-dom';
import Profile from './Profile';
import { getUserProfile } from './../../redux/profile-reducer';


class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match ? this.props.match.params.userId : 21488;
    this.props.getUserProfile(userId);
  }

  render() {
    return (
      <Profile {...this.props} profile={this.props.profile} />
    )
  }
}

let mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
})

const ProfileURLMatch = (props) => {
  const match = useMatch('social-network/profile/:userId/');
  return <ProfileContainer {...props} match={match} />;
}

export default connect(mapStateToProps, {
  getUserProfile
})(ProfileURLMatch);