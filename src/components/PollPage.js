import React, { Fragment } from 'react';
import { connect } from 'react-redux';
import UnansweredQuestion from './UnansweredQuestion';
import AnsweredQuestion from './AnsweredQuestion';
import {useParams} from 'react-router-dom';

const PollPage= (props) => {
	
		const { autherUserAnsweres } = props;
		const { id } = useParams();
		const answered = autherUserAnsweres.hasOwnProperty(id) ? true : false;
		console.log(`question id: ${id}`);
		console.log(`answered?: ${answered}`);
		return (
			<Fragment>
				<h2 className="text-center my-3">
					<small>Would You Rather...</small>
				</h2>
				{answered ? <AnsweredQuestion id={id} /> : <UnansweredQuestion id={id} />}
			</Fragment>
		);
	}


function mapStateToProps({ authedUser, users }) {
	const autherUserAnsweres = users[authedUser].answers;

	return {
		autherUserAnsweres
	};
}

export default connect(mapStateToProps)(PollPage);