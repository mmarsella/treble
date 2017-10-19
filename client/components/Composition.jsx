import React from 'react';
import Tab from './Tab.jsx';

class Composition extends React.Component{
  constructor(props){
    super(props);
    this.state = {tabs:[]}
  }

  componentWillMount(){
    console.log('comp mounting', this.props)


    // api/composition  (GET)  :id, compName
    // 1)  Get Composition
    // this.getComposition(1) // TODO: Should pass a comp ID from this.props. Put in temp comp id for now 

    // 2)  Break comp into tabs
    // 3)  Store each tab into Tab classe's props





    // Thinking in here we would populate the props with DB data here.  
    // If a new TAB / set all as default (like below):
    // var tab;
    // // debugger
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



  }


  componentDidMount(){
    fetch(`http://localhost:3001/composition/single?cid=${this.props.composition._id}`) 
    .then((resp) => resp.json())
    .then((resp) => {
      console.log('DATA NOW', resp)
      if(!resp.status){
        console.log('NOT A VALID USER')
        return;
      }

      // this.setState({ compositions:compositions });
      console.log('tabs: ', resp);

      let tabs = resp.data;

      this.setState({
        tabs: tabs  
      })


      // this.changeView(null, 'clist');
    })
    .catch(function(err) {
        console.log('ERRROR', err)
    });
  }

  // Makes an API call to grab composition
  // getComposition(compID){ 

  //   // Needs a uid and composition id

  //   fetch(`http://localhost:3001/composition?id=${compID}&uid=mark`) // Call the fetch function passing the url of the API as a parameter
  //   .then((resp) => resp.json())
  //   .then((data) => {
  //     console.log('DATA NOW', data)
  //   })
  //   .catch(function(err) {
  //       console.log('ERRROR', err)
  //   });
  // }


  render(){

    let tabs = [];
    console.log('this.state in render', this.state);
    // the amt of tabs in a compisition (from the db)
    for(let i=0; i < this.state.tabs.length; i++){

      console.log('this.state.tabs[i].data', this.state.tabs[i].data)
      tabs.push(<Tab key={i} data={this.state.tabs[i].data}></Tab>)
    }

    return(
      <div>
        <h1>{this.props.composition.name}</h1>
        <br/>
        <div onClick={e => this.props.changeView(e, 'clist')}>Back</div>
        {tabs}
      </div>
    )
  }
}

export default Composition;