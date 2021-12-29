//Import the needed libraries for this component
// 1. React for the UI 
// 2. connect to create container (connected) function
// 3. react-bootstrap 
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Card,  Alert, ProgressBar } from 'react-bootstrap';
import { formatDate } from '../utils/helpers';
import PageNotFound from './PageNotFound';


class AnsweredQuestion extends Component {
	render() {
		const { question, author, authedUser } = this.props;

		if (question === null) {
			return <PageNotFound />;
		}

		const { optionOne, optionTwo, timestamp } = question;
		const { name, avatarURL } = author;
    // Total votes for option 1 and 2
		const totalVotes = optionOne.votes.length + optionTwo.votes.length;
    // percentage of option one votes related to total
		const optionOnePercent = Math.round((optionOne.votes.length / totalVotes) * 100);
    // percentage of option two votes related to total
		const optionTwoPercent = Math.round((optionTwo.votes.length / totalVotes) * 100);

		return (
            <Card>
            <Card.Header>
              <Card.Subtitle className="my-1">
                {name} asks
              </Card.Subtitle>
            </Card.Header>
            <Card.Body className="p-3">
                <div className="d-flex align-items-center">
                    <Card.Img className="card-img w-25" variant="top" src={avatarURL} />
                    <div className="border-left ml-3 pl-3 w-100">
                        <Card.Text className="text-bold h5">Results:</Card.Text>
                        <Alert key={optionOne.text} variant={optionOne.text === {optionOne} ? 'primary' : 'secondary'}>
                        Would you rather {optionOne.text}?
                        <ProgressBar variant="primary" className="mt-3" now={optionOnePercent} label={`${optionOnePercent}%`} />
                        <span className="font-weight-bold text-center d-block">{optionOne.votes.length} out of {totalVotes} vote(s)</span>
                        {optionOne.votes.includes(authedUser) && (<span className="badge badge-warning d-inline-block">Voted</span>)}
                        </Alert>
                        <Alert key={optionTwo.text} variant={optionTwo.text === {optionTwo} ? 'primary' : 'secondary'}>
                        Would you rather {optionTwo.text}?
                        <ProgressBar variant="primary" className="mt-3" now={optionTwoPercent} label={`${optionTwoPercent}%`} />
                        <span className="font-weight-bold text-center d-block">{optionTwo.votes.length} out of {totalVotes} vote(s)</span>
                        {optionTwo.votes.includes(authedUser) && (<span className="badge badge-warning d-inline-block">Voted</span>)}
                        </Alert>
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

function mapStateToProps({ questions, users, authedUser }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null,
		authedUser
	};
}

export default connect(mapStateToProps)(AnsweredQuestion);
