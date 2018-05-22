import React, { Component } from 'react';

export default class IndColSearchBar extends Component {

  constructor(props)
  {
    super(props);

    // save the users in the state
    this.state = {

    };
  }

  render() {
    var searchCol = [];
    if(this.props.NumSearchBars > 0){
      for (var i = 0; i < this.props.lengthtablekey; i++){
        if(this.props.SearchBarValues[
          this.props.currentCherrySearchMenu]
          [this.props.tablekey[i]]){
            var val = this.props.SearchBarValues[
              this.props.currentCherrySearchMenu]
              [this.props.tablekey[i]];
            }else {
              var val = '';
            }
            searchCol.push(<th><input type="search"
            name="search" size="6" value = {val}
            onChange = {this.props.handleCherrySearch.bind(this,i)}
            ></input></th>);
          }
        }
        return(<tr>{searchCol}</tr>);
      }
    }
