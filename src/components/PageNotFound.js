//Import the needed libraries for this component
// 1. React for the UI 
// 2. react-router-dom
import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

function PageNotFound() {
	return (
		<Fragment>
			<h1 className="display3 text-center">404 ERROR</h1>
			<h1 className="display4 text-center">
				<Link to="/">Return to Home Page</Link>
			</h1>
		</Fragment>
	);
}

export default PageNotFound;
