import React from "react";
import { addPostActionCreator, changeTextActionCreator } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


const MyPostsContainer = (props) => {

  let state = props.store.getState();

  let changeText = (text) => {
    props.store.dispatch(changeTextActionCreator(text));
  };

  let addPost = () => {
    props.store.dispatch(addPostActionCreator());
  };

  return (
    <MyPosts changeText={changeText} addPost={addPost} postsData={state.profilePage.postsData} newPostText={state.profilePage.newPostText} />
  )
}

export default MyPostsContainer;