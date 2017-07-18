import React from 'react'
import Node from './Node.jsx';
	
class Gstring extends React.Component{

	constructor(){
		super();
		this.nodeCount = 10;

		// May want to set this stuff in state
		// We would want to toggle the nodeCount on the fly too.
		let nodes = [];

		// Thinking in here we would populate the props with DB data here.  If a new TAB / set all as default (like below):
		for(let i=0; i < this.nodeCount; i++){

			let isInput = false;
			if(i === 8){
				isInput = true;
			}

			nodes.push({node:<Node key={i} handleClick={this.handleClick.bind(this,i)} handleSubmit={this.handleSubmit.bind(this, i)} val='-' isInput={isInput}></Node>})
		}

		this.state = {
			nodes: nodes
		}
	}


	handleClick(e, key){
		console.log('clicked tab', e);

		// set state here, toggle this tab to be an input
	}

	handleSubmit(e, key){
		
	}


	render(){
		console.log(this)

		let nodes = this.state.nodes.map((el,i)=>{
			return el.node;
		})

		return(
			<div>
				{nodes}
			</div>
		)
	}
}

export default Gstring;