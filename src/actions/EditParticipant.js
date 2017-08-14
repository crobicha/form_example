import { EDIT_PARTICIPANT } from './const';

function action(parameter) {
  return { type: EDIT_PARTICIPANT, json: parameter };
}

module.exports = action;
