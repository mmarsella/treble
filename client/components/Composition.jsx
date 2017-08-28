import React from 'react';
import Tab from './Tab.jsx';

class Composition extends React.Component{
  constructor(props){
    super(props);
  }

  componentWillMount(){
    console.log('comp mounting')


    // api/composition  (GET)  :id, compName
    // 1)  Get Composition
    // 2)  Break comp into tabs
    // 3)  Store each tab into Tab classe's props

    // Thinking in here we would populate the props with DB data here.  
    // If a new TAB / set all as default (like below):
    var tab;

    if(localStorage['myTab']){
      // If stored in DB
      tab = JSON.parse(localStorage.myTab);
    }else{
      /***** New Tab Flow *****/
      let nodes = [];
      tab = this.state.tab;
      console.log('tabs before', tab);
      for(let s=0; s < this.stringNumber; s++){
        for(let i=0; i < this.nodeCount; i++){
          nodes.push({val: '', isInput: false});
        }
        tab[s+1] = nodes;
        nodes = [];
      }
    }

    this.setState({
      tab: tab
    })

  }


  render(){

    let tabs = [];

    // the amt of tabs in a compisition (from the db)
    for(let i=0; i < 4; i++){
      tabs.push(<Tab key={i} data={this.state.tab}></Tab>)
    }

    return(
      <div>
        {tabs}
      </div>
    )
  }
}

export default Composition;