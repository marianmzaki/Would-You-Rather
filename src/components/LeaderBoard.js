//Import the needed libraries for this component
// 1. React for the UI 
// 2. connect to create container (connected) component
// 3. react-bootstrap 

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';


class LeaderBoard extends Component {
	render() {
		const { user } = this.props;
		const { name, avatarURL, answers, questions } = user;

		return (
            <Card className="my-3" key={name}>
                <Card.Body className="p-3">
                <div className="d-flex align-items-center">
                <Card.Img className="card-img w-25 rounded-circle mr-3" variant="top" src={avatarURL} />            
                <div className="align-self-stretch border-left pl-3 mr-auto">
                    <Card.Text className="h3 my-3">{user.name}</Card.Text>
                    <Card.Text className="h6 font-weight-normal my-3">Answered questions: {Object.keys(answers).length}</Card.Text>
                    <Card.Text className="h6 font-weight-normal my-3">Created questions: {questions.length}</Card.Text>
                </div>         
                <div className="border-left ml-3 pl-3">
                    <Card>
                    <Card.Header className="text-bold">
                        Score
                    </Card.Header>
                    <Card.Body className="text-center p-4">
                        <div className="rounded-circle bg-primary h4 m-0 px-3 py-2 text-white">{Object.keys(answers).length + questions.length}</div>
                    </Card.Body>
                    </Card>
                </div>
                </div>
                </Card.Body>
            </Card>
			
		);
	}
}

function mapStateToProps({ users }, { id }) {
	return {
		user: users[id]
	};
}

export default connect(mapStateToProps)(LeaderBoard);
