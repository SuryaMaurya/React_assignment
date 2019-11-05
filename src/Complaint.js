import React, { Component } from 'react';
import Input from './Components/Input';
import Dropdown from './Components/Dropdown';
// import Multiselect from './Components/Multiselect';
import DatePicker from './Components/DatePicker';
import Multiselect2 from './Components/Multiselect2';

class Complaint extends React.Component{
    constructor(props) {  super(props);  this.state = { data:['adani','SS','Paytm','Mopng'], message:'Select Complaint_id' , name:'complaint_id' };}
  render() {
    return(
      <>
        <Input text="text" name="complaint_source" header="This is Complaint" /><br/>
        <Dropdown dropdown='complaints_source' one='adani' two='shopper stop' three='paytm' four='mopng' /><br/>
        {/* <Multiselect multiselect ='complaint_id' one='123' two='566' three='685' four='988' /> */}
        <DatePicker card ='Select Date of Complaint' />
        <Multiselect2 multiselect={this.state.name} dataSource={this.state.data} lable={this.state.message} />

      </>
    )
  }
}
export default Complaint;
