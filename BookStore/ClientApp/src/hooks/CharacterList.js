import useFetch from './useFetch';
import React from 'react';

const CharacterList = () => {
	const characters = useFetch('https://swapi.dev/api/people');

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
		</div>
	);
};

export default CharacterList;
