import React from 'react';
import {connect} from 'react-redux';

import AddParticipantComponent from './AddParticipantComponent';
import ParticipantTable from './ParticipantTable';
import AddParticipant from '../actions/AddParticipant';


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
	    status: "Accepted"}));

	dispatch(AddParticipant({
	    name: 'Jim', 
	    age: 30, 
	    sibling: true, 
	    exposure: "Dust", 
	    mutation: "Type 1", 
	    status: "Not Accepted"}));
	
	dispatch(AddParticipant({
	    name: 'Alice', 
	    age: 18, 
	    sibling: false, 
	    exposure: "X-rays", 
	    mutation: "Type 2", 
	    status: "Not Reviewed"}));
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