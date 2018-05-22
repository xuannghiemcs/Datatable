import React, { Component } from 'react';
import './CherryPick.css';

import logo from './../images.png';
import logoyellow from './../yellow.png';

import generateSearchedData from './generateSearchedData';
import generateRowData from './generateRowData';
import handleCSVButtonClicks from './handleCSVButtonClicks';

import DeleteMenu from './DeleteMenu';
import SelectMenuBar from './SelectMenuBar';
import Pag from './Pag';
import IndColSearchBar from './IndColSearchBar';
import SearchBars from './SearchBars';

export default class CherryPickTable extends Component {

  constructor(props)
  {
    super(props);

    // save the users in the state
    this.state = {
      trueSearchData: 0,
      savedSearchData: undefined,
      savedData: [],
      tabledata: [],
      tablekey:[],
      tablesortDirection:[{dir: 'asc'},
      {dir: 'asc'}, {dir: 'asc'},
      {dir: 'asc'}, {dir: 'asc'}],
      NumSearchBars: 0,
      NumAllSearchBars: [1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0,1.0],
      SearchBarValues: [{name: 1},{name: 2},{name: 3},
        {name: 4},{name: 5},{name: 6},{name: 7},
        {name: 8},{name: 9},{name: 10},{name: 11},
        {name: 12},{name: 13},{name: 14},{name: 15}],
        SearchAllBarValues1: [
          {'value':['','','','','','','','','','','','','','','']},
          {'value':['','','','','','','','','','','','','','','']},
          {'value':['','','','','','','','','','','','','','','']},
          {'value':['','','','','','','','','','','','','','','']},
          {'value':['','','','','','','','','','','','','','','']},
          {'value':['','','','','','','','','','','','','','','']},
          {'value':['','','','','','','','','','','','','','','']},
          {'value':['','','','','','','','','','','','','','','']},
          {'value':['','','','','','','','','','','','','','','']},
          {'value':['','','','','','','','','','','','','','','']},
          {'value':['','','','','','','','','','','','','','','']},
          {'value':['','','','','','','','','','','','','','','']},
          {'value':['','','','','','','','','','','','','','','']},
          {'value':['','','','','','','','','','','','','','','']},
          {'value':['','','','','','','','','','','','','','','']}],
          headerValueClicks: -1,
          revealDeleteModal: 0,
          revealDeleteSearchAllModal: 0,
          cherryNavMenu: 'searchall',
          cherryPagNavMenu: 'incr',
          TurnHighlightOnOff: 'incr',
          currentCherrySearchMenu: 0,
          currentPage: 0,
          pageDivide: 10.0,
          totalpagSection: undefined,
          currPagRange: 0,
          currLength: undefined,
          pagPageDivide: 5.0,
          highlight:undefined,
          currhighlight: undefined,
          currentSearchAllHighlight: undefined,
        };


        this.state.tabledata = this.props.tabledata;
        var highlightLength = Math.ceil(
          this.state.tabledata.length/this.state.pageDivide);

          this.state.highlight = new Array(highlightLength);

          this.handleCherryMenu = this.handleCherryMenu.bind(this);
          this.handleCherryPagMenu = this.handleCherryPagMenu.bind(this);
          this.handleHeaderClicks = this.handleHeaderClicks.bind(this);
          this.handleCherryClicks = this.handleCherryClicks.bind(this);
          this.handleCherrySearchClicks = this.handleCherrySearchClicks.bind(this);
          this.handleCherryPagClicks = this.handleCherryPagClicks.bind(this);
          this.handleCherryPagNavClicks = this.handleCherryPagNavClicks.bind(this);


          this.handleCherryPagArrowClicks = this.handleCherryPagArrowClicks.bind(this);

          this.handleCherrySearch = this.handleCherrySearch.bind(this);
          this.handleMenuClicks = this.handleMenuClicks.bind(this);
          this.handleSearchAllHighlightClicks =
          this.handleSearchAllHighlightClicks.bind(this);
          this.handleDeleteSearchAllHighlightClicks =
          this.handleDeleteSearchAllHighlightClicks.bind(this);
          this.handleSearchBarChanges = this.handleSearchBarChanges.bind(this);
          this.handleSearchAllBarChanges = this.handleSearchAllBarChanges.bind(this);
          this.handlePaginationButtons = this.handlePaginationButtons.bind(this);
          this.handeleDeleteButtonClicks = this.handeleDeleteButtonClicks.bind(this);

          this.drag = this.drag.bind(this);
          this.dragdr = this.dragdr.bind(this);
          this.allowDrop = this.allowDrop.bind(this);

          this.handlePagPageSelect = this.handlePagPageSelect.bind(this);
          this.handleTurnHighlightOnOffClicks =
          this.handleTurnHighlightOnOffClicks.bind(this);

        }

dragdr(ev){

  ev.preventDefault();
var data;


try {
  data = JSON.parse(ev.dataTransfer.getData('text'));
} catch (e) {
  // If the text data isn't parsable we'll just ignore it.
  return;
}

// Do something with the data
console.log(data);

}

allowDrop(ev) {
    ev.preventDefault();
}

        drag(ev) {
          var data = {
    name: 'foobar',
    age: 15
  };
           ev.dataTransfer.setData('text', JSON.stringify(data));
          console.log("hello", ev);
        }

        handlePagPageSelect(e){

          this.setState({pagPageDivide: e});
        }

        handleTurnHighlightOnOffClicks(){
          if(this.state.cherryPagNavMenu == 'showhighlight'){

            this.setState({cherryPagNavMenu: 'incr'});
          }else{
            this.setState({cherryPagNavMenu: 'showhighlight'});

          }

        }

      handleDeleteSearchAllHighlightClicks(num){
        if(num == 1){
          if(this.state.NumAllSearchBars[
            this.state.currentCherrySearchMenu] - 1 >= 1){
              var lengthSearchBar =
              this.state.NumAllSearchBars[
                this.state.currentCherrySearchMenu]
                - (this.state.currentSearchAllHighlight + 1);

                for(var i = 0; i < lengthSearchBar; i++){
                  this.state.SearchAllBarValues1[
                    this.state.currentCherrySearchMenu]['value']
                    [this.state.currentSearchAllHighlight + i] =
                this.state.SearchAllBarValues1[this.state.currentCherrySearchMenu]
                ['value'][this.state.currentSearchAllHighlight + i + 1];
              this.state.SearchAllBarValues1[
                this.state.currentCherrySearchMenu]['value']
                [this.state.currentSearchAllHighlight + i + 1] = '';
            }
            this.state.NumAllSearchBars[this.state.currentCherrySearchMenu]--;
          } else {
            this.state.SearchAllBarValues1[
              this.state.currentCherrySearchMenu]['value']
              [this.state.currentSearchAllHighlight] = '';
          }
        }
        this.setState({revealDeleteSearchAllModal: 0});
      }

      handleSearchAllHighlightClicks(num){
        if(this.state.cherryNavMenu === 'delete'){
          this.setState({currentSearchAllHighlight: num,
            revealDeleteSearchAllModal: 1});
          } else {
            this.setState({currentSearchAllHighlight: undefined,
              revealDeleteSearchAllModal: 0});
            }
          }


          handleCherrySearchClicks(index, num){
            var temp = this.state.NumAllSearchBars[index];

            if(this.state.cherryNavMenu === 'modify'
            || this.state.cherryNavMenu === 'searchall'
            || this.state.cherryNavMenu === 'save'){
              if(temp + 1 < 11){
                this.state.NumAllSearchBars[index] += 1.0;
                this.setState({});
              } else {
                this.setState({});
              }
            }else if(this.state.cherryNavMenu === 'delete'
            && temp - 1 >= 1.0){
              this.state.NumAllSearchBars[index] -= 1.0;
              this.setState({});
            }else{
              this.setState({});
            }

          }


          handleCherryPagMenu(e){

            this.setState({ cherryPagNavMenu: e });

          }

          handleCherryPagArrowClicks(num){
            if(num == 1){
              if(this.state.pagPageDivide + 1 > 0
                && this.state.totalpagSection > this.state.pagPageDivide + 1){
                  this.setState({ pagPageDivide: this.state.pagPageDivide + 1 });

                }
              } else if(num == -1){
                if(this.state.pagPageDivide - 1 > 0
                  && this.state.totalpagSection > this.state.pagPageDivide - 1){
                    this.setState({ pagPageDivide: this.state.pagPageDivide - 1});
                  }
                }

              }

              handleCherryPagNavClicks(){

                if(this.state.cherryPagNavMenu == 'highlight'){
                  this.setState({ cherryPagNavMenu: 'incr'});

                }else{
                  this.setState({ cherryPagNavMenu: 'highlight'});

                }

      }

      handleCherryPagClicks(num){
            var curr = this.state.currentPage + num;
            console.log("curr", curr);
            if(curr >= 0 && curr < this.state.totalpagSection){
              this.setState({currentPage:curr});
            }
          }

          handlePaginationButtons(num){
            if(this.state.cherryPagNavMenu == 'highlight'){
              if(this.state.highlight[num] == 0
                && this.state.currhighlight == num) {
                this.state.highlight[num] = 1;
                this.state.currhighlight = undefined;

              } else {
                if(this.state.currhighlight == undefined){
                  this.state.currhighlight = num;
                } else if(this.state.highlight[this.state.currhighlight] == 0){
                  this.state.highlight[this.state.currhighlight] = undefined;
                  this.state.currhighlight = num;
                }else if(this.state.highlight[this.state.currhighlight] == 1){

                  this.state.currhighlight = num;
                }
                this.state.highlight[num] = 0;


              }
            }

            this.setState({currentPage:num});

          }


          handleHeaderClicks(num){
            var sortDirectionLength = this.state.tablesortDirection.length;
            var test = this.state.tablekey;
            var tableIndex = this.state.savedSearchData;
            var tabledataval = this.state.tabledata;

            if(this.state.NumSearchBars > 0){

              if (this.state.tablesortDirection[num]["dir"] == 'asc') {
                tableIndex.sort(function(a, b) {

                  var nameA = tabledataval[a][test[num]]; // ignore upper and lowercase
                  var nameB = tabledataval[b][test[num]]; // ignore upper and lowercase
                  if (nameA < nameB) {

                    return -1;
                  }
                  if (nameA > nameB) {

                    return 1;
                  }

                  // names must be equal
                  return 0;
                });
                this.state.tablesortDirection[num]["dir"] = 'desc';
              } else {
                tableIndex.sort(function(a, b) {

                  var nameA = tabledataval[a][test[num]]; // ignore upper and lowercase
                  var nameB = tabledataval[b][test[num]]; // ignore upper and lowercase
                  if (nameA > nameB) {

                    return -1;
                  }
                  if (nameA < nameB) {

                    return 1;
                  }

                  // names must be equal
                  return 0;
                });
                this.state.tablesortDirection[num]["dir"] = 'asc';
              }

              this.state.savedSearchData = tableIndex;

            } else {

              if (this.state.tablesortDirection[num]["dir"] == 'asc') {
                tabledataval.sort(function(a, b) {

                  var nameA = a[test[num]]; // ignore upper and lowercase
                  var nameB = b[test[num]]; // ignore upper and lowercase
                  if (nameA < nameB) {

                    return -1;
                  }
                  if (nameA > nameB) {

                    return 1;
                  }

                  // names must be equal
                  return 0;
                });
                this.state.tablesortDirection[num]["dir"] = 'desc';
              } else {
                tabledataval.sort(function(a, b) {

                  var nameA = a[test[num]]; // ignore upper and lowercase
                  var nameB = b[test[num]]; // ignore upper and lowercase
                  if (nameA > nameB) {

                    return -1;
                  }
                  if (nameA < nameB) {

                    return 1;
                  }

                  // names must be equal
                  return 0;
                });
                this.state.tablesortDirection[num]["dir"] = 'asc';
              }

              this.state.tabledata = tabledataval;

            }

            this.setState({headerValueClicks:num});

          }


          handleCherryClicks(e){
            if(this.state.cherryNavMenu === 'modify'
            || this.state.cherryNavMenu === 'searchall'){
              if(this.state.NumSearchBars + 1 < 11){
                this.setState({ NumSearchBars: this.state.NumSearchBars + 1 });
              } else {
                this.setState({});
              }
            }else if(this.state.cherryNavMenu === 'delete'
            && this.state.NumSearchBars - 1 >= 0){

              if(this.state.revealDeleteModal == 2){
                this.setState({revealDeleteModal: 1});
              } else {
                this.setState({revealDeleteModal: 2});
              }

            } else if(this.state.cherryNavMenu === 'save'){
              handleCSVButtonClicks(
                this.state.SearchBarValues[
                  this.state.currentCherrySearchMenu]["name"],
                this.state.savedData, this.state.tabledata,
                this.state.tablekey);
              }else{
                this.setState({});
              }
            }

            handleCherryMenu(e){
              this.setState({ cherryNavMenu: e });
            }

            handleSearchBarChanges(num, e){
              this.state.SearchBarValues[num]["name"] = e.target.value;

              this.setState({currentCherrySearchMenu: num, trueSearchData: 1});

            }

            handleSearchAllBarChanges(num, e){

              var highLength = this.state.highlight.length;
              this.state.currhighlight = undefined;

              for (var i = 0; i < highLength; i++){
                this.state.highlight[i] = undefined;
              }

              this.state.SearchAllBarValues1[
                this.state.currentCherrySearchMenu]["value"][num] = e.target.value;
                this.setState({currentPage:0, trueSearchData: 1});

              }

              handleCherrySearch(num, e){

                var highLength = this.state.highlight.length;
                this.state.currhighlight = undefined;
                for (var i = 0; i < highLength; i++){
                  this.state.highlight[i] = undefined;
                }

                var val = e.target.value;
                this.state.SearchBarValues[
                  this.state.currentCherrySearchMenu][
                    this.state.tablekey[num]] = val;

                if(val != ''){
                  this.state.SearchBarValues[
                    this.state.currentCherrySearchMenu]["active"] = 1;
                } else {

                  var tablekey = this.state.tablekey;
                  var tablekeylength = this.state.tablekey.length;
                  var activeCond = 0;

                  for(var i = 0; i < tablekeylength; i++){
                    if(this.state.SearchBarValues[
                      this.state.currentCherrySearchMenu]
                      [this.state.tablekey[i]]){

                        if(this.state.SearchBarValues[
                          this.state.currentCherrySearchMenu]
                          [this.state.tablekey[i]] !== ''){
                            activeCond = 1;
                            break;
                          }
                        }

                      }
                      this.state.SearchBarValues[
                        this.state.currentCherrySearchMenu]["active"] =
                        activeCond;
                    }


                    this.setState({currentPage: 0, trueSearchData: 1});



                  }


                  handleMenuClicks(num){
                    if(this.state.cherryNavMenu === 'delete'
                    && this.state.NumSearchBars - 1 >= 0){
                      if(this.state.revealDeleteModal == 2){
                        if(this.state.currentCherrySearchMenu == num){
                          this.setState({revealDeleteModal: 1,
                            currentCherrySearchMenu: num, trueSearchData: 1});
                        }else{
                          this.setState({revealDeleteModal: 0,
                            currentCherrySearchMenu: num});
                        }

                      } else {
                        this.setState({revealDeleteModal: 2,
                          currentCherrySearchMenu: num, trueSearchData: 1});
                      }

                    } else {

                      this.setState({revealDeleteModal: 0,
                        currentCherrySearchMenu: num, trueSearchData: 1 });
                    }


                  }

                  handeleDeleteButtonClicks(num, numButton){
                    if(num == 0){
                      this.setState({revealDeleteModal:0});
                    } else {
                      if(this.state.NumSearchBars - 1 >= 0){

                        var lengthSearchBar =
                        this.state.NumSearchBars -
                        (this.state.currentCherrySearchMenu + 1);

                        for(var i = 0; i < lengthSearchBar; i++){
                          if(this.state.currentCherrySearchMenu + i + 1 < 11){
                            this.state.SearchBarValues[
                              this.state.currentCherrySearchMenu + i] =
                              this.state.SearchBarValues[
                                this.state.currentCherrySearchMenu + i + 1];

                            this.state.SearchBarValues[
                              this.state.currentCherrySearchMenu + i + 1] =
                              {name: this.state.SearchBarValues[
                                this.state.currentCherrySearchMenu + i]["name"] + 1};

                            this.state.SearchAllBarValues1[
                              this.state.currentCherrySearchMenu + i] =
                              this.state.SearchAllBarValues1[
                                this.state.currentCherrySearchMenu + i + 1];
                            this.state.SearchAllBarValues1[
                              this.state.currentCherrySearchMenu + i + 1] =
                              {'value':['','','','','','','','','','','',
                            '','','','']};

                            this.state.NumAllSearchBars[
                              this.state.currentCherrySearchMenu + i] =
                              this.state.NumAllSearchBars[this.state.currentCherrySearchMenu + i + 1];
                            this.state.NumAllSearchBars[
                              this.state.currentCherrySearchMenu + i + 1] = 1.0;
                          }
                        }
                        this.setState({ NumSearchBars:
                          this.state.NumSearchBars - 1, revealDeleteModal:0 });
                      } else {
                        this.setState({ revealDeleteModal:0 });
                      }
                    }
                  }

                  render() {
                    this.state.tablekey = this.props.tablekey;

                    var lengthtabledata = this.state.tabledata.length;
                    var lengthtablekey = this.state.tablekey.length;

                    var col = [];
                    for (var i = 0; i < lengthtablekey; i++){
                      col.push(<th onClick =
                        {this.handleHeaderClicks.bind(this, i)}>
                        {this.state.tablekey[i]}</th>);
                    }

                    if(this.state.NumSearchBars > 0){
                      var alertMod;
                      if(this.state.revealDeleteModal == 1){
                        alertMod = (
                          <DeleteMenu  handeleDeleteButtonClicks =
                          {this.handeleDeleteButtonClicks}  />
                        );
                      }
                    }


                    var row = [];
                    if(this.state.NumSearchBars > 0){

                      var searchAllBars = [];

                      searchAllBars.push(

                        <span class="glyphicon glyphicon-leaf green"
                        aria-hidden="true" onClick =
                        {this.handleCherrySearchClicks.bind(this,
                          this.state.currentCherrySearchMenu)}>{" "}</span>
                        );


                        for(var i = 0; i < this.state.NumAllSearchBars[
                          this.state.currentCherrySearchMenu]; i++){

                          if(this.state.cherryNavMenu == 'searchall'
                          || this.state.cherryNavMenu === 'save'){
                            searchAllBars.push( <input type="search"
                            name="search" size="10" value =
                            {this.state.SearchAllBarValues1[
                              this.state.currentCherrySearchMenu]["value"][i]}
                            onChange = {this.handleSearchAllBarChanges.bind(this, i)}
                            onClick = {this.handleSearchAllHighlightClicks.bind(this, i)}
                            ></input>);
                          } else if(this.state.cherryNavMenu == 'modify'){
                            searchAllBars.push( <input type="text"
                            name="text" size="10" value =
                            {this.state.SearchAllBarValues1[
                              this.state.currentCherrySearchMenu]["value"][i]}
                            readonly="readonly"
                            onChange = {this.handleSearchAllBarChanges.bind(this, i)}
                            onClick = {this.handleSearchAllHighlightClicks.bind(this, i)}
                            ></input>);
                          } else if(this.state.cherryNavMenu == 'delete'){
                            if(this.state.currentSearchAllHighlight == i){
                              searchAllBars.push( <input type="text"
                              className = "cherryBarBrown"
                              name="text" size="10" value =
                              {this.state.SearchAllBarValues1[
                                this.state.currentCherrySearchMenu]["value"][i]}
                              readonly="readonly" onDragOver = {this.drag}
                              onChange = {this.handleSearchAllBarChanges.bind(this, i)}
                              onClick = {this.handleSearchAllHighlightClicks.bind(this, i)}
                              ></input>);
                              var alertMod;
                              if(this.state.revealDeleteSearchAllModal == 1){
                                alertMod = (
                                  <DeleteMenu  handeleDeleteButtonClicks =
                                  {this.handleDeleteSearchAllHighlightClicks}/>
                                );
                              }
                            } else {
                              searchAllBars.push( <input type="text"
                              name="text" size="10" value =
                              {this.state.SearchAllBarValues1[
                                this.state.currentCherrySearchMenu]["value"][i]}
                              readonly="readonly"
                              onChange =
                              {this.handleSearchAllBarChanges.bind(this, i)}
                              onClick =
                              {this.handleSearchAllHighlightClicks.bind(this, i)}
                              ></input>);
                            }
                          }
                        }

                        if(this.state.trueSearchData == 1
                          || this.state.savedSearchData == undefined){

                          var indexRowData = generateSearchedData(this.state.tabledata,
                            this.state.tablekey,
                            this.state.SearchAllBarValues1[this.state.currentCherrySearchMenu],
                            this.state.SearchBarValues[this.state.currentCherrySearchMenu]);
                            this.state.trueSearchData = 0;
                            this.state.savedSearchData = indexRowData;
                          } else {
                            var indexRowData = this.state.savedSearchData;
                          }

                          var indexRowDataLength = indexRowData.length;
                          this.state.savedData = indexRowData;

                          this.state.totalpagSection =
                          Math.ceil(indexRowData.length/this.state.pageDivide);

                          var temprowdata = [];

                          for(var i = this.state.currentPage*10;
                            i < (this.state.currentPage + 1)*10; i++){
                              if(indexRowData[i] || i === 0){
                                temprowdata.push(indexRowData[i]);
                              }
                            }
                            row = generateRowData(this.state.tabledata,
                              this.state.tablekey,
                              temprowdata, this.drag);
                            } else {

                              this.state.savedData = [];

                              this.state.totalpagSection =
                              Math.ceil(lengthtabledata/this.state.pageDivide);

                              var temprowdata = [];

                              for(var i = this.state.currentPage*10;
                                i < (this.state.currentPage + 1)*10; i++){
                                  if(this.state.tabledata[i] || i == 0){
                                    temprowdata.push(this.state.tabledata[i]);
                                  }
                                }

                                var rowdatalength = temprowdata.length;
                                for (var i = 0; i < rowdatalength; i++){
                                  var temp = [];
                                  for (var j = 0; j < lengthtablekey; j++){
                                    temp.push(<td>{temprowdata[i][this.state.tablekey[j]]}</td>);
                                  }
                                  row.push(<tr className="tr-hover-class" draggable="true" onDragStart = {this.drag}>{temp}</tr>);
                                }
                              }

                              if(this.state.cherryPagNavMenu == 'incr'){

                                var pagCherry = (
                                  <img src={logo} alt="cherry"
                                  width="30" height="30" onClick =
                                  {this.handleCherryPagNavClicks}/>
                                );
                              }else{

                                var pagCherry = (                                  <img src={logoyellow} alt="cherry"
                                width="30" height="30" onClick =
                                {this.handleCherryPagNavClicks}/>);
                              }


                              return (
                                <div className="Cherry">
                                <br/>
                                {alertMod}
                                <img src={logo} class="green"  alt="cherry"
                                width="30" height="30" onClick =
                                {this.handleCherryClicks} id = 'cherryID'
                                onDragOver = {this.drag}
                                />
                                <SelectMenuBar  handleCherryMenu = {(event) =>
                                  this.handleCherryMenu(event.target.value)}
                                  menuVal = {[{"value":"searchall", "inner": "Search"},
                                  {"value":"modify", "inner": "Label"},
                                  {"value":"delete", "inner": "Delete"},
                                  {"value":"save", "inner": "Save"}]}/>
                                  <SearchBars
                                  NumSearchBars = {this.state.NumSearchBars}
                                  cherryNavMenu = {this.state.cherryNavMenu}
                                  currentCherrySearchMenu = {this.state.currentCherrySearchMenu}
                                  SearchBarValues = {this.state.SearchBarValues}
                                  handleSearchBarChanges = {this.handleSearchBarChanges}
                                  handleMenuClicks = {this.handleMenuClicks}
                                  drag = {(event) => {this.drag(event)}} dragdr = {(event) => {this.dragdr(event)}}
allowDrop = {(event) => {this.allowDrop(event)}}

                                  />
                                  <div><pre>{"                 "}{searchAllBars}</pre></div>
                                  <table >
                                  <tr>{col}</tr>
                                  <IndColSearchBar
                                  lengthtablekey = {lengthtablekey}
                                  NumSearchBars = {this.state.NumSearchBars}
                                  revealDeleteModal = {this.state.revealDeleteModal}
                                  handeleDeleteButtonClicks = {this.handeleDeleteButtonClicks}
                                  SearchBarValues = {this.state.SearchBarValues}
                                  currentCherrySearchMenu = {this.state.currentCherrySearchMenu}
                                  tablekey = {this.state.tablekey}
                                  handleCherrySearch = {this.handleCherrySearch}
                                  />
                                  {row}
                                  </table>
                                  <a>{'<<'}</a>
                                  <a onClick = {this.handleCherryPagArrowClicks.bind(this, -1)}>{'<<'}</a>
                                  <SelectMenuBar  handleCherryMenu = {(event) =>
                                    this.handlePagPageSelect(event.target.value)}
                                    menuVal = {[{"value":"5", "inner": "5"},
                                    {"value":"11", "inner": "11"},
                                    {"value":"15", "inner": "15"},
                                    {"value":"21", "inner": "21"}]}/>
                                    {pagCherry}
                                    <a onClick = {this.handleTurnHighlightOnOffClicks.bind(this, 1)}>{'.....'}</a>
                                    <a onClick = {this.handleCherryPagArrowClicks.bind(this, 1)}>{'>>'}</a>
                                    <a>{'>>'}</a>
                                    <span>{"  "}</span>
                           <Pag totalpagSection = {this.state.totalpagSection}
                                    pagPageDivide = {this.state.pagPageDivide}
                                    cherryPagNavMenu = {this.state.cherryPagNavMenu}
                                    currentPage = {this.state.currentPage}
                                    handlePaginationButtons = {this.handlePaginationButtons}
                                    highlight = {this.state.highlight}
                                    handleCherryPagClicks = {this.handleCherryPagClicks}/>
                                    <br/>
                                    </div>
                                  );
                                }
                              }
