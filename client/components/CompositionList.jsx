import React from 'react';
import Tab from './Tab.jsx';

class CompositionList extends React.Component{
	constructor(props){
		super(props)
	}

	componentWillMount(){
		console.log('compositionlist mounting********')
		var user;

		if(localStorage['trebleUser']){
			user = JSON.parse(localStorage.myTab)
		}
	}
}