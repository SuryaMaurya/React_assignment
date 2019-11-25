import React, { Component } from 'react';
import TextField from '@material-ui/core/TextField';
// import { makeStyles } from '@material-ui/core/styles';

class DatePicker extends React.Component {


    render() {
        return ( 
            
                < TextField
                    id = "date"
                    label = {this.props.text}
                    type = "date"
                    defaultValue = {this.props.start}
                    InputLabelProps = {{
                    shrink: true,
                     }}
                />
            )
    }
}
export default DatePicker;
