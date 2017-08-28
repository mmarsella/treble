import React from 'react';

class Node extends React.Component{

	constructor(props){
		super(props);
	};

	componentDidUpdate(){
		console.log('focusing')
		if(this.props.isInput){
			this.myInput.focus();
		}
	}

	render(){	
		// console.log("this.props Node", this.props)
			if(this.props.isInput){
				console.log('I am the input', this.props.idx)
				// debugger
				return(
					<div className='node'>
					<form onSubmit={this.props.handleSubmit} className="nodeForm" name='nodeForm'>
						<input
							ref={(ip)=> this.myInput= ip}
							name={this.props.stringNumber + '-' + this.props.idx} 
							className="tabInput"
							onChange={this.props.handleChange}
							value={this.props.val}
							onKeyDown={this.props.onKeyDown}
						/>
					</form>
				</div>
				)
			}
		
			return(

				<div className='node' onClick={this.props.handleClick}
				ref={(ip)=> this.myNode= ip}
				>
					{this.props.val ? this.props.val: '-'}
				</div>
			)
	}
}

export default Node;