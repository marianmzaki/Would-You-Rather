//Import the needed libraries for this component
// 1. React for the UI 
// 2. connect to create container (connected) component
// 3. react-bootstrap 
// 4. react-router-dom
import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import { formatDate } from '../utils/helpers';
import { NavLink } from 'react-router-dom';



class QuestionOverview extends Component {
	render() {
		const { question, author } = this.props;
		const { optionOne, timestamp, id } = question;
		const { name, avatarURL } = author;
		console.log(` optionOne: ${optionOne}`)
		console.log(` optionOne.text: ${optionOne.text}`)
		
		console.log(` id: ${id}`)
		console.log(` timestamp: ${timestamp}`)
		console.log(` author: ${author}`)
		console.log(` name: ${name}`)
		console.log(` avatarURL: ${avatarURL}`)
		return (

			<Card className="mx-2 my-2">
				<Card.Header>
					<Card.Subtitle className="my-1">
					{name} asks
					</Card.Subtitle>
				</Card.Header>
				<Card.Body className="p-3">
				<div className="d-flex align-items-center">
					<Card.Img className="card-img w-25" variant="top" src={avatarURL} />
					<div className="border-left ml-3 pl-3 w-100">
						<Card.Text className="text-bold h5">Would you rather</Card.Text>
						<Card.Text className="text-muted">{optionOne.text.slice(0, 50)}...?.</Card.Text>
						<NavLink className="w-100 btn btn-sm btn-outline-primary" to={`/question/${id}`}>View Poll</NavLink>
					</div>
				</div>
				</Card.Body>
				<Card.Footer>
					<small className="text-muted">{formatDate(timestamp)}</small>
				</Card.Footer>
			</Card>

		);
	}
}

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null
	};
}



export default connect(mapStateToProps)(QuestionOverview);
