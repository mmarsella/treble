import React from 'react'
import Node from './Node.jsx';
	
class Gstring extends React.Component{

	constructor(props){
		super(props);
		this.nodeCount = 10;

		console.log('THIS PROPS IN STRING-->', this.props)

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
			{val: '', isInput: false}
		];

		this.handleKeyDown = this.handleKeyDown.bind(this);


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
		console.log('this clicked', this)
		console.log('clicked tab', idx);

		let nodes = this.state.nodes;

		console.log('NODES', this.state)

		// Make sure no other node inputs are open.
		// for(let i=0; i < nodes.length; i++){
		// 	if(nodes[i].isInput){
		// 		// console.log('CLOSING: ', i);
		// 		nodes[i].isInput = false;
		// 	}
		// }

		// Open the clicked node's input
		nodes[idx].isInput = true;

		//update state to reflect changes
		this.setState({
			nodes: nodes
		})

	}

	handleSubmit(e){
		e.preventDefault();
		// console.log('clicked tab', e.target);

		let nodes = this.state.nodes;

		let idx;
		// debugger
		// stupid workaround --> needs better implementation
		if(e.target.firstElementChild){
			idx = e.target.firstElementChild.name.split('-')[1];
		}else{
			idx = e.target.name.split('-')[1];			
		}
		
		nodes[idx].isInput = false;

		this.setState({
			nodes:nodes
		});

	}

	handleKeyDown(e){
		// console.log('keydown', e);
		if(e.keyCode === 27){
			// console.log('e--------->', e.target)
			this.handleSubmit(e);
		}
	}


	render(){
		// console.log(this)

		let nodes = this.state.nodes.map((el,i)=>{
			return <Node 
								key={i} 
								stringNumber={this.props.stringNumber}
								handleClick={this.handleClick.bind(this, i)} 
								handleSubmit={this.handleSubmit.bind(this)} 
								handleChange={this.handleChange.bind(this)}
								onKeyDown={this.handleKeyDown} 
								val={el.val} 
								isInput={el.isInput} 
								idx={i}>
						</Node>
		})

		return(
			<div className='gString'>
				{nodes}
			</div>
		)
	}
}

export default Gstring;