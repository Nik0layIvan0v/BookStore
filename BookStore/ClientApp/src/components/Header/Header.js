import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../logo.svg';
import './Header.css';

function Header() {
	return (
		<nav className="navigation">
			<div className="nav-logo">
				<Link to="/" className="logo-text" href="/">
					<Logo className="l" />
					Book Store
				</Link>
			</div>
			<div className="nav-buttons">
				<Link className="nav-item" to="/login">
					Login
				</Link>
				<Link className="nav-item" to="/register">
					Register
				</Link>
				<Link className="nav-item" to="/login">
					My Account
				</Link>
				<Link className="nav-item" to="/login">
					Add Book
				</Link>
				<Link className="nav-item" to="/login">
					Logout
				</Link>
			</div>
		</nav>
	);
}

export default Header;
