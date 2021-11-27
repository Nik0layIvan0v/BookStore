import AuthContext from '../contexts/authContext';
import useFetch from './useFetch';
import { useState, useContext } from 'react';
import React from 'react';

const CharacterList = () => {
	const [url, setUrl] = useState('https://swapi.dev/api/people');
	const value = useContext(AuthContext);
	const characters = useFetch(url);

	function onPlanetsClickHandler() {
		//automatic trigger useFetch because of dependancy [url] inside useEffect()
		setUrl('https://swapi.dev/api/planets');
	}

	return (
		<div>
			{characters.isLoading === true ? (
				<h3>Loading...</h3>
			) : (
				<ul>
					{characters.state.map((ch) => (
						<li key={ch.name}>{ch.name}</li>
					))}
				</ul>
			)}

			<button onClick={onPlanetsClickHandler}>Load Planets</button>
			<h2>Value from context provider: {value}</h2>
		</div>
	);
};

export default CharacterList;
