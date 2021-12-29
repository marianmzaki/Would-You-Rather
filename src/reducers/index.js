// import the libraries needed:
// 1. Combine Reducer to create the Root Reducer
// 2. Loading bar
import { combineReducers } from 'redux';
import { loadingBarReducer } from 'react-redux-loading-bar';

import authedUser from './authedUser';
import users from './users';
import questions from './questions';

export default combineReducers({
	authedUser,
	users,
	questions,
	loadingBar: loadingBarReducer
});
