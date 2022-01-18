import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPages, setTotalCount, setUsers, toggleStateFollow, toggleIsFetching, requestUsers, toggleFollowingInProgress, toggleFollow } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { getUsers, getPageSize, getTotalUsersCount, getCurrentPage, getIsFetching, getFollowingInProgress } from '../../redux/users-selectors';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.requestUsers(this.props.currentPage, this.props.pageSize);
    }

    onPageChanged = (pageNumber) => {
        this.props.requestUsers(pageNumber, this.props.pageSize);
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
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: getTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: getFollowingInProgress(state),
});


export default connect(mapStateToProps, {
    toggleStateFollow: toggleStateFollow,
    setUsers,
    setTotalCount,
    setCurrentPages,
    toggleIsFetching,
    toggleFollowingInProgress,
    requestUsers,
    toggleFollow,
})(UsersContainer);
