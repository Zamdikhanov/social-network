import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPages, setTotalCount, setUsers, toggleStateFollow, toggleIsFetching, toggleFollowingInProgress, getUsers, toggleFollow } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
    }

    onClickFollow = (user) => {
        this.props.toggleFollow(user);
    }

    render() {
        return (
            <>
                <Preloader isFetching={this.props.isFetching} />
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    users={this.props.users}
                    followingInProgress={this.props.followingInProgress}
                    onPageChanged={this.onPageChanged}
                    onClickFollow={this.onClickFollow}
                />
            </>)
    }
}

let mapStateToProps = (state) => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
    isFetching: state.usersPage.isFetching,
    followingInProgress: state.usersPage.followingInProgress,
});


export default connect(mapStateToProps, {
    toggleStateFollow: toggleStateFollow,
    setUsers,
    setTotalCount,
    setCurrentPages,
    toggleIsFetching,
    toggleFollowingInProgress,
    getUsers,
    toggleFollow,
})(UsersContainer);
