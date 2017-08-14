/* Define your initial state here.
 *
 * If you change the type from object to something else, do not forget to update
 * src/container/App.js accordingly.
 */
import {ADD_PARTICIPANT, EDIT_PARTICIPANT} from '../actions/const';
import {STATUS_NOT_REVIEWED} from '../actions/const';

const initialState = {
    participants: []
};

function reducer(state = initialState, action) {
  /* Keep the reducer clean - do not mutate the original state. */
  // const nextState = Object.assign({}, state);

  switch (action.type) {
    
    case ADD_PARTICIPANT: {
      // Modify next state depending on the action and return it
      const nextState = Object.assign({}, state);
      
      const numParticipants = nextState.participants.length;
//      console.log("num = " + numParticipants);
//      
//      console.log("status");
//      console.log(action.json.status);
      // Set default status
      if(action.json.status == null) {
	action.json.status = STATUS_NOT_REVIEWED;  
      }
      
      if(action.json.id == null) {
//	  console.log("Adding id " + numParticipants);
	  action.json.id = numParticipants;
      }
      
//      console.log(action.json.status);
      nextState.participants.push(action.json);
      
//      console.log("nextState");
//      console.log(nextState);
      
      return nextState;
    }
    
    case EDIT_PARTICIPANT: {
//	    console.log(action.);
//	    const pId = action.json.id;
	    const nextState = Object.assign({}, state);
	    
//	    const currentP = nextState.participants[pId];
	    
	    
//	    console.log("edit participant " + pId);
//	    current
//	    console.log(currentP);
	    
	    return nextState;
    }
    
    default: {
      /* Return original state if no actions were consumed. */
      return state;
    }
  }
}

module.exports = reducer;
