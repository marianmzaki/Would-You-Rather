//Import the needed libraries for this component
// 1. React for the UI 
// 2. connect to create container (connected) component
// 3. react-bootstrap 
import React, { Component } from 'react';
import { Card, Button } from 'react-bootstrap';
import { connect } from 'react-redux';
import { setAuthedUser } from '../actions/authedUser';


class Login extends Component {
	state = {
		errorMsg: ''
	};

  handleChange = (e) => {
    const selectedUser = e.target.value === 'Select user' ? '' : e.target.value;
    console.log(`user selected: ${selectedUser}`)
    this.setState(() => ({ selectedUser }));
  }

	handleSubmit = (e) => {
    
   
    console.log(`user state selected: ${this.state.selectedUser}`)
		const { dispatch } = this.props;

        // prevent the default action
		e.preventDefault();

        
    console.log(`selected user: ${this.state.selectedUser}`)
		if (this.state.selectedUser === '' || this.state.selectedUser === undefined) {
      this.setState({ errorMsg: 'You must choose a username' });
		} else {
      console.log(`user state inside before dispatch: ${this.state.selectedUser}`)
			dispatch(setAuthedUser(this.state.selectedUser));
            
			
		}
	};  

    render() {
		const { userNames } = this.props;
		const { errorMsg } = this.state;

        return (
            <Card className="text-center">
              <Card.Header>
                <Card.Title>Welcome to the Would You Rather App!</Card.Title>
                <Card.Subtitle className="mb-2 text-muted">
                  Please sign in to continue
                </Card.Subtitle>
              </Card.Header>
              <Card.Body>
                {errorMsg ? (
                    <p className="text-danger">{errorMsg}</p>
                ) : null}
                <Card.Img className="card-img w-50 my-3" variant="top" src="/logo512.png" />
                <Card.Text className="h3 text-primary mb-4">
                  Sign in
                </Card.Text>
                <select className="form-control" value={this.state.selectedUser} onChange={this.handleChange}>
                  <option value="">Select user</option>
                  {userNames.map((user) => (
                    <option key={user.id} value={user.id}>
                      {user.name}
                    </option>
                  ))}
                </select>
                <Button className="btn btn-default w-100 mt-3"  onClick={this.handleSubmit}>Log In</Button>
              </Card.Body>
            </Card>
          );
        }
}

function mapStateToProps({ users }) {
	return {
		userNames: Object.keys(users).map((id) => ({
			id: id,
			name: users[id].name
		}))
	};
}

export default connect(mapStateToProps)(Login);

