/* eslint-disable import/newline-after-import */
/* Exports all the actions from a single point.

Allows to import actions like so:

import {action1, action2} from '../actions/'
*/
/* Populated by react-webpack-redux:action */
import EditParticipant from '../actions/EditParticipant.js';
import AddParticipant from '../actions/AddParticipant.js';
const actions = {
  AddParticipant,
  EditParticipant
};
module.exports = actions;
