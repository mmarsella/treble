import React from 'react';
import Login from './login.jsx'

export default class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.login = this.login.bind(this);
    this.signUp = this.signUp.bind(this);

    this.state = {
      user: false
    }

    this.userForm = {
      username:'',
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

    if(e.target.name === 'username'){
      this.userForm.username = e.target.value
    }

    console.log('userForm---->', this.userForm)

  }

  handleSubmit(e){
    console.log('HANDLE SUBMIT')
    e.preventDefault();
    this.login();
  }

  signUp(e){
    console.log('signed up!', e)
  }

  login(){
    console.log('LOGGING IN!', this.userForm)
    fetch(`http://localhost:3001/user/login?username=${this.userForm.username}&password=${this.userForm.password}`) 
    .then((resp) => resp.json())
    .then((data) => {
      console.log('DATA NOW', data)
    })
    .catch(function(err) {
        console.log('ERRROR', err)
    });
  }

  render() {
    return (
      <nav className="navbar">
        <div className="logo"> Treble </div>
        <Login
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit} 
        ></Login>
      </nav>
    )
  }
}