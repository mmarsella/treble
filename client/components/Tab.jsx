import React, {Component} from 'react';
import Gstring from './Gstring.jsx';

class Tab extends Component{
  constructor(props){
    super(props);
    this.stringNumber = 6;  // To be able to handle other stringed instruments in the future (bass/etc..)
    this.nodeCount = 10;  // set the amt of nodes (trailing -'s). Passes to gString

    this.updateTabState = this.updateTabState.bind(this);
    this.clearTab = this.clearTab.bind(this);
    // this.saveTab = this.saveTab.bind(this);

    // let tab = {};

    // for(let i=0; i < this.stringNumber; i++){
    //   tab[i + 1] = [];
    // };

    // console.log('tab:', tab)
    // console.log('tab:', tab)

    console.log("TAB PROPS", this.props)

    // let tab = JSON.parse(this.props.data);
    let tab = this.props.data;

    // debugger
    // Each Tab is populated from props passed down from Composition
    this.state = {
      tab: tab
    }
  }

  // componentWillMount(){
  //   console.log('TAB mounting')
    // Thinking in here we would populate the props with DB data here.  
    // If a new TAB / set all as default (like below):

    /* Init nodes for each string */
    // var tab;

    // if(localStorage['myTab']){
    //   // If stored in DB
    //   tab = JSON.parse(localStorage.myTab);
    // }else{
    //   /***** New Tab Flow *****/
    //   let nodes = [];
    //   tab = this.state.tab;
    //   console.log('tabs before', tab);
    //   for(let s=0; s < this.stringNumber; s++){
    //     for(let i=0; i < this.nodeCount; i++){
    //       nodes.push({val: '', isInput: false});
    //     }
    //     tab[s+1] = nodes;
    //     nodes = [];
    //   }
    // }

    // this.setState({
    //   tab: tab
    // })

  //   console.log('***** TAB IS MOUNTING *******', this.state)
  // }

  // This keep tracks of all gStrings.
  updateTabState(gString, stringNum, e){
    e.preventDefault();
    console.log('UPDATING TAB!', e.target);
    console.log('gString', gString);
    console.log('stringNum', stringNum);

    let tab = this.state.tab;

    tab[stringNum] = gString;

    console.log('tab', tab);

    this.setState({
      tab: tab
    }, () => {
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

        // let {tabs, composition} = resp.data;

        // this.setState({
        //   composition: composition,
        //   tabs: tabs  
        // })
        // this.changeView(null, 'clist');
      })
      .catch(function(err) {
          console.log('ERRROR', err)
      });

    })


  }

  // saveTab(){
  //   console.log('TAB SUBMITTING');

  //   // Temporary --> This is where we would ping the server with a tab save
  //   let tab = JSON.stringify(this.state.tab);
  //   localStorage.setItem('myTab', tab);

  // }

  clearTab(){
    // console.log('TAB SUBMITTING');

    let tab = this.state.tab;
    let newTab = {};
    let nodes = [];

    // console.log('tab before', this.state.tab)

    for(let arr in tab){
      for(let i=0; i < tab[arr].length; i++){
        nodes.push({val: '', isInput: false});
      }
      newTab[arr] = nodes;
      nodes = [];
    }

    // console.log('newTab', newTab)

    this.setState({
      tab: newTab
    })

  }

  render(){

    let tab = [];
    for(let idx in this.state.tab){

      // console.log('this.state.tab in TAB------>', this.state.tab)
      // console.log('IDX ------>', idx)
      // debugger
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