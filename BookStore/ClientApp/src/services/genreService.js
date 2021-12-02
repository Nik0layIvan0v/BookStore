const baseUrl = 'https://localhost:3001/TestIdentity/AlowedForAnonymous';

export const getGenres = async () => {
	const response = await fetch(baseUrl, {
		method: 'GET',
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json',
		},
		Authorization: 'Bearer',
	});

	let genres = await response.json();
	return genres;
};
