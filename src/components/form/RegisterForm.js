import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Message from "../Message";
import { userRegister } from "../../actions/userActions";
import { useHistory } from "react-router";
import { toast } from "react-toastify";
const RegisterForm = () => {
  const [userForm, setUserForm] = useState({
    username: "",
    email: "",
    password: "",
  });
  const dispatch = useDispatch();
  const { error } = useSelector((state) => ({ ...state }));
  const history = useHistory();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(userRegister(userForm, toast, history));
  };

  return (
    <>
      <h4 className="text-center">Register</h4>
      <form onSubmit={handleSubmit}>
        <div className="form-group mb-1">
          <label id="username">Kullanıcı Adı</label>
          <input
            type="username"
            placeholder="Lütfen email adresinizi giriniz"
            id="username"
            name="username"
            className="form-control"
            onChange={(e) =>
              setUserForm({ ...userForm, username: e.target.value })
            }
          />
        </div>
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
            Kayıt ol
          </button>
        </div>
        <div className="form-group">
          <p className="text-center">
            Hesabınız var mı ? <Link to="/login">Lütfen giriş yapınız</Link>
          </p>
        </div>
      </form>
      {error && <Message>{error}</Message>}
    </>
  );
};

export default RegisterForm;
