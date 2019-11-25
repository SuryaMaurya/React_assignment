import React, { Component } from 'react';
import DatePicker from './Component/Datepicker';
import { Container } from '@material-ui/core';
import Dropdown from './Component/Dropdown';
import SelectDate from './Component/SelectDate';
import SelectBox from './Component/SelectBox';
import Multiselect from './Component/Multiselect';


import './App.css';

class LeftPic extends React.Component {
  constructor() {
    super();
    var today = new Date(),
      date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    this.state = {
      date: date, data: ['Surya', 'Akshay', 'Niket', 'Rahim'], text:"Select Agent Name", name:"Agent"
    };
  }
  render() {

    return (
      <>
        <div id="leftbox">
          <div id="date">
            <SelectDate text='Start Date' start="2019-05-24" />
            <DatePicker text='Start Date' start="2019-05-24" /> <br /><br />
            <DatePicker text='End Date' start={this.state.date} />
          </div>
          <div>
            <Dropdown value={this.state.data} />
            <SelectBox lable={this.state.text} value={this.state.data} user={this.state.name} />
            <Multiselect />
          </div>
          
        </div>
      </>
    )
  }
}
export default LeftPic;