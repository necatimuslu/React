import { LOGIN, REGISTER, USER_ERROR } from "../constants/userConstants";

import * as api from "../services/userService";

export const userRegister = (userForm, toast, history) => async (dispatch) => {
  try {
    const { data } = await api.registerUser(userForm);

    dispatch({
      type: REGISTER,
      payload: data,
    });
    toast.success("Üye kaydı başarılı şekilde gerçekleşti");
    history.push("/");
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
export const userLogin = (userForm, toast, history) => async (dispatch) => {
  try {
    const { data } = await api.loginUser(userForm);
    dispatch({
      type: LOGIN,
      payload: data,
    });
    toast.success("Giriş işlemi başarıyla gerçekleşti");
    history.push("/");
  } catch (error) {
    dispatch({
      type: USER_ERROR,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.response,
    });
  }
};
