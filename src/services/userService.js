import axios from "axios";

import { baseUrl } from "./baseUrl";

export const registerUser = async (userForm) =>
  await axios.post(`${baseUrl}/user/register`, userForm);
export const loginUser = async (userForm) =>
  await axios.post(`${baseUrl}/user/login`, userForm);
