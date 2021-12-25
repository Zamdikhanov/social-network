import React from "react";
import { connect } from "react-redux";
import { setCurrentPagesAC, setTotalCountAC, setUsersAC, toggleFollowAC } from "../../redux/users-reducer";
import Users from "./Users";


let mapStateToProps = (state)  => ({
    users: state.usersPage.users,
    pageSize: state.usersPage.pageSize,
    totalUsersCount: state.usersPage.totalUsersCount,
    currentPage: state.usersPage.currentPage,
});

let mapDispatchToProps = (dispatch) => ({
    onClickFollow: (userId) => dispatch(toggleFollowAC(userId)),
    setUsers:(users) => dispatch(setUsersAC(users)),
    setTotalCount:(count) => dispatch(setTotalCountAC(count)),
    setCurrentPages: (page) => dispatch(setCurrentPagesAC(page)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);
