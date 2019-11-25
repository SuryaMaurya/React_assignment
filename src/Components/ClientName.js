import React, { Component } from 'react';
import '../App.css';


class ClientName extends React.Component {
    render() {
        return (
          <div >
            <h3> {this.props.text} </h3>
          </div>
        )
      }
    }
    export default ClientName;