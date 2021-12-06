import React from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import * as authService from '../../services/authService';

function Register() {
	const registerHandler = (e) => {
		e.preventDefault();
		const { username, email, password } = Object.fromEntries(
			new FormData(e.currentTarget)
		);

		authService
			.registerUser({ username, email, password })
			.then((res) => console.log(res))
			.catch((err) => console.log(err));
	};

	return (
		<Container fluid="md" className="mt-3">
			<h2 className="fw-bolder mb-4">Register</h2>
			<Form onSubmit={registerHandler}>
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
						id="email"
						type="email"
						name="email"
						placeholder="Example Username"
					/>
					<label htmlFor="email">Email Address: </label>
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
						Register
					</Button>
				</Container>
			</Form>
		</Container>
	);
}

export default Register;
