import React, { Component } from 'react';
import Complaint from './Complaint';
import Report from './Report';

class App extends React.Component{
  
  render() {
    return(
      <>
       <Complaint /><br/>
       <Report /> 
      </>
    )
  }
}
export default App;
