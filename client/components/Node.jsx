import React from 'react';

class Node extends React.Component{

	constructor(props){
		super(props);
	};

	componentDidUpdate(){
		if(this.props.isInput){
			this.myInput.focus();
		}
	}

	render(){	
			if(this.props.isInput){
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
				<div className='node' onClick={this.props.handleClick} ref={(ip)=> this.myNode= ip}>
					{this.props.val ? this.props.val: <img src='../assets/dash.png' />}
				</div>
			)
	}
}

export default Node;