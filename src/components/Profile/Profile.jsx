import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import "./Profile.css";
import Profileinfo from "./Profileinfo/Profileinfo";


const Profile = (props) => {
  return (
    <main className="profile">
      <Profileinfo info="ava +description ava +description" />
      <MyPosts posts={props.state.postsData}/>
    </main>
  )
};

export default Profile;