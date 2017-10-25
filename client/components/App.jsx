import React from 'react';
import '../sass/main.scss';
// import Tab from './Tab.jsx';
import Composition from './Composition.jsx';
import CompositionList from './CompositionList.jsx';
import Intro from './Intro.jsx';
import Navbar from './navbar/navbar.jsx';
import Main from './navbar/navbar.jsx';


export default class App extends React.Component {
  constructor(props){
    super(props);
    this.changeView    = this.changeView.bind(this);
    this.handleSubmit  = this.handleSubmit.bind(this);

    this.state = {
      user: false,
      active: 'intro'
    }

  }

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
  handleSubmit(e, param){
    console.log('HANDLE SUBMIT in APP',e,param)
    e.preventDefault();
    this.login(param);

  }

  // Both login and signup will change this.state.User --> this triggers a re-render.  Render components accordingly
  signUp(e){

  }

  // Only supporting login right now
  login(userForm){
    console.log('LOGGING IN!', userForm)
    fetch(`http://localhost:3001/user/login?email=${userForm.email}&password=${userForm.password}`) 
    .then((resp) => resp.json())
    .then((resp) => {
      console.log('DATA NOW', resp)
      if(!resp.status){
        console.log('NOT A VALID USER')
        return;
      }

      let user = resp.data;

      // Set the user to state.  Then make a view transition
      this.setState({
        user: user
      }, (prevState)=>{
        console.log('STATE IS DONE');
        this.changeView(null, 'clist');
      })

    })
    .catch(function(err) {
        console.log('ERRROR', err)
    });

  }

  changeView(e, view, composition){
    console.log('click', e, view)

    console.log('composition--->', composition)
    this.setState({
      active: view,
      composition: composition
    })
    console.log('*******', this.state.active)
  }

  
  // If we refresh - checks localstorage here to determine if there is a User obj or not.  
  // If there is a User object - render Components accordingly
  componentWillMount(){

    console.log('APP mounting********')
    var user;

    if(localStorage['trebleUser']){
      user = JSON.parse(localStorage.trebleUser);
    }

    this.setState({
      user: user
    })

  }

  render() {
    let active = this.state.active;
    // let active = 'clist';
    return (
      <div style={{textAlign: 'center'}}>
        <Navbar handleSubmit={this.handleSubmit}></Navbar>
        <Main></Main>
      </div>
    )
  }
}