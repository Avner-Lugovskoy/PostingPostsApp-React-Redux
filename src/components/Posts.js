import React from "react";
import { connect } from "react-redux";
import Post from "./Post";

const Posts = ({ syncPosts }) => {
  if (!syncPosts.length) {
    return <p className="text-center">Постов пока нет</p>;
  }
  return syncPosts.map((posto) => <Post post={posto} key={posto.id} />);
};

const mapStateToPropss = (state) => {
  return {
    syncPosts: state.posts.posts,
  };
};

export default connect(mapStateToPropss, null)(Posts);
