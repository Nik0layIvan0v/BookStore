import React from 'react';
import { useEffect, useState, useRef } from 'react';
import AuthContext from './contexts/authContext';
import Example from './components/ClassComponentsExample/Example';
import { Route } from 'react-router';
import CharacterList from './hooks/CharacterList';
import './App.css';
import AppLoader from './components/AppLoader/AppLoader';

function App() {
	return (
		<div className="App">
			<AppLoader />
		</div>
	);
}

/*
		Asp.Net core fetch data.
		const [array, setArray] = useState([]);

		useEffect(() => {
		    fetch('https://localhost:3001/api/home')
		        .then((x) => x.json())
		        .then((res) => setArray(res));
		}, []);
*/

/*

function App() {
	const [services, setServices] = useState([]);

	const [contextData, setContextData] = useState('Pesho');
	const [username, setUsername] = useState('Controlled Field');
	const [isValid, setIsValid] = useState(false);
	const refExample = useRef();

	useEffect(() => {
		fetch('http://localhost:3030/jsonstore/services')
			.then((resp) => resp.json())
			.then((result) => setServices(Object.values(result)));
	}, []);

	const submitHandler = (e) => {
		e.preventDefault();

		let formData = new FormData(e.currentTarget);
		let username = formData.get('username');
		let password = formData.get('password');
		let rememberMe = formData.get('rememberMe');
		let services = formData.get('services');

		console.log(username);
		console.log(password);
		console.log(services);
		console.log(rememberMe); //on or null -> default behavior
		console.log(Boolean(rememberMe)); //true or false
	};

	const onChangeHandler = (e) => {
		setUsername(e.target.value);

		if (username.length > 5) {
			setIsValid(true);
		} else {
			setIsValid(false);
		}
	};

	const onServiceChangeHandler = (e) => {
		console.log(e.target.value);
		setUsername('Controlled Field - changed data');
		let refValue = refExample.current.value;
		console.log(refValue);
		refExample.current.value = '';
	};

	return (
		<AuthContext.Provider value={contextData}>
			<>
				<div className="login-form">
					<form method="POST" onSubmit={submitHandler}>
						<div>
							<label htmlFor="username">Username</label>
							<input
								type="text"
								name="username"
								id="username"
								// defaultValue="uncontrolled form"
								onChange={onChangeHandler}
								value={username}
							/>
						</div>
						<div
							style={{
								color: 'red',
								fontSize: '10px',
								padding: '0px',
								margin: '0px',
								textAlign: 'center',
							}}
						>
							{isValid === false ? (
								<span>This input is NOT valid!</span>
							) : (
								''
							)}
						</div>
						<div>
							<label htmlFor="password">Password</label>
							<input
								type="text"
								name="password"
								id="password"
								defaultValue="Uncontrolled field"
							/>
						</div>
						<div>
							<label htmlFor="refExample">
								RefExample
							</label>
							<input
								type="text"
								name="refExample"
								id="refExample"
								defaultValue="Ref field"
								ref={refExample}
							/>
						</div>
						<div>
							<label htmlFor="services">
								Select clinet type:{' '}
							</label>
							<div>
								<select
									type="select"
									name="services"
									id="services"
									onChange={onServiceChangeHandler}
								>
									{services.map((s) => (
										<option
											key={s._id}
											value={s._id}
										>
											{s.name}
										</option>
									))}
								</select>
							</div>
						</div>
						<div>
							<label htmlFor="rememberMe">
								Remember me?
							</label>
							<input
								type="checkbox"
								name="rememberMe"
								id="rememberMe"
								defaultChecked
							/>
						</div>
						<input type="submit" value="Login" />
					</form>
				</div>

				<div className="classComponentExample">
					<Example
						title="Example Props title is passed
					by parent!"
					/>
				</div>

				<CharacterList />
			</>
		</AuthContext.Provider>
	);
}
*/
export default App;
