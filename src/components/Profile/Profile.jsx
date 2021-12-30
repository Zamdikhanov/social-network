import React from "react";
import MyPostsContainer from "./MyPosts/MyPostsContainer";
import "./Profile.css";
import Profileinfo from "./Profileinfo/Profileinfo";


const Profile = (props) => {
  return (
    <main className="profile">
      <Profileinfo profile={props.profile} />
      <MyPostsContainer />
    </main>
  )
};

export default Profile;