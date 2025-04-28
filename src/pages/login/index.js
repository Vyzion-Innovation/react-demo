import React, { useState } from "react";
import { Button, toast, ToastContainer, useNavigate } from "../../libraries";
import CompanyLogo from "../../assets/vyionLogo/vi.png";
import { ErrorMessages, HeadingName, InputHeading, Placeholder, FormAuthInput, RoutingPaths } from "../../components";
import "./index.css";



const LoginPage = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const inputChange = (e) => {
    const { name, value } = e.target;

    setLoginData({
      ...loginData,
      [name]: value,
    });
  };

  const validateForm = (data) => {
    const errors = {};

    if (!data.email) {
      errors.email = ErrorMessages.email;
    } else if (!/\S+@\S+\.\S+/.test(data.email)) {
      errors.email = ErrorMessages.emailPattern;
    }
    if (!data.password) {
      errors.password = ErrorMessages.password;
    }

    return errors;
  };

  


  const loginApi = async () => {
    setLoading(true);
    navigate(RoutingPaths.home);
    // try {
    
    //   toast.success(ToastMessages.loginSuccess);
    //   setLoading(false);
    //   navigate(RoutingPaths.home);

    // } catch (err) {
    //   toast.error(ToastMessages.loginError);
    //   <ToastContainer />

    //   setLoading(false);
    // }
  };

  const tapOnSignIn = () => {
    const newErrors = validateForm(loginData);
    setErrors(newErrors);
    setIsSubmitted(true);
    if (Object.keys(newErrors).length === 0) {
      setLoading(true);
      loginApi();
    }
  };

  return (
    <div className="login__main-div">
      <div className="login__sub-div">
        <div className="col">
          <div className="card login__card">
            <img
              src={CompanyLogo}
              alt="logo"
              className="login__company__logo"
            />
            <h5 className="mb-4 text-center">{HeadingName.login.main}</h5>
            <div className="p-fluid">

              <FormAuthInput
                id="email"
                name="email"
                value={loginData.email}
                onChange={inputChange}
                label={InputHeading.login.email}
                placeholder={Placeholder.login.email}
                error={isSubmitted && errors.email} optionsLoader={undefined} />

              <FormAuthInput
                id="password"
                name="password"
                value={loginData.password}
                onChange={inputChange}
                label={InputHeading.login.password}
                placeholder={Placeholder.login.password}
                error={isSubmitted && errors.password}
                type="password" optionsLoader={undefined} />

              <Button
                label="Login"
                type="button"
                className="mb-3 mt-4 login__button"
                loading={loading}
                onClick={tapOnSignIn}
              />
              <ToastContainer />

            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
