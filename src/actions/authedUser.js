// Action file
// Handle Authenicated Users

// Define the Constants that should be used related to the Authenticated User
// This to avoid miss spell and easier testing as the error will be raised if miss spelled at compilation time.
export const SET_AUTHED_USER = 'SET_AUTHED_USER';
export const RESET_AUTHED_USER = 'RESET_AUTHED_USER';

// Action return and object with a property called type and the ID of the User.
// This action to login.
export function setAuthedUser(id) {
	return {
		type: SET_AUTHED_USER,
		id
	};
}

// Action return and object with a property called type.
// This action for Logging out.
export function reSetAuthedUser(id) {
	return {
		type: RESET_AUTHED_USER
	};
}
