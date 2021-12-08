const baseUrl = 'https://localhost:3001/identity';

export const registerUser = (user) => {
	return fetch(`${baseUrl}/register`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(user),
	}).then((resp) => resp.json());
};

export const loginUser = (user) => {
	return fetch(`${baseUrl}/login`, {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(user),
	}).then((resp) => resp.json());
};

export const logoutUser = (token) => {
	return fetch(`${baseUrl}/logout`, {
		headers: {
			'X-Authorization': token,
		},
	});
};

export const getUser = () => {
	let user = sessionStorage.getItem('user');
	return user; //{id:,userName:,token:}
};

export const isAuthenticated = () => {
	return Boolean(getUser.userName);
};
