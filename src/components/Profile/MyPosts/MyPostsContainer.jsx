
import { connect } from "react-redux";
import { addPost } from "../../../redux/profile-reducer";
import MyPosts from "./MyPosts";


let mapStateToProps = (state) => {
  return {
    postsData: state.profilePage.postsData,
    newPostText: state.profilePage.newPostText
  }
}

// let mapDispatchToProps = (dispatch) => {
//   return {
//     addPost: (text) => dispatch(addPostActionCreator(text))
//   }
// }

const MyPostsContainer = connect(mapStateToProps, {addPost})(MyPosts)

export default MyPostsContainer;