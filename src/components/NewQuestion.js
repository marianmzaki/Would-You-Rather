//Import the needed libraries for this component
// 1. React for the UI 
// 2. connect to create container (connected) component
// 3. react-bootstrap 
// 4. react-router-dom
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Navigate } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';
import { handleAddQuestion } from '../actions/questions';


class NewQuestion extends Component {
	state = {
		optionOne: '',
		optionTwo: '',
		toHome: false
	};

    // Set the state in case the text of option one or two changed
	
	handleInputChange = (e) => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
			[name]: value
		});
		console.log(`option name: ${name}`);
		console.log(`option value: ${value}`);
		console.log(`state value: ${this.state.optionOne}`);
		console.log(`state value: ${this.state.optionTwo}`);
	};

	

    // get the options value from state and dispatch the event
    // reset the UI 
	handleSubmit = (e) => {
		const { optionOne, optionTwo } = this.state;
		const { dispatch } = this.props;

		e.preventDefault();
		console.log(`state before dispatch option value: ${this.state.optionOne}`);
		console.log(`state before dispatch option value: ${this.state.optionTwo}`);
		this.setState(
			{
				optionOne: '',
				optionTwo: '',
				toHome: true
			},
			() => dispatch(handleAddQuestion(optionOne, optionTwo))
		);
	};

	render() {
		const { optionOne, optionTwo, toHome } = this.state;
		if (toHome === true) return <Navigate to="/" />;
		return (
            <Card>
                <Card.Header>
                <Card.Subtitle className="my-1 text-center">
                    Create New Questions
                </Card.Subtitle>
                </Card.Header>
                <Card.Body className="p-3">
					<div className="d-flex align-items-center">
						<div className="w-100">
							<Card.Text className="text-bold text-muted h6 mb-4">Complete the question:</Card.Text>
							<Card.Text className="text-bold h5 my-3">Would you rather...</Card.Text>
						<div className="input-group">
							<input type="text" className="form-control" id="optionOneInput" onChange={this.handleInputChange} 	name="optionOne" value={optionOne} placeholder="Enter option one text here" />
						</div>
						<Card.Text className="text-bold h6 text-center my-2">OR</Card.Text>
						<div className="input-group">
							<input type="text" className="form-control" id="optionTwoInput" onChange={this.handleInputChange} name="optionTwo" value={optionTwo} placeholder="Enter option two text here" />
						</div>
							<Button className="btn btn-default w-100 mt-3"  onClick={this.handleSubmit} disabled={!this.state.optionOne || !this.state.optionTwo}>Submit</Button>
						</div>
					</div>
                </Card.Body>
            </Card>

		);
	}
}

export default connect()(NewQuestion);
