// Action file
// Handle Get Initial Data



import { showLoading, hideLoading } from 'react-redux-loading-bar';

// import the get initial data from the API file
import { getInitialData } from '../utils/api';

// Import users from the action folder to handle retrieving users.
import { receiveUsers } from './users';

// import questions from the action folder to handle retrieve list of questions 
import { receiveQuestions } from './questions';

// Define the Constants that should be used related to initial data
// This to avoid miss spell and easier testing as the error will be raised if miss spelled at compilation time.
export const RECEIVE_INITAL_DATA = 'RECEIVE_INITAL_DATA'

// Async Action Creator Section.
export function handleInitialData() {
	return (dispatch) => {
        // dispatch the Show Loading
		dispatch(showLoading());
        // Call the API to get the initial data
        // Pass the users and questions list (arrays)
		return getInitialData().then(({ users, questions }) => {
            // Dispatch to update the store with the returned list of users
			dispatch(receiveUsers(users));
            // Dispatch to update the store with the returned list of questions
			dispatch(receiveQuestions(questions));
            // dispatch the Hide Loading
			dispatch(hideLoading());
		});
	};
}
