import React from "react";
import "./login.css";
import doctorImage from "../../assets/images/doctor.png";
import TextField from "@mui/material/TextField";
import {useRef} from "react";

const Login = () => {
  const email = useRef(null);
  const password = useRef(null);
  const submitClick = (e) => {
    e.preventDefault();
    // console.log(email.current.value, password.current.value);
    // email.current.value = "";
    // password.current.value = "";
  };
  return (
    <div className="login-outer">
      <div className="login-rest"></div>
      <form action="" className="login-form" onSubmit={submitClick}>
        <img src={doctorImage} alt="" />

        <TextField
          // type="email"
          label="E-mail"
          variant="outlined"
          sx={{m: "0.3rem", width: 300}}
          autoFocus={true}
          inputProps={{style: {fontSize: 14}}}
          size="medium"
          inputRef={email}
        />
        <TextField
          type="password"
          label="Password"
          variant="outlined"
          sx={{m: "0.3rem", width: 300}}
          inputProps={{style: {fontSize: 14}}}
          size="medium"
          inputRef={password}
        />

        <button type="submit">Login</button>
        <div>
          <p>
            If you haven't an account <a href="/register">click here</a>
          </p>
        </div>
      </form>
      <div className="login-rest"></div>
    </div>
  );
};

export default Login;
