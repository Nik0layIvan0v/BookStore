import React, { useContext } from 'react';
import { Form, Button, Container } from 'react-bootstrap';
import { AuthContext } from '../../contexts/AuthContext';
import { useNavigate } from 'react-router-dom';

function Login() {
	const { login } = useContext(AuthContext);
	const navigate = useNavigate();

	const loginSubmitHandler = (e) => {
		e.preventDefault();

		const { email, password, checkMeOut } = Object.fromEntries(
			new FormData(e.currentTarget)
		);

		login(email, password, checkMeOut);
		navigate('/');
	};

	return (
		<Container className="mt-3">
			<Form onSubmit={loginSubmitHandler}>
				<Form.Group className="mb-3" controlId="formBasicEmail">
					<Form.Label>Email address</Form.Label>
					<Form.Control
						name="email"
						type="email"
						placeholder="Enter email"
					/>
					<Form.Text className="text-muted">
						We'll never share your email with anyone else.
					</Form.Text>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicPassword">
					<Form.Label>Password</Form.Label>
					<Form.Control
						name="password"
						type="password"
						placeholder="Password"
					/>
				</Form.Group>

				<Form.Group className="mb-3" controlId="formBasicCheckbox">
					<Form.Check
						name="checkMeOut"
						type="checkbox"
						label="Check me out"
					/>
				</Form.Group>

				<Button variant="primary" type="submit">
					Submit
				</Button>
			</Form>
		</Container>
	);
}

export default Login;
