import React from "react";
import { useSelector } from "react-redux";
import Post from "./post/Post";
const Posts = () => {
  const posts = useSelector((state) => state.posts);
  return (
    <div>
      {!posts.length ? (
        <div className="spinner-border" role="status">
          <span className="visually-hidden">Loading...</span>
        </div>
      ) : (
        <div className="row">
          {posts.map((post) => {
            return (
              <div key={post._id} className="col-md-4 col-sm-12">
                <Post post={post} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Posts;
