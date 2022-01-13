import {
  GET_ALL_POSTS,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  ERROR,
  LIKE_POST,
} from "../constants/postConstants";

import * as api from "../services/postService";

export const getAllPosts = () => async (dispatch) => {
  try {
    const { data } = await api.getPosts();
    dispatch({
      type: GET_ALL_POSTS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const createPost = (postForm, toast) => async (dispatch) => {
  try {
    const { data } = await api.createPost(postForm);

    dispatch({
      type: CREATE_POST,
      payload: data,
    });
    toast.success("Gönderi başarıyla oluşturuldu");
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
export const updatePost =
  (id, postForm, toast, history) => async (dispatch) => {
    try {
      const { data } = await api.updatePost(id, postForm);

      dispatch({
        type: UPDATE_POST,
        payload: data,
      });
      toast.success("Gönderi güncellendi");
      history.push("/");
    } catch (error) {
      dispatch({
        type: ERROR,
        payload:
          error.response && error.response.data.message
            ? error.response.data.message
            : error.response,
      });
    }
  };
export const deletePost = (id, toast) => async (dispatch) => {
  try {
    const { data } = await api.deletePost(id);

    dispatch({
      type: DELETE_POST,
      payload: id,
    });
    toast.error("Seçilen Gönderil silindi");
  } catch (error) {
    dispatch({
      type: ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};

export const likePost = (id) => async (dispatch) => {
  try {
    const { data } = await api.likePost(id);
    dispatch({
      type: LIKE_POST,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
