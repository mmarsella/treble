import React from 'react';
import Login from './login.jsx'

export default class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    // this.props.handleSubmit = this.props.handleSubmit.bind(this);
    // this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);

    this.state = {
      user: false
    }

    this.userForm = {
      email:'',
      password:''
    }
  }

  handleChange(e){
    e.preventDefault();

    console.log('e.target:', e.target.value);
    console.log('e.target:', e.target.name);
    if(e.target.name === 'password'){
      this.userForm.password = e.target.value
    }

    if(e.target.name === 'email'){
      this.userForm.email = e.target.value
    }

    console.log('userForm---->', this.userForm)

  }

  // handleSubmit(e){
  //   console.log('HANDLE SUBMIT')
  //   e.preventDefault();
  //   this.props.login(this.userForm);
  // }

  signUp(e){
    console.log('signed up!', e)
  }

  // login(){

  // }

  render() {
    return (
      <nav className="navbar">
        <div className="logo"> Treble </div>
        <Login
          handleChange={this.handleChange}
          handleSubmit={this.props.handleSubmit} 
          handleSubmit={e => this.props.handleSubmit(e, this.userForm)} 
        ></Login>
      </nav>
    )
  }
}