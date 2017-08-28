import React from 'react';
import '../sass/main.scss';
import Tab from './Tab.jsx';
import Navbar from './navbar/navbar.jsx';


export default class App extends React.Component {

  // Login logic shoudl bubble up to the App level from the navbar
  
  // handleChange(e){
  //   console.log('e.target:', e.target);
  // }

  // signUp(e){

  // }


  render() {
    return (
     <div style={{textAlign: 'center'}}>
      <Navbar></Navbar>
        <h1>TAB</h1>
        <Tab></Tab>
      </div>
    )
  }
}