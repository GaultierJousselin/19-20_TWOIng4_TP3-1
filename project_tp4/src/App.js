import React from 'react';

import './App.css';
import HelloTest from './HelloTest';

class App extends React.Component {
  render(){
    return (
      <div>
        <HelloTest prenom = "Gaultier"/>
      </div>
    );
  }
}

export default App;