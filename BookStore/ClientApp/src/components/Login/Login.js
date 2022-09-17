import React, { useState } from 'react';
import * as authService from '../../services/authService';
import { Form, Button, Container, Alert } from 'react-bootstrap';
import { useAuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';
import AlertValidation from '../Common/AlertValidation';

function Login() {
	const { login } = useAuthContext();
	const navigate = useNavigate();
	const [showError, setShowError] = useState(false);

	const loginSubmitHandler = (e) => {
		e.preventDefault();

		const { username, password } = Object.fromEntries(
			new FormData(e.currentTarget)
		);

		authService
			.loginUser({ username, password })
			.then((response) => {
				if (!response.status !== 200) {
					throw new Error(response);
				}
				return response.json();
			})
			.then((data) => {
				login(data);
				navigate('/');
			})
			.catch(() => {
				setTimeout(() => {
					setShowError(true);
				}, 1000);
				setShowError(false);
			});
	};

	return (
		<Container fluid="md" className="mt-3">
			<AlertValidation
				message="invalid username"
				isVisible={showError}
			/>
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
