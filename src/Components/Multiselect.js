import React, { Component } from 'react';
class Multiselect extends React.Component {

    render() {
        return (
            <div align='center'>
                <p>{this.props.multiselect}</p>
                <select multiple="multiple" id="my-select" name="{this.props.multiselect}">
                    <option value={this.props.one}>{this.props.one}</option>
                    <option value={this.props.two}>{this.props.two}</option>
                    <option value={this.props.three}>{this.props.three}</option>
                    <option value={this.props.four}>{this.props.four}</option>
                </select>
            </div>
        )
    }
}
export default Multiselect;
