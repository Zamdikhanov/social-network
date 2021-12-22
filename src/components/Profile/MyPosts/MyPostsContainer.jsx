import React from "react";
import { connect } from "react-redux";
import { addPostActionCreator, changeTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

let mapDispatchToProps = (dispatch) => {
  return {
    changeText: (text) => dispatch(changeTextActionCreator(text)),
    addPost: () => dispatch(addPostActionCreator())
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts)

export default MyPostsContainer;