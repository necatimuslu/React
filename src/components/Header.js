import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useHistory, useLocation } from "react-router";
import { useDispatch } from "react-redux";
import logo from "../images/angular.jpeg";
import { LOGOUT } from "../constants/userConstants";
const Header = () => {
  const [user, setUser] = useState(JSON.parse(localStorage.getItem("user")));
  const history = useHistory();
  const dispatch = useDispatch();
  const location = useLocation();
  const logout = () => {
    dispatch({ type: LOGOUT });
    history.push("/login");
    setUser(null);
  };
  useEffect(() => {
    const token = user?.token;

    setUser(JSON.parse(localStorage.getItem("user")));
  }, [location]);
  return (
    <header>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand">
            <img style={{ height: "80px" }} src={logo} />
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link
                  style={{ fontSize: "25px" }}
                  className="nav-link active "
                  aria-current="page"
                  to="/"
                >
                  Anasayfa
                </Link>
              </li>
            </ul>
            <ul className="nnavbar-nav ms-auto mr-5">
              {user ? (
                <>
                  <div>
                    <span style={{ fontSize: 18 }}>
                      {" "}
                      Hoşgeldin Sayın : &nbsp;
                    </span>
                    <span
                      style={{
                        fontSize: 20,
                        fontWeight: "bold",
                        marginLeft: "3px",
                        marginRight: "6px",
                      }}
                      className="text-primary"
                    >
                      {user.user.username}{" "}
                    </span>
                    <button
                      onClick={logout}
                      className="btn btn-outline-danger "
                    >
                      Çıkış
                    </button>
                  </div>
                </>
              ) : (
                <li style={{ listStyle: "none" }} className="nav-item">
                  <Link
                    style={{
                      fontSize: "25px",
                      textDecoration: "none",
                      color: "black",
                    }}
                    className="nav-link "
                    to="/login"
                  >
                    Giriş
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
