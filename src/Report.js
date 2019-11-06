import React, { Component } from 'react';
import Input from './Components/Input';
import Dropdown from './Components/Dropdown';
// import Multiselect from './Components/Multiselect';
import DatePicker from './Components/DatePicker';
import Multiselect2 from './Components/Multiselect2';

class Report extends React.Component{
    state = { data: [1, 5, 95, 158], message: 'Select Report_id', name: 'Report_id' }; 

    render() {
        return (
            <>
                <Input text="password" name="report_password" header="This is Report" /><br />
                <Dropdown dropdown={this.state.dropdown} value={this.state.data} />
                {/* <Multiselect multiselect='Repot_id' one='1' two='5' three='6' four='9' /> */}
                <DatePicker card='Select Date of Report' />
                <Multiselect2 multiselect={this.state.name} dataSource={this.state.data} lable={this.state.message} />
            </>
        )
    }
}
export default Report;
