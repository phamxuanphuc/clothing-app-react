import React from "react";
import "./SignIn-SignUp.style.scss";
import SignIn from "../../components/sign_in/SignIn.component";
import SignUp from "../../components/sign_up/SignUp.component";

const SignInSignUpPage = () => (
  <div className="sign-in-sign-up">
    <SignIn />
    <SignUp/>
  </div>
);
export default SignInSignUpPage;
