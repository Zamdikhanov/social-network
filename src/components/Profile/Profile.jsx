import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import "./Profile.css";
import Profileinfo from "./Profileinfo/Profileinfo";

const Profile = () => {
  return (
    <main className="profile">
      <Profileinfo info="ava +description ava +description" />
      <MyPosts />
    </main>
  )
};

export default Profile;