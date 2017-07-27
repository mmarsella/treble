import React, {Component} from 'react';
import Gstring from './Gstring.jsx';

class Tab extends Component{
  constructor(){
    super();
    this.stringNumber = 6;

    this.updateTabState = this.updateTabState.bind(this);
  }

  updateTabState(e){
    e.preventDefault();
    console.log('UPDATING TAB!');
  }

  render(){

    let tab = [];
    for(let i=0; i < this.stringNumber; i++){
      tab.push(<Gstring key={i} stringNumber={i+1} updateTabState={this.updateTabState}></Gstring>)
    }


    return(
      <div>
      {tab}
      </div>
    )
  }
}


export default Tab;