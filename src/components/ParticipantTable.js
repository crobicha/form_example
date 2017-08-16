import React from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
//import { withStyles, createStyleSheet } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';

import {STATUS_NOT_REVIEWED} from '../actions/const';
import {STATUS_REJECTED} from '../actions/const';
import {STATUS_ACCEPTED} from '../actions/const';


import ApprovalMenu from './ApprovalMenu';


//const sty{
//  paper: {
//    width: '100%',
//    marginTop: theme.spacing.unit * 3,
//    overflowX: 'auto',
//  },
 const bgRed = {
      backgroundColor: 'red'
  };
 const bgYellow = {
      backgroundColor: 'yellow'
  };
  
  const bgGreen = {
      backgroundColor: 'green'
  };
  



class ParticipantTable extends React.Component {
    
    getStyle(status) {

//	console.log("status");
//	console.log(status);

	if(status == null || status == STATUS_REJECTED) {
	    return bgRed;
	}
	else if(status == STATUS_ACCEPTED) {
	    return bgGreen;
	}
	else{
	    return bgYellow;
	}
    }

    getTableBody() {
	const pr = this.props.pr.participants;

	if(pr == null || pr.size == 0) {
//	    console.log("No data");
	    return(<span>No data</span>);
	}
	else {	    
//	    console.log("participants3");
//	    console.log(pr);
	
	// style t
	    return(
		<Table>
		    <TableHead>
		      <TableRow>
			<TableCell>Name</TableCell>
			<TableCell>Age</TableCell>
			<TableCell>Sibling?</TableCell>
			<TableCell>Exposure</TableCell>
			<TableCell>Mutations</TableCell>
			<TableCell>Review Status</TableCell>
		      </TableRow>
		    </TableHead>

		    <TableBody>
			{pr.map((n) => 	
			    <TableRow key={n.id}
			    style={this.getStyle(n.status)}>
				<TableCell>
				    {n.name}
				</TableCell>
				<TableCell numeric>
				    {n.age}
				</TableCell>
				<TableCell>
				    {(n.sibling?"Yes":"No")}
				</TableCell>
				<TableCell>
				    {n.exposure}
				</TableCell>
				<TableCell>
				    {n.mutation}
				</TableCell>
				<TableCell>
				    <ApprovalMenu data={n}/>
				</TableCell>
			  </TableRow>
			)}
		    </TableBody>
		</Table>
	    );
	}
    }
    
    getStatus(status) {
//	console.log("status");
//	console.log(status);
	
	return <ApprovalMenu status={status}/>
    }

    render() {
	const {participants} = this.props;
//	
//	console.log("participants2x");
//	console.log(this.props); 
	

	return (
	  <Paper className="paper">
	      {this.getTableBody()}
	  </Paper>
	);
    }
}

function mapStateToProps(state) {
//    console.log("PT mapStateToProps 2");
//    console.log(state);

    return { 
	pr:state.ParticipantReducer
    };
}

export default connect(mapStateToProps)(ParticipantTable);
