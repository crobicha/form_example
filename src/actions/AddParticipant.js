import { ADD_PARTICIPANT } from './const';

function action(parameter) {
  return { type: ADD_PARTICIPANT, json: parameter };
}

module.exports = action;
