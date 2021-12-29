//Import the needed libraries for this component
// 1. React for the UI 
// 2. connect to create container (connected) component
// 3. react-bootstrap 

import React, { Component } from 'react';
import { connect } from 'react-redux';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { handleAddAnswer } from '../actions/questions';
import { formatDate } from '../utils/helpers';
import PageNotFound from './PageNotFound';


class UnansweredQuestion extends Component {
	state = {
		errorMsg: ''
	};

 
handleChange = (e) => {
    const selectedOption =  e.target.value;
    console.log(`user selected: ${selectedOption}`)
    this.setState(() => ({ selectedOption }));
  }

	handleSubmit = (e, id) => {
		const answer =  this.state.selectedOption ;
		const { dispatch } = this.props;
    console.log(`answer: ${answer}`);
		e.preventDefault();

		if (answer !== '') {
      console.log(`id = ${id}`);
      console.log(`answer = ${answer}`);
			dispatch(handleAddAnswer(id, answer));
		} else {
			this.setState({ errorMsg: 'You must make a choice' });
      console.log(this.state.errorMsg);
		}
	};

	render() {
		const { question, author } = this.props;
    console.log(`question: ${question}`);
		if (question === null) {
			return <PageNotFound />;
		}

		const { optionOne, optionTwo, timestamp, id } = question;
		const { name } = author;
		const { errorMsg } = this.state;

		return (
            <Card>
            <Card.Header>
              <Card.Subtitle className="my-1">
                {name} asks
              </Card.Subtitle>
            </Card.Header>
            <Card.Body className="p-3">
                {errorMsg ? (
                      <p className="text-danger">{errorMsg}</p>
                    ) : null}
                <div className="d-flex align-items-center">
                <Card.Img className="card-img w-25" variant="top" src={author.avatarURL} />
                <div className="border-left ml-3 pl-3 w-100">
                    <Card.Text className="text-bold h5">Would you rather...</Card.Text>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="answer" id="optionOne" value="optionOne" checked={this.state.selectedOption === "optionOne"} onChange={this.handleChange}  />
                    <label className="form-check-label" htmlFor="optionOne">
                        {optionOne.text}
                    </label>
                    </div>
                    <div className="form-check">
                    <input className="form-check-input" type="radio" name="answer" id="optionTwo" value="optionTwo" checked={this.state.selectedOption === "optionTwo"} onChange={this.handleChange}  />
                    <label className="form-check-label" htmlFor="optionTwo">
                        {optionTwo.text}
                    </label>
                    </div>
                    <Button className="w-100 mt-4" variant="primary" onClick={(e) => this.handleSubmit(e,id)}>Vote</Button>
                </div>
                </div>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">{formatDate(timestamp)}</small>
            </Card.Footer>
          </Card>

		);
	}
}

function mapStateToProps({ questions, users }, { id }) {
	const question = questions[id];

	return {
		question: question ? question : null,
		author: question ? users[question.author] : null
	};
}

export default connect(mapStateToProps)(UnansweredQuestion);
