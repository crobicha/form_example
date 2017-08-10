// @flow weak

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles, createStyleSheet } from 'material-ui/styles';
import Button from 'material-ui/Button';
import Dialog from 'material-ui/Dialog';
import List, { ListItem, ListItemText } from 'material-ui/List';
import Divider from 'material-ui/Divider';
import AppBar from 'material-ui/AppBar';
import Toolbar from 'material-ui/Toolbar';
import IconButton from 'material-ui/IconButton';
import Typography from 'material-ui/Typography';
import CloseIcon from 'material-ui-icons/Close';
import Slide from 'material-ui/transitions/Slide';
import TextField from 'material-ui/TextField';
import Checkbox from 'material-ui/Checkbox';
import { FormGroup, FormControlLabel } from 'material-ui/Form';

// import './app.css';

const styleSheet = createStyleSheet({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
  },
});

class AddParticipantComponent extends Component {

  constructor() {
    super();
     this.state = {
      open: false,
    };
    // this.handleRequestClose = ::this.handleRequestClose();
    // this.handleOpen = ::this.handleOpen();
  }

  handleClose () {
    this.setState ({ open: false });
  }

  handleOpen () {
    this.setState({ open: true });
  }

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Button onClick={()=>this.handleOpen()}>Add a new participant</Button>

        <Dialog
          fullScreen
          open={this.state.open}
          onRequestClose={()=>this.handleClose()}
          transition={<Slide direction="up" />}
        >
          <AppBar className={classes.appBar}>
            <Toolbar>
              <Typography type="title" color="inherit" className={classes.flex}>
                Add a new participant
              </Typography>
              <Button color="contrast" onClick={()=>this.handleClose()}>
                <CloseIcon />
              </Button>
            </Toolbar>
          </AppBar>

          <List>

            <ListItem>
              <TextField
                id="name"
                label="Name"
                className={classes.textField}
                value={this.state.name}
                onChange={event => this.setState({ name: event.target.value })}
                margin="normal"
                fullWidth
              />
            </ListItem>

            <ListItem>
              <TextField
                id="age"
                label="Age"
                type="number"
                className={classes.textField}
                value={this.state.age}
                onChange={event => this.setState({ age: event.target.value })}
                margin="normal"
                fullWidth
              />
            </ListItem>

            <ListItem>
              <FormControlLabel control={<Checkbox value="checkedC" />}
              label="Does the participant have siblings?"
              onChange={event => this.setState({ siblings: event.target.value })} />
            </ListItem>

            <ListItem>
              <TextField
                id="exposure"
                label="Known environmental exposures"
                className={classes.textField}
                value={this.state.exposure}
                onChange={event => this.setState({ exposure: event.target.value })}
                margin="normal"
                fullWidth
              />
            </ListItem>

            <ListItem>
              <TextField
                id="mutations"
                label="Known genetic mutations"
                className={classes.textField}
                value={this.state.mutations}
                onChange={event => this.setState({ mutations: event.target.value })}
                margin="normal"
                fullWidth
              />
            </ListItem>
          </List>
        </Dialog>
      </div>
    );
  }
}

AddParticipantComponent.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styleSheet)(AddParticipantComponent);
