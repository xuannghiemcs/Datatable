import React, { Component } from 'react';


export default class SearchBars extends Component {
  constructor(props)
  {
    super(props);

    // save the users in the state
    this.state = {

    };
  }

  render() {

    var searchBars = [];
    for(var i = 0; i < this.props.NumSearchBars; i++){
      if(this.props.cherryNavMenu === 'modify'){

        if(this.props.currentCherrySearchMenu === i){
          searchBars.push( <input type="search"
          className = "cherryBarBrown"  name="search" onDragOver = {this.props.allowDrop} onDrop = {this.props.dragdr}
          size="4" placeholder = {this.props.SearchBarValues[i]["name"]}
          onChange = {this.props.handleSearchBarChanges.bind(this, i)}
          onClick = {this.props.handleMenuClicks.bind(this, i)}
          ></input>
        );
      } else {

        searchBars.push( <input type="text" name="text"
        size="4" value = {this.props.SearchBarValues[i]["name"]}
        readonly="readonly"
        onChange = {this.props.handleSearchBarChanges.bind(this, i)}
        onClick = {this.props.handleMenuClicks.bind(this, i)}
        ></input>
      );

    }

  } else if(this.props.cherryNavMenu === 'delete'){
    if(this.props.currentCherrySearchMenu === i){

      searchBars.push( <input type="search"
      className = "cherryBarGreen" name="search" onDragOver = {this.props.allowDrop} onDrop = {this.props.dragdr}
      size="4" value = {this.props.SearchBarValues[i]["name"]}
      onClick = {this.props.handleMenuClicks.bind(this, i)}
      ></input>);
    }else{
      searchBars.push( <input type="search"
      name="search" size="4" value =
      {this.props.SearchBarValues[i]["name"]}
      onClick = {this.props.handleMenuClicks.bind(this, i)}
      ></input>);

    }


  } else {
    if(this.props.currentCherrySearchMenu == i){
      searchBars.push( <input type="search"
      className = "cherryBarRed"  name="search" onDragOver = {this.props.allowDrop} onDrop = {this.props.dragdr}
      size="4" value = {this.props.SearchBarValues[i]["name"]}
      onClick = {this.props.handleMenuClicks.bind(this, i)}
      ></input>);
    } else {
      searchBars.push( <input type="search"  name="search" onDragOver = {this.props.allowDrop} onDrop = {this.props.dragdr}
      size="4" value = {this.props.SearchBarValues[i]["name"]}
      onClick = {this.props.handleMenuClicks.bind(this, i)}
      ></input>);

    }
  }

}

return(searchBars);

}
}
