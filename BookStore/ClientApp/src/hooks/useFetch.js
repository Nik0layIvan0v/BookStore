import { useState, useEffect } from 'react';

const useFetch = (url) => {
	const [state, setState] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [error, setError] = useState(null);

	useEffect(() => {
		setIsLoading(true);
		fetch(url)
			.then((res) => res.json())
			.then((response) => {
				setState(response.results);
				setIsLoading(false);
			})
			.catch((err) => setError(err));
	}, [url, error]);

	return { state, isLoading, error };
};

export default useFetch;
