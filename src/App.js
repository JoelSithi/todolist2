import React, {Component} from 'react';
import Task from './Task.js'
import Date from './Date.js'
import Avatar from './Avatar.js'

import './App.css'




 class App extends Component {
   render() {
    return (
      
      <div className="appl" style={{padding: '10px 10px', margin:'0 auto' }}>
        <h1 style={{fontSize:'60px'}}> My Todo List App</h1>
        <Avatar />
        <br />
        <Date />
        <br />
        <Task />
        <br />
      </div>
    
    );
  }
  
 }


export default App;
