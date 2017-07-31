import React from 'react';

class Node extends React.Component{
	render(){
		
			// console.log("this.props Node", this.props)
			if(this.props.isInput){
				return(
					<div className='node' onClick={this.props.handleClick}>
					<form onSubmit={this.props.handleSubmit} className="nodeForm" name='nodeForm'>
						<input 	
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
				<div className='node' onClick={this.props.handleClick}>
					{this.props.val ? this.props.val: '-'}
				</div>
			)
	}
}

export default Node;