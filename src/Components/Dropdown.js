import React, { Component } from 'react';
class Dropdown extends React.Component {
    
    render() {
        return (
            <div align='center'>
                <p>{this.props.dropdown}</p>
                <select>                    
                   {this.props.value.map(i => <option >{i}</option>)}
                </select>
            </div>
        )
    }
}
export default Dropdown;
