import React from 'react';
import Tab from './Tab.jsx';

class CompositionList extends React.Component{
	constructor(props){
		super(props)
		console.log('props', this.props)
		this.state = {};
	}

	componentWillMount(){

	}

	componentDidMount(){
		// console.log('LOGGING IN!', userForm)
		fetch(`http://localhost:3001/composition/all?uid=yoyoyo`) 
		.then((resp) => resp.json())
		.then((resp) => {
		  console.log('DATA NOW', resp)
		  if(!resp.status){
		    console.log('NOT A VALID USER')
		    return;
		  }

		  console.log('COMPOSITIONS: ', resp);

		  let compositions = resp.data;

		  this.setState({ compositions:compositions });


		  // this.changeView(null, 'clist');
		})
		.catch(function(err) {
		    console.log('ERRROR', err)
		});
	}


	render(){
			console.log('state', this.state)
			let compositions = [];


			console.log('this outside-->', this);

			let that = this;  //preserving 'this' to avoid confliction inside the iterator

			// if this isn't wrapped in an if() --> state is an empty object.  Is there a better placer to setState on fetching comps??
			if(this.state.compositions){
				this.state.compositions.forEach(function(el,i){
					console.log('this inside-->', this);
					// will need to pass data back to the click handler here to render the specific composition
				  compositions.push( <div key={i} onClick={e => that.props.changeView(e, 'comp')}> {el.name} </div>);
				})
			}

	    return(
	      <div>
	        <div onClick={e => this.props.changeView(e, 'intro')}>Back</div>
	        <h1> Composition List for {this.props.user.email}</h1>
	       	{compositions}
	      </div>
	    )
	  }
	}

	export default CompositionList;