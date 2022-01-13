import axios from "axios";

const API = axios.create({ baseURL: "http://localhost:4040" });
/*
API.interceptors.request.use((req) => {
  if (localStorage.getItem("user")) {
    req.headers.Authorization = `Bearer ${
      JSON.parse(localStorage.getItem("user")).token
    }`;
  }
  return req;
}); */

export const getPosts = async () => await API.get("/post");

export const getPostById = async (id) => await API.get(`/post/${id}`);

export const createPost = async (postData) => await API.post(`/post`, postData);

export const updatePost = async (id, postData) =>
  await API.put(`/post/${id}`, postData);

export const deletePost = async (id) => await API.delete(`/post/${id}`);

export const likePost = async (id) => await API.patch(`/post/${id}/likePost`);
