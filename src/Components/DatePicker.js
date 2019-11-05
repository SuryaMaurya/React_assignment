import React, { Component } from 'react';
class DatePicker extends React.Component {

    render() {
        return (
            <div align='center'>
                <br /><p>{this.props.card}</p>
                <input type="date" />
            </div>
        )
    }
}
export default DatePicker;
