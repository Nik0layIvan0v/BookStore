import { requester } from './requesterService';

const baseUrl = 'https://localhost:3001/TestIdentity/AlowedForAnonymous';

export const getGenres = async () => {
	let genres = await requester(baseUrl, '');
	return genres;
};
