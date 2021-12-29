// Action File
// Handle Actions related to Questions

// import the APIs in the api files related to Questions
import { saveQuestion, saveQuestionAnswer } from '../utils/api';

// import loading from library react-redux-loading-bar
import { showLoading, hideLoading } from 'react-redux-loading-bar';

// Define the constants related to Questions retrieving and adding. 
export const RECEIVE_QUESTIONS = 'RECEIVE_QUESTIONS';
export const ADD_QUESTION = 'ADD_QUESTION';
export const ADD_ANSWER = 'ADD_ANSWER';

// Retrieve Questions Action return and object with type property and list of questions. 
export function receiveQuestions(questions) {
	return {
		type: RECEIVE_QUESTIONS,
		questions
	};
}

// Add Question Action that return an object with type property and the added question object. 
function addQuestion(question) {
	return {
		type: ADD_QUESTION,
		question
	};
}

// Add answer Action that return an object with type property and an object with the question id and the answer and the logged in user added the answer.
function addAnswer({ qid, answer, authedUser }) {
	return {
		type: ADD_ANSWER,
		answerDetails: {
			qid,
			answer,
			authedUser
		}
	};
}

// Async Action Creator section.

// Handler for adding new question with two option answers
// Takes two options as paramerters 
export function handleAddQuestion(optionOne, optionTwo) {
	// pass the dispatch object and get state to get the authenticated user.
	return (dispatch, getState) => {
		// get the loged in user from the state. 
		const { authedUser } = getState();

		// Dispatech the Show Loading
		dispatch(showLoading());

		return saveQuestion({
			optionOneText: optionOne,
			optionTwoText: optionTwo,
			author: authedUser
		})
			// promise and dispatch to change the data with the new added question returned.
			.then((question) => dispatch(addQuestion(question)))
			// dipatch Hide Loading
			.then(() => dispatch(hideLoading()));
	};
}

// Save the answer for a question for a logged in user.
export function handleAddAnswer(qid, answer) {
	return (dispatch, getState) => {
		// get the logged in user
		const { authedUser } = getState();

		// Dispatch the Show Loading
		dispatch(showLoading());

		return saveQuestionAnswer({
			qid,
			answer,
			authedUser
		})
			// Promise then dipatch the state change with the answer of a question for a user.
			.then(() =>
				dispatch(
					addAnswer({
						qid,
						answer,
						authedUser
					})
				)
			)
			// Dispatch the Hide Loading
			.then(() => dispatch(hideLoading()));
	};
}
