import React from 'react';


class Node extends React.Component{



	render(){
		
			console.log("this.props", this.props)
			if(this.props.isInput){
				return(
					<div className='node' onClick={this.props.handleClick}>
					<form onSubmit={this.props.handleSubmit} className="nodeForm">
						<input name={"tab-" + this.props.idx} className="tabInput"/>
					</form>
				</div>
				)
			}
		

			return(
				<div className='node' onClick={this.props.handleClick}>
					{this.props.val}
				</div>
			)
	}
}

export default Node;