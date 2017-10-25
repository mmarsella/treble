import React from 'react';
import Tab from './Tab.jsx';

// APP --> CompositionList
class CompositionList extends React.Component{
	constructor(props){
		super(props);

		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.removeComposition = this.removeComposition.bind(this);

		console.log('Composition List props', this.props);

		this.newComposition = {};  // populates from new comp input via handleChange
		this.state = {};
	}

	componentDidMount(){
		// console.log('LOGGING IN!', userForm)
		fetch(`http://localhost:3001/composition/all?user=${this.props.user._id}`) 
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

	createComposition(newComp){
		fetch(`http://localhost:3001/composition/new?user=${this.props.user._id}&name=${newComp.name}`, {
			method: 'POST'
		})
		.then((resp) => resp.json())
		.then((resp) => {
		  console.log('DATA NOW', resp)
		  if(!resp.status){
		    console.log('NOT A VALID USER')
		    return;
		  }
		  console.log('COMPOSITIONS: ', resp);
		  let newComposition = resp.data;
		  this.setState({ composition : newComposition });

		  // Need to transition after succesful composition add
		  this.props.changeView(null, 'comp', this.state.composition);
		})
		.catch(function(err) {
		    console.log('ERRROR', err)
		});
	}


	handleSubmit(e, newComp){
	  e.preventDefault();
	  this.createComposition(newComp);
	}

	handleChange(e){
	  e.preventDefault();
	  if(e.target.name === 'name'){
	    this.newComposition.name = e.target.value
	  }
	}

	removeComposition(comp){
		fetch(`http://localhost:3001/composition/delete?user=${this.props.user._id}&cid=${comp._id}`, {
			method: 'POST'
		})
		.then((resp) => resp.json())
		.then((resp) => {
		  console.log('DATA NOW', resp)
		  if(!resp.status){
		    console.log('ERROR IN DELETING COMPOSITION: ', resp.err);
		    return;
		  }

		  console.log('remove comp resp ', resp);
		  let compositions = this.state.compositions;
		  compositions = compositions.filter(function(el){ return el._id !== resp.data._id})
		  this.setState({ compositions : compositions });

		  // Need to transition after succesful composition add
		  // this.props.changeView(null, 'comp');
		})
		.catch(function(err) {
		    console.log('ERRROR', err)
		});
	}


	render(){
			console.log('state', this.state)
			let compositions = [];
			let that = this;  //preserving 'this' to avoid confliction inside the iterator

			// if this isn't wrapped in an if() --> state is an empty object.  Is there a better placer to setState on fetching comps??
			if(this.state.compositions){
				this.state.compositions.forEach(function(el,i){
					// console.log('this inside-->', this);

					// console.log('el--->', el)
					// will need to pass data back to the click handler here to render the specific composition
				  compositions.push( 
						<div key={i}>
							<div className="compItem" onClick={e => that.props.changeView(e, 'comp', el)}> 
					  	{el.name} 
					   </div>
					  	<span onClick={e => that.removeComposition(el)}>X</span>
						</div>
					)
				})
			}

	    return(
	      <div>
	      	<div onClick={this.createComposition}>new</div>
	        <div onClick={e => this.props.changeView(e, 'intro')}>Back</div>
	        <h1> Composition List for {this.props.user.email}</h1>
	       	{compositions}
	       	<br/>
	       	<form className="newCompForm" name='newCompForm'>
	       	  <input
	       	    ref={(ip)=> this.name= ip}
	       	    className="usernameInput"
	       	    placeholder="New Tab..."
	       	    onChange={this.handleChange}
	       	    name='name' 
	       	  />
	       	  <button onClick={e => this.handleSubmit(e, this.newComposition)}>
	       	    Submit
	       	  </button>
	       	</form>

	      </div>
	    )
	  }
	}

	export default CompositionList;