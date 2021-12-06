export const registerUser = (user) => {
	return fetch('https://localhost:3001/identity/register', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(user),
	}).then((resp) => resp.json());
};

export const loginUser = (user) => {
	return fetch('https://localhost:3001/identity/login', {
		method: 'POST',
		headers: {
			'Content-type': 'application/json',
		},
		body: JSON.stringify(user),
	}).then((resp) => resp.json());
};
