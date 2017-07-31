import React, {Component} from 'react';
import Gstring from './Gstring.jsx';

class Tab extends Component{
  constructor(){
    super();
    this.stringNumber = 6;

    this.updateTabState = this.updateTabState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    let tab = {};

    for(let i=0; i < this.stringNumber; i++){
      tab[i] = [];
    };

    console.log('tab:', tab)
    console.log('tab:', tab)

    this.state = {
      tab: tab
    }
  }

  // This keep tracks of all gStrings.
  updateTabState(gString, stringNum, e){
    e.preventDefault();
    console.log('UPDATING TAB!', e.target);
    console.log('gString', gString);
    console.log('stringNum', stringNum);

    let tab = this.state.tab;

    tab[stringNum] = gString;

    this.setState({
      tab: tab
    })
  }

  handleSubmit(){
    console.log('TAB SUBMITTING');

    // Temporary --> This is where we would ping the server with a tab save
    let tab = JSON.stringify(this.state.tab);
    localStorage.setItem('myTab', tab);

  }

  render(){

    let tab = [];
    for(let i=0; i < this.stringNumber; i++){
      tab.push(<Gstring key={i} stringNumber={i+1} updateTabState={this.updateTabState}></Gstring>)
    }


    return(
      <div>
      <button onClick={this.handleSubmit}>SAVE TAB</button>
      {tab}
      </div>
    )
  }
}


export default Tab;