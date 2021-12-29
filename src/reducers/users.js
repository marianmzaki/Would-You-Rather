// Reducer File
// Import the actions from the Actions folder related to users list and questions list
import { RECEIVE_USERS } from '../actions/users';
import { ADD_QUESTION, ADD_ANSWER } from '../actions/questions';

//Switch on the action type
// initial state empty array
export default function users(state = {}, action) {
	switch (action.type) {
		case RECEIVE_USERS:
			return {
                // use the spread operator to return an object copy with same properties 
				...state,
				...action.users
			};

		// handle add a question for an auther user
		// add this question to the questions related to that auther 
		case ADD_QUESTION:
			return {
				...state,
				[action.question.author]: {
					...state[action.question.author],
					questions: state[action.question.author].questions.concat([
						action.question.id
					])
				}
			};

		// Handle adding an answer of the logged in user to a question. 	
		case ADD_ANSWER:
			const { qid, answer, authedUser } = action.answerDetails;

			return {
				...state,
				[authedUser]: {
					...state[authedUser],
					answers: {
						...state[authedUser].answers,
						[qid]: answer
					}
				}
			};

		default:
			return state;
	}
}
