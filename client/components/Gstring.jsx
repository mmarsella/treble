import React from 'react'
import Node from './Node.jsx';
	
class Gstring extends React.Component{

	constructor(){
		super();
		this.nodeCount = 10;

		// May want to set this stuff in state
		// We would want to toggle the nodeCount on the fly too.

		// Thinking in here we would populate the props with DB data here.  If a new TAB / set all as default (like below):
		let nodes = [
			{val: '', isInput: false},
			{val: '', isInput: false},
			{val: '', isInput: false},
			{val: '', isInput: false},
			{val: '', isInput: false},
			{val: '', isInput: false},
			{val: '', isInput: false},
			{val: '', isInput: false},
			{val: '', isInput: true}
		];


		this.state = {
			nodes: nodes
		}
	}


	handleChange(e){
		console.log('e.target:', e.target);

		let nodes = this.state.nodes;
		let idx = e.target.name.split('-')[1];
		nodes[idx].val = e.target.value; 

		this.setState({
			nodes:nodes
		});

	}


	handleClick(idx){
		// console.log('clicked tab', e);

		let nodes = this.state.nodes;
		// debugger

		nodes[idx].isInput = true;

		this.setState({
			nodes: nodes
		})

		// set state here, toggle this tab to be an input
	}

	handleSubmit(e){
		e.preventDefault();
		console.log('clicked tab', e.target);
		// console.log('SUBMITTED', e)
		// debugger

		let nodes = this.state.nodes;
		let idx = e.target.firstElementChild.name.split('-')[1];
		
		nodes[idx].isInput = false;


		this.setState({
			nodes:nodes
		});

		// maybe we should have state in the Node as well?
		// not sure hot to toggle active/input mode 



	}


	render(){
		console.log(this)

		let nodes = this.state.nodes.map((el,i)=>{
			return <Node 
								key={i} 
								handleClick={this.handleClick.bind(this, i)} 
								handleSubmit={this.handleSubmit.bind(this)} 
								handleChange={this.handleChange.bind(this)} 
								val={el.val} 
								isInput={el.isInput} 
								idx={i}>
						</Node>
		})

		return(
			<div>
				{nodes}
			</div>
		)
	}
}

export default Gstring;