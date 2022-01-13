import {
  GET_ALL_POSTS,
  ERROR,
  CREATE_POST,
  DELETE_POST,
  UPDATE_POST,
  LIKE_POST,
} from "../constants/postConstants";

export default (state = [], action) => {
  switch (action.type) {
    case GET_ALL_POSTS:
      return action.payload;
    case CREATE_POST:
      return [...state, action.payload];
    case UPDATE_POST:
      return state.map((x) =>
        x._id === action.payload._id ? action.payload : x
      );
    case LIKE_POST:
      return state.map((x) =>
        x._id === action.payload._id ? action.payload : x
      );
    case DELETE_POST:
      return state.filter((x) => x._id !== action.payload);
    case ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};
