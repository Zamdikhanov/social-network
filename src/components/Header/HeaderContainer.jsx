import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setUserAuthData } from './../../redux/auth-reducer';
import Header from './Header';

class HeaderContainer extends React.Component {
    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, { withCredentials: true, headers: {"API-KEY": "3ffc89b3-6eae-4f6c-8d58-93af5a15243e"}})
            .then(response => {
                if (response.data.resultCode === 0) {
                    let { id, login, email } = response.data.data;
                    this.props.setUserAuthData(id, email, login);
                }
            });
    }

    render() {
        return (
            <Header {...this.props} />
        )
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    login: state.auth.login,
});

export default connect(mapStateToProps, { setUserAuthData })(HeaderContainer);