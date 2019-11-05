import React, { Component } from 'react';
import { MultiSelectComponent } from '@syncfusion/ej2-react-dropdowns';
class Multiselect2 extends React.Component {

    render() {
        return (
            <div align='center'>
                <p>{this.props.multiselect}</p>
                <MultiSelectComponent id="defaultelement" dataSource={this.props.dataSource}  mode="Default" placeholder={this.props.lable} />
            </div>
        );
    }
}
export default Multiselect2;
