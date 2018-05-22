import React, { Component } from 'react';
import logo from './images.png';
import './App.css';

import { makeData} from "./Utils";

import CherryPickTable from './cherrytable/CherryPickTable';

let product = makeData();

class App extends Component {


  constructor(props)
  {
    super(props);



    // save the users in the state
    this.state = {
      patInfoKey: ['firstName', 'lastName', 'age', 'visits', 'progress'],
      patReportKey: ['PID', 'SSN', 'Name', 'Gender', 'Age'],
      patStayKey: ['RID', 'PID'],
      patAdmitKey: ['AID', 'PID', 'Insurance', 'Payment', 'Enter', 'Leave','Details'],

    };

  }

  render() {

    return (
      <div className="App">
      <header className="App-header">
      <h1 className="App-title">Cherry-Pick Datatable</h1>
      </header>

      <CherryPickTable tabledata = {product} tablekey = {this.state.patInfoKey}/>


      </div>
    );
  }
}

export default App;
