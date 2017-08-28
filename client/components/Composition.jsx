import React from 'react';
import Tab from './Tab.jsx';

class Composition extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    console.log('comp mounting')
    // Thinking in here we would populate the props with DB data here.  
    // If a new TAB / set all as default (like below):


  }


  render(){

    let tabs = [];
    for(let i=0; i < 4; i++){
      tabs.push(<Tab key={i}></Tab>)
    }

    return(
      <div>
        {tabs}
      </div>
    )
  }
}

export default Composition;