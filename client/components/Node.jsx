import React from 'react';


class Node extends React.Component{



	render(){
		
			console.log("this.props", this.props)
			if(this.props.isInput){
				return(
					<div className='node' onClick={this.props.handleClick}>
					<form onSubmit={this.props.handleSubmit} className="nodeForm" name='nodeForm'>
						<input 	
							name={"s6-" + this.props.idx} 
							className="tabInput"
							onChange={this.props.handleChange}
							value={this.props.val}
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