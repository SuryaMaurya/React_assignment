import React, { Component } from 'react';
class Input extends React.Component {

  render() {
    return (
      <div align='center'>
        <h1 align='center'>Input of {this.props.header}</h1>
        <input type={this.props.text} value={this.props.name} />
      </div>
    )
  }
}
export default Input;
