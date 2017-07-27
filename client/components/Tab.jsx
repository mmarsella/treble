import React, {Component} from 'react';
import Gstring from './Gstring.jsx';

class Tab extends Component{
  constructor(){
    super();
    this.stringNumber = 6;
  }

  render(){

    let tab = [];
    for(let i=0; i < this.stringNumber; i++){
      tab.push(<Gstring key={i} stringNumber={i+1}></Gstring>)
    }


    return(
      <div>
      {tab}
      </div>
    )
  }





}


export default Tab;