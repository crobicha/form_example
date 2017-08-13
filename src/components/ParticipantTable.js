import React from 'react';
import {connect} from 'react-redux';

import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Table, { TableBody, TableCell, TableHead, TableRow } from 'material-ui/Table';
import Paper from 'material-ui/Paper';


const styleSheet = createStyleSheet(theme => ({
  paper: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
    overflowX: 'auto',
  },
}));



class ParticipantTable extends React.Component {

    getTableBody(participants) {
	
	if(participants == null || participants.size == 0) {
	    console.log("No data");
	    return(<span>No data</span>);
	}
	else {
	    
	    console.log("participants3");
	    console.log(participants);
	    console.log(participants[0]);
	
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
			{participants.map((n) => 	
			    <TableRow key={n.name}>
			    <TableCell>
				{n.name}
			    </TableCell>
			    <TableCell numeric>
				{n.age}
			    </TableCell>
			    <TableCell>
				{n.sibling}
			    </TableCell>
			    <TableCell>
				{n.exposure}
			    </TableCell>
			    <TableCell>
				{n.mutations}
			    </TableCell>
			    <TableCell>
				{n.status}
			    </TableCell>
			  </TableRow>
			)}
		    </TableBody>
		</Table>
	    );
	}
    }

    render() {
	const {participants} = this.props;
	console.log("participants2");
	console.log(this.props);

	return (
	  <Paper className="paper">
	      {this.getTableBody(participants)}
	  </Paper>
	);
    }
}

function mapStateToProps(state) {
    console.log("mapStateToProps");
    console.log(state);

    const props = { participants:state.ParticipantReducer.participants}
    return props;
}

export default connect(mapStateToProps)(ParticipantTable);
// ParticipantTable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
