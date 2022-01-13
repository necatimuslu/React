import {
  LOGIN,
  LOGOUT,
  REGISTER,
  USER_ERROR,
} from "../constants/userConstants";

export default (state = { userData: null }, action) => {
  switch (action.type) {
    case LOGIN:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, userData: action.payload };
    case REGISTER:
      localStorage.setItem("user", JSON.stringify(action.payload));
      return { ...state, userData: action.payload };
    case LOGOUT:
      localStorage.clear();
      return { ...state, userData: null };
    case USER_ERROR:
      return { error: action.payload };
    default:
      return state;
  }
};
