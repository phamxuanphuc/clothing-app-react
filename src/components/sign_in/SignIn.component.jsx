import React from "react";
import "./SignIn.style.scss";
import { signInWithGoogle } from "../../firebase/firebase.utils";

//Components
import FormInput from "../form_input/FormInput.component";
import ButtonCustomer from "../buttom_customer/ButtonCustomer.component";

class SignIn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }
  handleSubmit = e => {
    e.preventDefault();
    this.setState({ email: "", password: "" });
  };
  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };
  render() {
    return (
      <div className="sign-in">
        <h1 className="title">I already have an account</h1>
        <div className="sub-title">Sign in with your email and password</div>
        <div className="signIn-form">
          <form onSubmit={this.handleSubmit}>
            <FormInput
              name="email"
              id="email"
              label="Email"
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
              required={true}
            />
            <FormInput
              name="password"
              id="password"
              label="Password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange}
              required={true}
            />
            <div className="button">
              <ButtonCustomer type="submit">Sign In</ButtonCustomer>
              <ButtonCustomer signInGoogle={true} onClick={signInWithGoogle}>
                Sign with Google
              </ButtonCustomer>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default SignIn;
