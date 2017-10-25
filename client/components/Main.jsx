import React from 'react';
import '../sass/main.scss';
// import Tab from './Tab.jsx';
import Composition from './Composition.jsx';
import CompositionList from './CompositionList.jsx';
import Intro from './Intro.jsx';
import Navbar from './navbar/navbar.jsx';
import { Switch, Route } from 'react-router-dom'



class Main extends React.Component{
  constructor(props){
    super(props);
    this.state = {tabs:[]}
  }



  {
          active === 'intro' ? (<Intro></Intro>) : 
          active === 'clist' ? (<CompositionList user={this.state.user} changeView={this.changeView}></CompositionList>) : 
          active === 'comp'  ? (<Composition user={this.state.user} composition={this.state.composition} changeView={this.changeView}></Composition>): null
        }



   render() {
    return (
    	<div>
	    	<Switch>
	    		<Route exact path='/' component={Intro} />
	    		<Route path='/compositions' component={CompositionList} />
	    		<Route path='/composition' component={Composition} />
    		
    		
    	</div>



    )
  }
}