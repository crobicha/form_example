/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */


import React, { Component } from 'react';
import {connect} from 'react-redux';

import Button from 'material-ui/Button';
import Menu, { MenuItem } from 'material-ui/Menu';
import {TableCell} from 'material-ui/Table';
//import { withStyles, createStyleSheet } from 'material-ui/styles';

import {STATUS_NOT_REVIEWED} from '../actions/const';
import {STATUS_REJECTED} from '../actions/const';
import {STATUS_ACCEPTED} from '../actions/const';

import EditParticipant from '../actions/EditParticipant';



//const styleSheet = createStyleSheet(theme => ({
//  paper: {
//    width: '100%',
//    marginTop: theme.spacing.unit * 3,
//    overflowX: 'auto',
//  },
//  bgRed: {
//      background: 'red'
//  },
//  bgYellow: {
//      background: 'yellow'
//  },
//  bgGreen: {
//      background: 'green'
//  }
//}));


class ApprovalMenu extends Component {
    constructor() {
	super();
	this.state = {
	    anchorEl: undefined,
	    open: false,
	};
	
//	this.handleClick = ::this.handleClick();
//	this.handleRequestClose = ::this.handleRequestClose();
    }
  
  handleClick (event) {
    this.setState({ open: true, anchorEl: event.currentTarget });
    
  };

  
  
  setStatusAccepted(e) {
      this.handleNewStatus(e, STATUS_ACCEPTED);
  }
  
  setStatusRejected(e) {
      this.handleNewStatus(e, STATUS_REJECTED);
  }
  
  setStatusNotReviewed(e) {
      this.handleNewStatus(e, STATUS_NOT_REVIEWED);
  }  
  
  handleNewStatus(event, newStatus) {
    const data = this.props.data
    const {dispatch} = this.props;
    
//    console.log("handleNewStatus " + newStatus);
    data.status = newStatus;
//    console.log(data);
   
    dispatch(EditParticipant(data));
    
    // Close menu
    this.setState({ open: false });
  };
  
  getStatus() {
      const data = this.props.data;
//      console.log("data");
//      console.log(data);
      
      if(data == null) {
	  return "Status unknown";
      }
      
      return data.status;
        
  }
  
  getClass() {
      const data = this.props.data;
//      console.log("data");
//      console.log(data);
      
      if(data == null || data.status == STATUS_REJECTED) {
	  return "bgRed";
      }
      else if(data.status == STATUS_ACCEPTED) {
	  return "bgGreen";
      }
      else{
	  return "bgYellow";
      }
  }
  

  render() {
      
    return (

	<div>
        <Button
          aria-owns={this.state.open ? 'simple-menu' : null}
          aria-haspopup="true"
          onClick={this.handleClick.bind(this)}
        >
	    {this.getStatus()}
        </Button>
        <Menu
          id="simple-menu"
          anchorEl={this.state.anchorEl}
          open={this.state.open}
          onRequestClose={this.handleRequestClose}
        >
          <MenuItem onClick={this.setStatusNotReviewed.bind(this)}>{STATUS_NOT_REVIEWED}</MenuItem>
          <MenuItem onClick={this.setStatusRejected.bind(this)}>{STATUS_REJECTED}</MenuItem>
          <MenuItem onClick={this.setStatusAccepted.bind(this)}>{STATUS_ACCEPTED}</MenuItem>
        </Menu>
      </div>
      
    );
  }
}

export default connect() (ApprovalMenu);