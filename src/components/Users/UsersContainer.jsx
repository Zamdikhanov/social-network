import React from 'react';
import { connect } from 'react-redux';
import * as axios from 'axios';
import { setCurrentPages, setTotalCount, setUsers, toggleFollow, toggleIsFetching } from '../../redux/users-reducer';
import Users from './Users';
import Preloader from '../Common/Preloader/Preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`, {withCredentials: true, headers: {"API-KEY": "3ffc89b3-6eae-4f6c-8d58-93af5a15243e"}})
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
                this.props.setTotalCount(response.data.totalCount);
            });
    }

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPages(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber + 1}&count=${this.props.pageSize}`, {withCredentials: true, headers: {"API-KEY": "3ffc89b3-6eae-4f6c-8d58-93af5a15243e"}})
            .then(response => {
                this.props.toggleIsFetching(false);
                this.props.setUsers(response.data.items);
            });
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
                    onClickFollow={this.props.onClickFollow}
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
});


export default connect(mapStateToProps, {
    onClickFollow: toggleFollow,
    setUsers,
    setTotalCount,
    setCurrentPages,
    toggleIsFetching,
})(UsersContainer);
