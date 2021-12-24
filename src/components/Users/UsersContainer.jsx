import React from "react";
import { connect } from "react-redux";
import { setUsersAC, toggleFollowAC } from "../../redux/users-reducer";
import Users from "./Users";


let mapStateToProps = (state)  => ({
    users: state.usersPage.users,
});

let mapDispatchToProps = (dispatch) => ({
    onClickFollow: (userId) => dispatch(toggleFollowAC(userId)),
    setUsers:(users) => dispatch(setUsersAC(users)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Users);
