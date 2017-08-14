import React from 'react';
import {connect} from 'react-redux';

import AddParticipantComponent from './AddParticipantComponent';
import ParticipantTable from './ParticipantTable';
import AddParticipant from '../actions/AddParticipant';
import {STATUS_NOT_REVIEWED} from '../actions/const';
import {STATUS_REJECTED} from '../actions/const';
import {STATUS_ACCEPTED} from '../actions/const';


class AppComponent extends React.Component {

    constructor(props) {
	super(props);

	const {dispatch} = this.props;

 
	dispatch(AddParticipant({
	    name: 'Bob', 
	    age: 59, 
	    sibling: true, 
	    exposure: "None", 
	    mutation: "None", 
	    status: STATUS_ACCEPTED}));

	dispatch(AddParticipant({
	    name: 'Jim', 
	    age: 30, 
	    sibling: true, 
	    exposure: "Dust", 
	    mutation: "Type 1", 
	    status: STATUS_REJECTED}));
	
	dispatch(AddParticipant({
	    name: 'Alice', 
	    age: 18, 
	    sibling: false, 
	    exposure: "X-rays", 
	    mutation: "Type 2", 
	    status: STATUS_NOT_REVIEWED}));
    }

    render() {
	return (
	    <div className="index">
		<AddParticipantComponent />
		<ParticipantTable />
	    </div>
	    );
    }
}

export default connect() (AppComponent);