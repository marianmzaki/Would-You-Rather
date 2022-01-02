# Would You Rather Project

This is code for the final assessment project for Udacity's React & Redux course.

# Authors
Marian Zaki: A Software Engineer with 10+ years of experience developing solutions using various technologies having full software lifecycle 

# Depoyment
All dependencies are added you just need to run the following commands. 

npm install
npm start

The `_DATA.js` file represents a fake database and methods that let you access the data. 

## Data

There are two types of objects stored in our database:

* Users
* Questions

### Users

Users include:

| Attribute    | Type             | Description           |
|-----------------|------------------|-------------------         |
| id                 | String           | The user’s unique identifier |
| name          | String           | The user’s first name  and last name     |
| avatarURL  | String           | The path to the image file |
| questions | Array | A list of ids of the polling questions this user created|
| answers      | Object         |  The object's keys are the ids of each question this user answered. The value of each key is the answer the user selected. It can be either `'optionOne'` or `'optionTwo'` since each question has two options.

### Questions

Questions include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id                  | String | The question’s unique identifier |
| author        | String | The author’s unique identifier |
| timestamp | String | The time when the question was created|
| optionOne | Object | The first voting option|
| optionTwo | Object | The second voting option|

### Voting Options

Voting options are attached to questions. They include:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| votes             | Array | A list that contains the id of each user who voted for that option|
| text                | String | The text of the option |

Your code will talk to the database via 4 methods:

* `_getUsers()`
* `_getQuestions()`
* `_saveQuestion(question)`
* `_saveQuestionAnswer(object)`

1) `_getUsers()` Method

*Description*: Get all of the existing users from the database.  
*Return Value*: Object where the key is the user’s id and the value is the user object.

2) `_getQuestions()` Method

*Description*: Get all of the existing questions from the database.  
*Return Value*: Object where the key is the question’s id and the value is the question object.

3) `_saveQuestion(question)` Method

*Description*: Save the polling question in the database.  
*Parameters*:  Object that includes the following properties: `author`, `optionOneText`, and `optionTwoText`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| author | String | The id of the user who posted the question|
| optionOneText| String | The text of the first option |
| optionTwoText | String | The text of the second option |

*Return Value*:  An object that has the following properties: `id`, `author`, `optionOne`, `optionTwo`, `timestamp`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| id | String | The id of the question that was posted|
| author | String | The id of the user who posted the question|
| optionOne | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
| optionTwo | Object | The object has a text property and a votes property, which stores an array of the ids of the users who voted for that option|
|timestamp|String | The time when the question was created|

4) `_saveQuestionAnswer(object)` Method

*Description*: Save the answer to a particular polling question in the database.
*Parameters*: Object that contains the following properties: `authedUser`, `qid`, and `answer`. More details about these properties:

| Attribute | Type | Description |
|-----------------|------------------|-------------------|
| authedUser | String | The id of the user who answered the question|
| qid | String | The id of the question that was answered|
| answer | String | The option the user selected. The value should be either `"optionOne"` or `"optionTwo"`|

## Archticture 
The Code is organized into folder
1) Actions:
Contains all the Project avaialable actions for the end user.
Actions Objects contain the type property along with or without data like an id or a compelete object.
Action Creators section are the async handlers for the actions in the same file. This handles the connection to the database and return back the data
Oragnized into type 
    1) Autherized Users actions.
    2) Questions actions.
    3) Users actions.
    4) Shared actions.
2) Reducers:
Contains all the reducers.
    1) Autherized Users reducers.
    2) Questions reducers.
    3) Users reducers.
    4) Index root reducer, create the store and add the middleware. 
3) Middleware:
In this project handle the logging for the project grouped by the action types.
It is the functions in between the UI and the state change and data insertion 
It can helps in any kind of validation for example needed before calling dispatch which updates the state. 

4) Utils:
    1) Which contains the _Data file of the fake database.
    2) The APIs file.
    3) Helpers: Which contains in this project time formating. any helper functions can be added here for reuse. 

5) Components:
Which contains all the function and class components to handle the interface divided into small components. 
    1) Page not found: is called when the user try to access a url that is not found. Example access question with wrong ID.
    2) Login: to handle user login functionality. 
    3) AuthedUserHome: is the home page for the logged in user. Contains two tabs for answered and unanswered questions.
        3.1 Child QuestionOverviewList: Contains the list of Answered or Unanswered Question.
            3.1.1 Child component: QuestionOverview: Contains the question overview along with the auther name and avatar. 
                This component redirect to the PollPage: this page contains two child compontents:
                1. AnsweredQuestion: Which view statistics about the viewed project. 
                2. UnAnsweredQuestion: Which view the question so the logged in user can answer it and when updated it shows the AnsweredQuestion component with new statistics about the question.
    4) The LeaderBoardList is the component for statistics for each user with the score ordered ascending. It contains
        4.1 Child component LeaderBoard which is the view for each user contains the answered questions statistics and the created questions. 
    5) NewQuestion Component which allow the user to add a new question answers (create new question with two options)
    it redirect to the LeaderBoardList components to show the new statics per user after creating new question.
    6) Navigation component: contains the Navigation Menu. 
    7) App Component which contaions the children: 
        7.1) The Navigation Bar 
        7.2) the Login page if not user is logged in. 
        7.3) The Routes which contains the available routes with the paths for each route and the component to load when the path matches. 
    8) index.js contains the App Component and the Provider for keeping the context of the store. 
        


