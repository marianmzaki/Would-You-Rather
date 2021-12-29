//Import the needed libraries for this component
// 1. React for the UI 
// 2. connect to create container (connected) function
// 3. react-bootstrap 
import React  from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Image from 'react-bootstrap/Image';
import { reSetAuthedUser } from '../actions/authedUser';
import { Button } from 'react-bootstrap';





function Navigation(props) {
	const { user,  dispatch } = props;

	const handleLogout = () => {
		dispatch(reSetAuthedUser());
	};

	return (
		<Navbar expand="lg" bg="light" variant="light" className="my-1 border">
				<Nav className="mr-auto">
					<Nav.Link as={NavLink} to="/" exact>
						Home
					</Nav.Link>
					<Nav.Link as={NavLink} to="/add">
						New Question
					</Nav.Link>
					<Nav.Link as={NavLink} to="/leaderboard">
						Leaderboard
					</Nav.Link>
				</Nav>
				{user && (
					<Navbar.Collapse className="justify-content-end">
					<Navbar.Text>
						<Image
						src={user.avatarURL}
						roundedCircle
						style={{ width: '50px', cursor: 'pointer' }}
						/>
						<span>
						&nbsp; Hello, {user.name}
						<Button
							className="btn btn-default btn-sm"
							onClick={handleLogout}
						>
							Logout
						</Button>
						</span>
					</Navbar.Text>
					</Navbar.Collapse>
				)}

		</Navbar>
	
	);
}

function mapStateToProps({ users, authedUser }) {
	return {
		user: users[authedUser]
	};
}


export default connect(mapStateToProps)(Navigation);