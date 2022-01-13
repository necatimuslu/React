import React from "react";

import RegisterForm from "./form/RegisterForm";
const Register = () => {
  return (
    <div className="container">
      <div className="row mt-5">
        <div className="col-md-6 offset-md-3 col-sm-12">
          <RegisterForm />
        </div>
      </div>
    </div>
  );
};

export default Register;
