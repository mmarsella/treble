import React from 'react';
import Tab from './Tab.jsx';

class Composition extends React.Component{
  constructor(props){
    super(props);
    this.state = {tabs:[]}

    this.saveComposition = this.saveComposition.bind(this);
    this.updateTabs      = this.updateTabs.bind(this);
  }

  componentWillMount(){
    console.log('comp mounting', this.props)
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

      console.log('/single response: ', resp);

      let {tabs, composition} = resp.data;

      this.setState({
        composition: composition,
        tabs: tabs  
      })
      // this.changeView(null, 'clist');
    })
    .catch(function(err) {
        console.log('ERRROR', err)
    });
  }


  saveComposition(tabs){
    console.log('SAVING', tabs)
    fetch(`http://localhost:3001/composition/update?cid=${this.state.composition._id}`, {
      method: 'put',
      body: JSON.stringify(tabs),
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

      // this.setState({ compositions:compositions });
      console.log('tabs: ', resp);

      // let tabs = resp.data;

      // this.setState({
      //   tabs: tabs  
      // })
      // this.changeView(null, 'clist');
    })
    .catch(function(err) {
        console.log('ERRROR', err)
    });
  }


  // --------- TODO ------------
  // passed down to Tab component.  
  // Tab component listens to changes on each gString --> which listens for changes on each node
  // These events should bubble up to the Composition level for most relevant tab data for saving 
  updateTabs(tab){

  }



  render(){

    let tabs = [];
    console.log('this.state in render', this.state);
    // the amt of tabs in a compisition (from the db)
    for(let i=0; i < this.state.tabs.length; i++){

      console.log('this.state.tabs[i].data', this.state.tabs[i].data)
      tabs.push(<Tab key={i} data={this.state.tabs[i].data} id={this.state.tabs[i]._id} updateTabs={this.updateTabs}></Tab>)
    }

    console.log('this.state.tabs  ', this.state.tabs)

    return(
      <div>
        <button className='saveComp' onClick={e => this.saveComposition(this.state.tabs)}>SAVE</button>
        <h1>{this.props.composition.name}</h1>
        <br/>
        <div onClick={e => this.props.changeView(e, 'clist')}>Back</div>
        {tabs}
      </div>
    )
  }
}

export default Composition;