import React, { useEffect } from "react";
import moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { deletePost, getAllPosts, likePost } from "../../../actions/postAction";
import { Link } from "react-router-dom";
import { AiFillDelete, AiFillLike } from "react-icons/ai";
import { BiEdit } from "react-icons/bi";
import { toast } from "react-toastify";
import Message from "../../Message";
const Post = (post) => {
  const dispatch = useDispatch();
  const { error } = useSelector((state) => ({ ...state }));
  useEffect(() => {
    fetchAllPosts();
  }, [dispatch]);

  const fetchAllPosts = () => {
    dispatch(getAllPosts());
  };

  return (
    <>
      <div className="card mb-3">
        <div className="card-header">
          <h4 className="card-title text-center mt-1">{post.post.title}</h4>
          <div className="card-img">
            <img src={post.post.image} className="img-fluid" />
          </div>
        </div>
        <div className="card-body">
          <span className="text-warning">
            {moment(post.post.createdAt).toNow()}
          </span>
          <div style={{ fontWeight: "bold" }} className="card-title">
            {post.post.creator}
          </div>
          <p className="card-text">
            {post.post.message
              ? post.post.message.substring(0, 116) + "..."
              : post.post.message}{" "}
            <Link className="text-primary" to={`/post/${post.post._id}`}>
              Devamı...
            </Link>
          </p>
          <span>{"#" + post.post.tags}</span>
        </div>
        <div className="card-footer">
          <div className="d-flex justify-content-around">
            <button
              className="btn"
              onClick={async () => {
                await dispatch(deletePost(post.post._id, toast));
                await fetchAllPosts();
              }}
            >
              <AiFillDelete size={30} color="red" />
            </button>
            <button className="btn">
              <Link to={`/update/${post.post._id}`}>
                {" "}
                <BiEdit size={30} color="green" />{" "}
              </Link>
            </button>
            <button
              className="btn"
              onClick={() => dispatch(likePost(post.post._id))}
            >
              <AiFillLike size={30} color="grey" /> &nbsp; {post.post.likeCount}{" "}
              &nbsp;
            </button>
          </div>
        </div>
      </div>
      {error && <Message>{error} </Message>}
    </>
  );
};

export default Post;
