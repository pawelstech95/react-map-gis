import React, { useCallback, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";

import { data, errors } from "./data";

import "./login.css";

export function Login() {
  const [errorMessages, setErrorMessages] = useState<{
    name: string;
    message: string;
  }>({ message: "", name: "" });
  const [isSubmitted, setIsSubmitted] = useState<boolean>(false);

  useEffect(() => {
    const loggedInUser = localStorage.getItem("user");
    if (loggedInUser) {
      setIsSubmitted(true);
    }
  }, []);

  const handleSubmit = useCallback((event: React.SyntheticEvent) => {
    event.preventDefault();

    const { uname, pass } = document.forms[0];

    const userData = data.find((user) => user.username === uname.value);

    if (userData) {
      if (userData.password !== pass.value) {
        setErrorMessages({ name: "pass", message: errors.pass });
      } else {
        setIsSubmitted(true);
        localStorage.setItem("user", JSON.stringify(userData));
      }
    } else {
      setErrorMessages({ name: "uname", message: errors.uname });
    }
  }, []);

  const renderErrorMessage = useCallback(
    (name: string) =>
      name === errorMessages.name && (
        <div className="error">{errorMessages.message}</div>
      ),
    [errorMessages.message, errorMessages.name]
  );

  if (isSubmitted) {
    return <Navigate to="/app" />;
  }
  return (
    <div className="login">
      <div className="login-form">
        <div className="title">Sign In</div>
        <div className="form">
          <form onSubmit={handleSubmit}>
            <div className="input-container">
              <label>Username </label>
              <input type="text" name="uname" required />
              {renderErrorMessage("uname")}
            </div>
            <div className="input-container">
              <label>Password </label>
              <input type="password" name="pass" required />
              {renderErrorMessage("pass")}
            </div>
            <div className="button-container">
              <input type="submit" />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
