import React from 'react';
import { connect } from 'react-redux';
import { setCurrentPages, setTotalCount, setUsers, toggleFollow, toggleIsFetching, toggleFollowingInProgress } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(this.props.currentPage, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setTotalCount(data.totalCount);
        });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPages(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize).then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        });
    }

    onClickFollow = (user) => {
        this.props.toggleFollowingInProgress(true);
        console.log(this.props.followingInProgress);
        if (user.followed) {
            usersAPI.deleteFollow(user.id).then(data => {
                if (data.resultCode == 0) {
                    this.props.toggleFollow(user.id);
                }
                this.props.toggleFollowingInProgress(false);
            })
        } else {
            usersAPI.postFollow(user.id).then(data => {
                if (data.resultCode == 0) {
                    this.props.toggleFollow(user.id);
                };
                this.props.toggleFollowingInProgress(false);
            })
        }
        console.log(this.props.followingInProgress);
    }

    render() {
        return (
            <>
                <Preloader isFetching={this.props.isFetching} />
                <Users
                    totalUsersCount={this.props.totalUsersCount}
                    pageSize={this.props.pageSize}
                    currentPage={this.props.currentPage}
                    onPageChanged={this.onPageChanged}
                    users={this.props.users}
                    onClickFollow={this.onClickFollow}
                    followingInProgress={this.props.followingInProgress}
                    toggleFollowingInProgress={this.props.toggleFollowingInProgress}
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
    toggleFollow: toggleFollow,
    setUsers,
    setTotalCount,
    setCurrentPages,
    toggleIsFetching,
    toggleFollowingInProgress,
})(UsersContainer);
