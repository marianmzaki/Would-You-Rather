import React, { Component } from 'react';
import { connect } from 'react-redux';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';
import QuestionOverviewList from './QuestionOverviewList';

class AuthedUserHome extends Component {
	render() {
		const { answeredQuestionIds, unansweredQuestionIds } = this.props;
		const tabStyle = {
			border: '1px solid #dee2e6',
			padding: '5px'
		  }
		return (
			<Tabs fill defaultActiveKey="unanswered">
				<Tab eventKey="unanswered" title="Unanswered Questions" style={tabStyle}>          
					<QuestionOverviewList
								idsList={unansweredQuestionIds}
								emptyListNote="No more Unswered Questions! Time to create some new ones! "
							/>
				</Tab>
				<Tab eventKey="answered" title="Answered Questions" style={tabStyle}>
					<QuestionOverviewList
								idsList={answeredQuestionIds}
								emptyListNote="No Answered Questions yet! What are you waiting for???"
							/>
				</Tab>
			</Tabs>
		);
	}
}

function mapStateToProps({ authedUser, questions, users }) {
	const answeredQuestionIds = Object.keys(questions)
		.filter((id) => users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);

		console.log(Object.keys(questions));
		console.log(answeredQuestionIds);
	const unansweredQuestionIds = Object.keys(questions)
		.filter((id) => !users[authedUser].answers.hasOwnProperty(id))
		.sort((a, b) => questions[b].timestamp - questions[a].timestamp);
		console.log(answeredQuestionIds);
	return {
		answeredQuestionIds,
		unansweredQuestionIds
	};
}

export default connect(mapStateToProps)(AuthedUserHome);
