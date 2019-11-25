import React, { Component } from 'react';
import '../App.css';

class Dropdown extends React.Component {
    
    render() {
        return (
            <div align='center'>
                {/* <p>{this.props.dropdown}</p> */}
                <select id="select">                 
                   {this.props.value.map(i => <option value={i}>{i}</option>)}
                </select>
            </div>
        )
    }
}
export default Dropdown;
