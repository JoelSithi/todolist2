import React, {Component} from 'react';
import Task from './Task.js'
import Date from './Date.js'
import Avatar from './Avatar.js'

import './App.css'




 class App extends Component {
   render() {
    return (
      <div className="appl" style={{padding: '30px 30px'}}>
        <h1 style={{fontSize:'60px'}}> Todo List</h1>
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
