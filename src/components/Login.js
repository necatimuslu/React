import React from "react";
import LoginForm from "./form/LoginForm";

const Login = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3 col-sm-12">
          <LoginForm />
        </div>
      </div>
    </div>
  );
};

export default Login;
