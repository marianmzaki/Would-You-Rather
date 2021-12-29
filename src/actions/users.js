// Action file
// Handle Retrieving Users

// Define the Constants that should be used related to the Authenticated User
// This to avoid miss spell and easier testing as the error will be raised if miss spelled at compilation time.
export const RECEIVE_USERS = 'RECEIVE_USERS';

// Retrieve users Action return and object with type property and list of users. 
export function receiveUsers(users) {
	return {
		type: RECEIVE_USERS,
		users
	};
}

