import React, { Component } from 'react';
import Input from './Component/Input';
import ClientName from './Component/ClientName';
import SelectAll from './Component/SelectAll';
import './App.css';

class NavBar extends React.Component {
    render() {

        return (
            <>
                <div class="topnav">
                    <div class="clientname">
                        <ClientName text="CxP Demo" />

                    </div>
                    <div class='Search_Box'>
                        <SelectAll /><Input text="text" name="Search..." />
                        
                    </div>
                   
                </div>

            </>
        )

    }
}
export default NavBar;