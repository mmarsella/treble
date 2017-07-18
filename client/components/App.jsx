/*
    ./client/components/App.jsx
*/
import React from 'react';
import '../sass/main.scss';
import Gstring from './Gstring.jsx'

export default class App extends React.Component {
  render() {
    return (
     <div style={{textAlign: 'center'}}>
        <h1>TAB</h1>

        <Gstring>
        </Gstring>
      </div>);
  }
}