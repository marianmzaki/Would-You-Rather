//Import the needed libraries for this component
// 1. React for the UI 

import React, { Fragment } from 'react';
import QuestionOverview from './QuestionOverview';

function QuestionOverviewList(props) {
	const { idsList, emptyListNote } = props;
	console.log(`inside overview list. ids sent: ${idsList}`);

	return (
		<Fragment>
			<h2 className="text-center my-3">
				<small>Would You Rather...</small>
			</h2>
			{idsList.length ? (
				//idsList.map((id) => <p className="text-center">test: {id}</p>)
				idsList.map((q) => <QuestionOverview key={q} id={q} />)
			) : (
				<p className="text-center">{emptyListNote}</p>
			)}
			
		</Fragment>
	);
}

export default QuestionOverviewList;
