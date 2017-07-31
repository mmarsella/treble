import React, {Component} from 'react';
import Gstring from './Gstring.jsx';

class Tab extends Component{
  constructor(){
    super();
    this.stringNumber = 6;  // To be able to handle other stringed instruments in the future (bass/etc..)
    this.nodeCount = 10;  // set the amt of nodes (trailing -'s). Passes to gString

    this.updateTabState = this.updateTabState.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

    let tab = {};

    for(let i=0; i < this.stringNumber; i++){
      tab[i + 1] = [];
    };

    console.log('tab:', tab)

    this.state = {
      tab: tab
    }
  }

  componentWillMount(){
    // Thinking in here we would populate the props with DB data here.  
    // If a new TAB / set all as default (like below):

    /* Init nodes for each string */
    let nodes = [];
    let tab = this.state.tab;

    console.log('tabs before', tab);
    for(let s=0; s < this.stringNumber; s++){
      for(let i=0; i < this.nodeCount; i++){
        nodes.push({val: '', isInput: false});
      }
      tab[s+1] = nodes;
      nodes = [];
    }

    this.setState({
      tab: tab
    })

    console.log('***** TAB IS MOUNTING *******', this.state)
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
      tab.push(<Gstring key={i} stringNumber={i+1} updateTabState={this.updateTabState} nodes={this.state.tab[i + 1]}></Gstring>)
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