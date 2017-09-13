import React from 'react';
import Tab from './Tab.jsx';

class CompositionList extends React.Component{
	constructor(props){
		super(props)
		console.log('props', this.props)
	}

	componentWillMount(){
		
	}


	render(){

	    return(
	      <div>
	        <div onClick={e => this.props.changeView(e, 'intro')}>Back</div>
	        <h1>HELLO from composition list</h1>
	        <div onClick={e => this.props.changeView(e, 'comp')}>Composition #1</div>
	      </div>
	    )
	  }
	}

	export default CompositionList;