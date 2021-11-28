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

/*
     Hook правила:
     1. Хууковете винаги трябва да са на топ левел ниво (първото нещо което да декларираме в компонента)
     2. Могат да се извикват САМО в контекста на фукционални компоненти/други hooks (НЕ МОГАТ ДА СЕ ИЗПОЛЗВАТ В КЛАС КОМПОНЕНТИ!!!)
     3. Използват се за преизползване на функционалност!
     4. НЕ ТРЯБВА да се декларират във вложени функции, условни конструкции или цикли
     5. Хууковете се извикват в един и същ ред, когато компонента се пре-рендерира (така реакт успява да запази стейта при множество извиквания на useState/useEffect etc. )
	6. Всички хyyкове започват с "use{hookname}"
*/
