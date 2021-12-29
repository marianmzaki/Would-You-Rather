// Reducer File
// Import the actions from the Actions folder related to questions list
import { RECEIVE_QUESTIONS, ADD_QUESTION, ADD_ANSWER } from '../actions/questions';

// Switch on Action Types
export default function questions(state = {}, action) {
	switch (action.type) {
		// Retrieve questions 
		case RECEIVE_QUESTIONS:
			return {
				...state,
				...action.questions
			};
		// Add a question	
		case ADD_QUESTION:
			return {
				...state,
				[action.question.id]: action.question
			};
		// Add answer for a question for the logged in user	
		case ADD_ANSWER:
			const { qid, answer, authedUser } = action.answerDetails;

			return {
				...state,
				[qid]: {
					...state[qid],
					[answer]: {
						...state[qid][answer],
						votes: state[qid][answer].votes.concat([authedUser])
					}
				}
			};

		default:
			return state;
	}
}
