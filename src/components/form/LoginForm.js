import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router";
import { userLogin } from "../../actions/userActions";
import { toast } from "react-toastify";
import Message from "../Message";
const LoginForm = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const [userForm, setUserForm] = useState({
    email: "",
    password: "",
  });
  const user = useSelector((state) => state.user);

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userLogin(userForm, toast, history));
  };
  return (
    <>
      <h4 className="text-center">Login</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-1">
          <label id="email">Email</label>
          <input
            type="email"
            placeholder="Lütfen email adresinizi giriniz"
            id="email"
            name="email"
            className="form-control"
            onChange={(e) =>
              setUserForm({ ...userForm, email: e.target.value })
            }
          />
        </div>
        <div className="form-group mb-1">
          <label id="password">Şifre</label>
          <input
            type="password"
            placeholder="Lütfen şifrenizi  giriniz"
            id="password"
            name="password"
            className="form-control"
            onChange={(e) =>
              setUserForm({ ...userForm, password: e.target.value })
            }
          />
        </div>
        <div className="form-group mt-3">
          <button type="submit" className="btn btn-primary ">
            Giriş
          </button>
        </div>
        <div className="form-group">
          <p className="text-center">
            Hesabınız yok mu ?{" "}
            <Link to="/register">Lütfen kayıt için tıklayınız</Link>
          </p>
        </div>
      </form>
      {user.error && <Message>{user.error}</Message>}
    </>
  );
};

export default LoginForm;
