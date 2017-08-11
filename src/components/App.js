import React from 'react';
import YeomanImage from './YeomanImage';
import AddParticipantComponent from './AddParticipantComponent';
import ParticipantTable from './ParticipantTable';
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

export default class AppComponent extends React.Component {

    constructor(props) {
	super(props);

	// Initial state for demo purposes
	this.state = {
	    participants: [
		{name: 'Bob', age: 59, sibling: true, exposure: "None", mutation: "None", status: "Accepted"},
		{name: 'Jim', age: 30, sibling: true, exposure: "Dust", mutation: "Type 1", status: "Not Accepted"},
		{name: 'Alice', age: 18, sibling: false, exposure: "None", mutation: "Type 2", status: "Not Reviewed"},
	    ]};
    }

    render() {
	return (
	    <div className="index">
		<AddParticipantComponent />
		<ParticipantTable participants={this.state.participants}/>
	    </div>
	    );
    }
}
