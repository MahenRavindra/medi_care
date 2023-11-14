import React from "react";
import "./login.css";
import doctorImage from "../../assets/images/doctor.png";
import TextField from "@mui/material/TextField";
const Register = () => {
  return (
    <div className="login-outer">
      <div className="login-rest"></div>
      <form action="" className="login-form">
        <img src={doctorImage} alt="" />
        <TextField
          type="email"
          label="E-mail"
          variant="outlined"
          sx={{m: "0.3rem", width: 300}}
          autoFocus={true}
          inputProps={{style: {fontSize: 14}}}
          size="medium"
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          sx={{m: "0.3rem", width: 300}}
          inputProps={{style: {fontSize: 14}}}
          size="medium"
        />
        <TextField
          type="password"
          label="Re-type password"
          variant="outlined"
          sx={{m: "0.3rem", width: 300}}
          inputProps={{style: {fontSize: 14}}}
          size="medium"
        />
        <button>Register</button>
        <div>
          <p>
            Already hava an account <a href="/login">click here</a>
          </p>
        </div>
      </form>
      <div className="login-rest"></div>
    </div>
  );
};

export default Register;
