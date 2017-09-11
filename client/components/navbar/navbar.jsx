import React from 'react';
import Login from './login.jsx'

export default class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
    this.login();
  }


  handleChange(e){
    console.log('e.target:', e.target);
  }

  signUp(e){
    console.log('signed up!', e)
  }

  login(){
    fetch(`http://localhost:3001/user/login`) // Call the fetch function passing the url of the API as a parameter
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

        ></Login>
      </nav>
    )
  }
}