import './App.css';
import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { handleInitialData } from './actions/shared';
//import LoadingBar from 'react-redux-loading';
import { connect } from 'react-redux';
import { Container, Row, Col, Spinner } from 'react-bootstrap';

import PollPage from './components/PollPage';
import Login from './components/Login';
import Navigation from './components/Navigation';
import AuthedUserHome from './components/AuthedUserHome';
import NewQuestion from './components/NewQuestion';
// To be Removed
//import QuestionPage from './QuestionPage';
import LeaderBoardList from './components/LeaderBoardList';
import PageNotFound from './components/PageNotFound';


class App extends Component {
  componentDidMount() {
    this.props.dispatch(handleInitialData());
  }
  
  render() {
    const { authedUser, loadingBar } = this.props;
    console.log(`authedUser: ${authedUser}`);
    console.log(`loadingBar: ${loadingBar}`);
    if (loadingBar === undefined || loadingBar === 1) {
			//loading
			return (
				<div className="d-flex justify-content-center">
					<Spinner
						animation="border"
						role="status"
						variant="secondary"
						className="my-5"
					>
						<span className="sr-only">Loading...</span>
					</Spinner>
				</div>
			);
		} 
    else {
      return (
        
        <Router>
          <Fragment>
            {loadingBar === true ? null : (
              <Container fluid>
                <Row>
                  <Col className="px-0 mx-auto mb-4">
                    <Navigation />
                  </Col>
                </Row>
                <Row>
                  <Col sm={5} className="mx-auto">
                  <div>
                      
                      {!authedUser ? <Login />  : ( 
                        
                        <Routes>
                          {/* go to Authenticate User component in case the path is '/' - exact and pass the props */}
                          <Route path="/" element = {<AuthedUserHome/> } />
                          <Route path="/add" element={<NewQuestion/>} />
                          <Route path="/questions/:id" element={<PollPage/>} /> 
                          <Route path="/leaderboard" element={<LeaderBoardList/>} />
                          <Route element = {<PageNotFound/> }/>
                        </Routes>
                      )}
                    </div>
                  </Col>
                </Row>
              </Container>
            )}
          </Fragment>
        </Router>
      );
    }
  }
}

/*function mapStateToProps({ users, authedUser }) {
  return {
    authedUser,
    loading: users === null,
  };
}*/
function mapStateToProps({ authedUser, loadingBar }) {
	return {
		authedUser,
		loadingBar
	};
}

export default connect(mapStateToProps)(App);
