import React, {Component} from 'react';
import Gstring from './Gstring.jsx';

class Tab extends Component{
  constructor(props){
    super(props);
    this.stringNumber = 6;  // To be able to handle other stringed instruments in the future (bass/etc..)
    this.nodeCount = 10;  // set the amt of nodes (trailing -'s). Passes to gString

    this.updateTabState = this.updateTabState.bind(this);
    this.clearTab = this.clearTab.bind(this);
    console.log("TAB PROPS", this.props)

    let tab = this.props.data;

    // Each Tab is populated from props passed down from Composition
    this.state = {
      tab: tab
    }
  }

  // Updates Tab to the database
  updateTab(tab){
    // update next level component here
    fetch(`http://localhost:3001/composition/updateTab?id=${this.props.id}`,
      {
        method: 'put',
        body: JSON.stringify(tab),
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        }
      }) 
    .then((resp) => resp.json())
    .then((resp) => {
      console.log('DATA NOW', resp)
      if(!resp.status){
        console.log('NOT A VALID USER')
        return;
      }
      console.log('updateTab resp ===>', resp);
    })
    .catch(function(err) {
      console.log('ERRROR', err)
    });
  }

  // This keep tracks of all gStrings.
  updateTabState(gString, stringNum, e){
    e.preventDefault();
    // console.log('UPDATING TAB!', e.target);
    // console.log('gString', gString);
    // console.log('stringNum', stringNum);
    let tab = this.state.tab;
    tab[stringNum] = gString;

    this.setState({
      tab: tab
    }, () => {
      this.updateTab(tab);
    })
  }

  clearTab(){
    let tab = this.state.tab;
    let newTab = {};
    let nodes = [];

    for(let arr in tab){
      for(let i=0; i < tab[arr].length; i++){
        nodes.push({val: '', isInput: false});
      }
      newTab[arr] = nodes;
      nodes = [];
    }

    this.setState({
      tab: newTab
    }, () => {
      this.updateTab(newTab);
    })
  }

  render(){
    let tab = [];
    for(let idx in this.state.tab){
      tab.push(<Gstring key={idx} stringNumber={idx} updateTabState={this.updateTabState} nodes={this.state.tab[idx]}></Gstring>)
    }

    return(
      <div className="tab">
      <button onClick={this.clearTab}>CLEAR TAB</button>
      {tab}
      </div>
    )
  }
}

export default Tab;