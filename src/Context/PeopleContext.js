import React, { useState, createContext } from 'react';

export const PeopleContext = createContext();

export const PeopleProvider = props => {

	const [peopleState, setPeopleStates] = useState([{
		list: [],
		error: false,
		loading: true,
	}]);

	return(
		<PeopleContext.Provider value={[peopleState, setPeopleStates]}>
			{props.children}
		</PeopleContext.Provider>		
	);
};