import React from 'react';
import Login from './login.jsx'

export default class Navbar extends React.Component {

  constructor(props){
    super(props);
    this.handleChange = this.handleChange.bind(this);
    this.signUp = this.signUp.bind(this);
  }


  handleChange(e){
    console.log('e.target:', e.target);
  }

  signUp(e){
    console.log('signed up!', e)
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