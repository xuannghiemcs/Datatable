import React, { Component } from 'react';

export default class SelectMenuBar extends Component {
  constructor(props)
  {
    super(props);

    // save the users in the state
    this.state = {

    };
  }

  render() {
    var menuVal = this.props.menuVal;
    var menuValLength = menuVal.length;
    var optionVal = [];
    for (var i = 0; i < menuValLength; i++){
      optionVal.push(<option
        value={menuVal[i]["value"]}>{menuVal[i]["inner"]}</option>);
      }
      return(
        <select onChange = {this.props.handleCherryMenu}>
        {optionVal}
        </select>
      );
    }
  }
