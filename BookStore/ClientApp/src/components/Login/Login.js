import React from 'react';
import * as authService from '../../services/authService';
import { Form, Button, Container } from 'react-bootstrap';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
	const { login } = useAuthContext();
	const navigate = useNavigate();

	const loginSubmitHandler = (e) => {
		e.preventDefault();

		const { username, password } = Object.fromEntries(
			new FormData(e.currentTarget)
		);

		authService
			.loginUser({ username, password })
			.then((data) => {
				login(data);
				navigate('/');
			})
			.catch((err) => console.log('use notification =>', err.message));
	};

	return (
		<Container fluid="md" className="mt-3">
			<h2 className="fw-bolder mb-4">Login</h2>
			<Form onSubmit={loginSubmitHandler}>
				<Form.Floating className="mb-3">
					<Form.Control
						id="username"
						type="username"
						name="username"
						placeholder="Example@Example.com"
					/>
					<label htmlFor="username">Username: </label>
				</Form.Floating>
				<Form.Floating className="mb-3">
					<Form.Control
						id="password"
						type="password"
						name="password"
						placeholder="Password"
					/>
					<label htmlFor="password">Password: </label>
				</Form.Floating>
				<Container className="mt-3">
					<Button variant="outline-dark m-auto" type="submit">
						Login
					</Button>
				</Container>
			</Form>
		</Container>
	);
}

export default Login;
