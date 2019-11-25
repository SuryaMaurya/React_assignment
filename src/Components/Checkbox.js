import React, { Component } from 'react';
import Checkbox from '@material-ui/core/Checkbox';
import FormGroup from '@material-ui/core/FormGroup';

// import { makeStyles } from '@material-ui/core/styles';

class Checkbox extends React.Component {


    render() {
        return ( 
            
            <FormGroup row>
      <FormControlLabel
        control={
          <Checkbox checked={state.checkedA} onChange={handleChange('checkedA')} value="checkedA" />
        }
        label="Secondary"
      />
            )
    }
}
export default Checkbox;
