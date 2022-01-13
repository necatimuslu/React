import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Form from "./form/Form";
import Posts from "./posts/Posts";
import { getAllPosts } from "../actions/postAction";
import { useHistory, useLocation } from "react-router";
const Container = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const dispatch = useDispatch();
  const history = useHistory();
  const location = useLocation();
  useEffect(() => {
    if (!user) {
      history.push("/login");
    } else {
      fetchAllPosts();
    }
  }, [location]);

  const fetchAllPosts = () => {
    dispatch(getAllPosts());
  };

  return (
    <div className="container">
      <div className="row mt-3">
        <div className="col-md-8 col-sm-12">
          <Posts />
        </div>
        <div className="col-md-4 col-sm-12">
          <Form />
        </div>
      </div>
    </div>
  );
};

export default Container;
