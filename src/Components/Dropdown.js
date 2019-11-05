import React, { Component } from 'react';
class Dropdown extends React.Component {

    render() {
        return (
            <div align='center'>
                <p>{this.props.dropdown}</p>
                <select>
                    <option value={this.props.one}>{this.props.one}</option>
                    <option value={this.props.two}>{this.props.two}</option>
                    <option value={this.props.three}>{this.props.three}</option>
                    <option value={this.props.four}>{this.props.four}</option>
                </select>
            </div>
        )
    }
}
export default Dropdown;
