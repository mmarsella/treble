import React from 'react';


class Node extends React.Component{



	render(){
		
			console.log("this.props", this.props)
			if(this.props.isInput){
				return(
					<div className='node' onClick={this.props.handleClick}>
					<input className="tabInput"/>
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