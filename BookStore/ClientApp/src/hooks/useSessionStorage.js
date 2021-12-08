import { useState } from 'react';

const useSessionStorage = (key, initialValue) => {
	const [state, setState] = useState(() => {
		try {
			let user = sessionStorage.getItem(key);

			return user ? JSON.parse(user) : initialValue;
		} catch (error) {
			console.log(error);
			return initialValue;
		}
	});

	const setItem = (value) => {
		try {
			sessionStorage.setItem(key, JSON.stringify(value));

			setState(value);
		} catch (err) {
			console.log(err);
		}
	};

	return [state, setItem];
};

export default useSessionStorage;
