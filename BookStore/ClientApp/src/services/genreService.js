const baseUrl = 'https://localhost:3001/api';

export const getGenres = async () => {
	const response = await fetch(baseUrl + '/genres');

	let genres = await response.json();

	return genres;
};
