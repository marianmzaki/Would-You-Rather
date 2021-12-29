// This API File to deal with the Fake Database _Data file.
import {
 _getUsers, 
 _getQuestions, 
 _saveQuestion, 
_saveQuestionAnswer 
} 
from './_DATA.js';

// Get the Users and the questions
export function getInitialData() {
	return Promise.all([_getUsers(), _getQuestions()]).then(([users, questions]) => ({
		users,
		questions
	}));
}

// Create New Question
export function saveQuestion(question) {
	return _saveQuestion(question);
}

// Save the Question Pull Answer
export function saveQuestionAnswer(info) {
	return _saveQuestionAnswer(info);
}
