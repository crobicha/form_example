import React from 'react';

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



export default class ParticipantTable extends React.Component {

//   const { classes } = this.props;

  render() {
    const {participants} = this.props;
//    console.log("parts");
//    console.log(parts);

    return (
      <Paper className="paper">
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell numeric>Age</TableCell>
              <TableCell>Sibling?</TableCell>
              <TableCell>Exposure</TableCell>
              <TableCell>Mutations</TableCell>
              <TableCell>Review Status</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {participants.map(n => {
              return (
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
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    );
  }

}

// ParticipantTable.propTypes = {
//   classes: PropTypes.object.isRequired,
// };
