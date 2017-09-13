import React from 'react';
import '../sass/main.scss';
// import Tab from './Tab.jsx';
import Composition from './Composition.jsx';
import Navbar from './navbar/navbar.jsx';


export default class App extends React.Component {

  // Login logic shoudl bubble up to the App level from the navbar

  // No User
  /*  Intro Screen  -- need this compoennt */
  
  // Logged In
  /* <CompositionList></CompositionList> */

  // On Select of Composition (in CompositionList)
  /* <Composition> */

  // handleChange(e){
  //   console.log('e.target:', e.target);
  // }



  // Should only trigger login.... for now

  // Should return a User object

  // {email,uid}
  handleSubmit(e){

  }



  // Both login and signup will change this.state.User --> this triggers a re-render.  Render components accordingly
  signUp(e){

  }

  // Only supporting login right now
  login(e){

  }


  // If we refresh - checks localstorage here to determine if there is a User obj or not.  
  // If there is a User object - render Components accordingly
  componentWillMount(){

  }


  render() {
    return (
     <div style={{textAlign: 'center'}}>
      <Navbar></Navbar>
        <h1>Composition</h1>
        <Composition></Composition>
      </div>
    )
  }
}