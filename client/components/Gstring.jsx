import React from 'react'
import Node from './Node.jsx';
	
class Gstring extends React.Component{

	constructor(props){
		super(props);
		this.handleKeyDown = this.handleKeyDown.bind(this);

		let nodes = this.props.nodes;
		this.state = {
			nodes: nodes
		}

		// console.log('THIS PROPS IN STRING-->', this.props.nodes)
	}


	// When state is updated in parent component (Tab), update state here (we init state through parent props here)
	componentWillReceiveProps(nextProps) {
		console.log('NEXT PROPS', nextProps)
	  this.setState({ nodes: nextProps.nodes });  
	}

	componentWillMount(){
	  console.log('***** gString IS MOUNTING *******')
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
		// console.log('this clicked', this)
		console.log('clicked tab', idx);

		let nodes = this.state.nodes;

		console.log('NODES', this.state.nodes)

		// Make sure no other node inputs are open.
		for(let i=0; i < nodes.length; i++){
			if(nodes[i].isInput){
				// console.log('CLOSING: ', i);
				nodes[i].isInput = false;
			}
		}

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

		// console.log('this.props', this.props);

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

		// Updates Tab component
		// The goal is to store full tab data in the Tab component by passing each 
		// gString's state up.

		//TODO --> create a submit TAB button at the App component lvl to submit all collected 
		// TAB data
		this.props.updateTabState(nodes, e.target.firstElementChild.name.split('-')[0], e);

	}

	handleKeyDown(e){
		// console.log('keydown', e);
		if(e.keyCode === 27){
			// console.log('e--------->', e.target)
			this.handleSubmit(e);
		}
	}


	render(){
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