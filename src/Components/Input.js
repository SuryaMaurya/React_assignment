import React, { Component } from 'react';
import '../App.css';

class Input extends React.Component {
  userInput = React.createRef();
  submit = (event) => {
    event.preventDefault();
    console.log(this.userInput.current.value)
  }
  render() {
    return (
      <div >
        <form onSubmit={this.submit}>
          {/* <h1 align='center'>Input of {this.props.header}</h1> */}
          <input type={this.props.text} placeholder={this.props.name} ref={this.userInput} required />
          <button>Submit</button>
        </form>
      </div>
    )
  }
}
export default Input;
