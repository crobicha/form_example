import React from 'react';
import {connect} from 'react-redux';

import AddParticipantComponent from './AddParticipantComponent';
import ParticipantTable from './ParticipantTable';

import AddParticipant from '../actions/AddParticipant';

//import './app.css';
//import 'typeface-roboto'


//	let id = 0;
//function createData(name, age, sibling, exposure, mutations, review_status) {
//    id += 1;
//    return {id, name, age, sibling, exposure, mutations, review_status};
//}
//
//const data = [
//    createData('Bob', 59, true, "None", "None", "Accepted"),
//    createData('Jim', 30, true, "Dust", "Type 1", "Not Accepted"),
//    createData('Alice', 18, false, "None", "Type 2", "Not Reviewed"),
//];

class AppComponent extends React.Component {

    constructor(props) {
	super(props);
	
	//this.state = {participants: {}};
	
	const {dispatch} = this.props;

 
//    console.log("handle submit");
//    console.log(json);;
   
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