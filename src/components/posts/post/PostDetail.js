import moment from "moment";
import React, { useEffect, useState } from "react";
import { getPostById } from "../../../services/postService";
const PostDetail = ({ match }) => {
  const [post, setPost] = useState({
    title: "",
    creator: "",
    message: "",
    tags: "",
    image: "",
    likeCount: 0,
  });

  useEffect(() => {
    fetchPost();
  }, [match]);

  const fetchPost = () => {
    getPostById(match.params.id).then((res) => {
      setPost({
        title: res.data.title,
        creator: res.data.creator,
        message: res.data.message,
        tags: res.data.tags,
        image: res.data.image,
        likeCount: res.data.likeCount,
      });
    });
  };
  return (
    <div className="container">
      <div className="row p-3">
        <div className="col-md-10 col-sm-12">
          <div className="card">
            <h3 className="card-title text-center mt-1">{post.title}</h3>
            <div className="row">
              <div className="col-md-6">
                <div className="card-header">
                  <div className="card-img d-flex justify-content-center">
                    <img
                      src={post.image}
                      className="img-fluid "
                      style={{ height: "535px" }}
                    />
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className="card-body">
                  <h4 className="text-center"> Yazar: {post.creator}</h4>
                  <p style={{ fontSize: 20 }} className="text-danger">
                    {" "}
                    {moment(post.createdAt).toNow()}
                  </p>
                  <p style={{ fontSize: 20 }}>{post.tags}</p>
                  <p className="card-text">{post.message}</p>
                </div>
                <div className="card-footer mt-4">
                  <p>{post.likeCount}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostDetail;
