import React, { Component } from 'react';

export default class Pag extends Component {

  constructor(props)
  {
    super(props);

    // save the users in the state
    this.state = {

    };
  }

  render() {

    var pagButtons = [];
    if(this.props.cherryPagNavMenu == 'showhighlight'){
      var pagLength = this.props.highlight.length;
    } else {
      var pagLength = this.props.totalpagSection;

    }
    if(this.props.totalpagSection <= this.props.pagPageDivide){
      for(var i = 0; i < this.props.totalpagSection; i++){
        if(this.props.cherryPagNavMenu == 'showhighlight'){
          if(this.props.highlight[i] == i){
            pagButtons.push(<span className =
              "highlightpagination"><a class="active"
              href="#" onClick =
              {this.props.handlePaginationButtons.bind(this,
                i)}>{i+1}</a></span>);
              }
            }else{

              if(this.props.highlight[i] == i && this.props.cherryPagNavMenu == 'highlight'){
                pagButtons.push(<span className =
                  "highlightpagination"><a class="active"
                  href="#" onClick =
                  {this.props.handlePaginationButtons.bind(this, i)}>{i+1}</a></span>);
                } else {
                  if(this.props.currentPage == i){
                    pagButtons.push(<a class="active"
                    href="#" onClick =
                    {this.props.handlePaginationButtons.bind(this, i)}>{i+1}</a>);
                  } else {
                    pagButtons.push(<a href="#"
                    onClick =
                    {this.props.handlePaginationButtons.bind(this, i)}>{i+1}</a>);
                  }
                }
              }
            }
          } else {
            var diff = 0;
            var pagPageDivide = this.props.pagPageDivide - 1;
            var init = this.props.currentPage
            - Math.floor(pagPageDivide/2);

            var decimalAdd = (pagPageDivide/2.0 - Math.floor(pagPageDivide/2.0))*2.0;

            var final = this.props.currentPage
            + Math.floor(pagPageDivide/2) + decimalAdd;

            if(init < 0 ){
              diff = 0 - init;
              final += diff;
              init = 0;
            }
            if(final > this.props.totalpagSection){
              diff = final - (this.props.totalpagSection - 1);
              init -= diff;
              final = (this.props.totalpagSection - 1);
            }

            var lengthBar = (final + 1) - init;

            for(var i = 0; i < this.props.totalpagSection; i++){
              if(i == 0 || i == this.props.totalpagSection - 1
                || (i >= init && i <= final)){
                  if(i >= init && i <= final){
                    if((i-init + 1) % 11 == 0){
                      pagButtons.push(<br/>);
                    }
                  }
                  if(this.props.cherryPagNavMenu == 'showhighlight'){
                    if(this.props.highlight[i]){
                      pagButtons.push(<span className =
                        "highlightpagination"><a class="active"
                        href="#" onClick =
                        {this.props.handlePaginationButtons.bind(this, i)}>
                        {i+1}</a></span>);
                      }
                    }else{
                      if(this.props.highlight[i] && this.props.cherryPagNavMenu == 'highlight'){
                        pagButtons.push(<span
                          className = "highlightpagination">
                          <a class="active" href="#" onClick =
                          {this.props.handlePaginationButtons.bind(this, i)}>
                          {i+1}</a></span>);
                        } else {
                          if(this.props.currentPage == i){
                            pagButtons.push(<a class="active"
                            href="#" onClick =
                            {this.props.handlePaginationButtons.bind(this, i)}>
                            {i+1}</a>);
                          } else {
                            pagButtons.push(<a href="#"
                            onClick =
                            {this.props.handlePaginationButtons.bind(this, i)}>
                            {i+1}</a>);
                          }
                        }
                      }
                    } else if((i == 1 || i == this.props.totalpagSection - 2)) {
                      pagButtons.push("...");
                    }
                  }
                }
                return(
                  <div className = "pagination">
                  <span class="glyphicon glyphicon-leaf green"
                  aria-hidden="true" onClick =
                  {this.props.handleCherryPagClicks.bind(this, -1)}>{""}</span>
                  <span>{"   "}</span>
                  {pagButtons}
                  <span>{"   "}</span>
                  <span class="glyphicon glyphicon-leaf green"
                  aria-hidden="true" onClick =
                  {this.props.handleCherryPagClicks.bind(this, 1)}>{" "}</span>
                  </div>
                );
              }
            }
