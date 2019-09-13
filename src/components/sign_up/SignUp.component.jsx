import React from "react";
import './SignUp.styles.scss';

//Component UI
import FormInput from '../form_input/FormInput.component';
import ButtonCustomer from "../buttom_customer/ButtonCustomer.component";

//call firebase data
import {auth, createUserProfileDocument} from "../../firebase/firebase.utils";


class SignUp extends React.Component{
constructor(props){
  super(props);
  this.state={
    displayName:'',
    email:'',
    password:'',
    confirmPassword:''
  }
}
  handleSubmit = async event => {
    event.preventDefault();
    const {displayName, email, password,confirmPassword }= this.state;
    if(password !== confirmPassword){
      alert("Password don't match");
      return;
    }
    try{
      const {user}=await auth.createUserWithEmailAndPassword(email, password);
      await createUserProfileDocument(user,{displayName});
    }catch (err) {
      console.log(err)
    }
    this.setState({
      displayName:'',
      email:'',
      password:'',
      confirmPassword:''
    })
  };
  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };
render() {
  return(
    <div className='sign-up'>
      <h1 className='title'>I do not have a account</h1>
      <div>Sign up with your email and password</div>
      <form className="sign-up-form" onSubmit={this.handleSubmit}>
        <FormInput
          name='displayName'
          id='displayName'
          type='text'
          label="Display Name"
          value={this.state.displayName}
          onChange={this.handleChange}
          required={true}
        />
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
        <FormInput
          name="confirmPassword"
          id="confirmPassword"
          label="Confirm Password"
          type="password"
          value={this.state.confirmPassword}
          onChange={this.handleChange}
          required={true}
        />
        <ButtonCustomer type="submit">Sign Up</ButtonCustomer>
      </form>
    </div>
  )
}
}
export default SignUp