import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSignInAlt,
	faSignOutAlt,
	faLaptopHouse,
	faInfoCircle,
	faStore,
} from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

function Navigation() {
	const { user } = useAuthContext();

	const loggetUser = (
		<>
			<div>Welcome, {user.userName} </div>
			<Link to="/logout" className="btn btn-outline-dark me-1">
				<FontAwesomeIcon icon={faSignOutAlt} className="me-1" />
				Logout
			</Link>

			<form className="d-flex">
				<button className="btn btn-outline-dark">
					<i className="bi-cart-fill me-1" />
					Cart
					<span className="badge bg-dark text-white ms-1 rounded-pill">
						0
					</span>
				</button>
			</form>
		</>
	);

	const notLoggetUser = (
		<>
			<Link to="/register" className="btn btn-outline-dark me-1">
				<FontAwesomeIcon icon={faSignOutAlt} className="me-1" />
				Register
			</Link>
			<Link to="/login" className="btn btn-outline-dark me-1">
				<FontAwesomeIcon icon={faSignInAlt} className="me-1" />
				Login
			</Link>
		</>
	);

	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container px-4 px-lg-5">
				<Link to="/" className="navbar-brand" href="/">
					<img
						src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg"
						width={30}
						height={30}
						className="d-inline-block align-top"
						alt=""
					/>
					<span> Book Store</span>
				</Link>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarSupportedContent"
					aria-controls="navbarSupportedContent"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div
					className="collapse navbar-collapse"
					id="navbarSupportedContent"
				>
					<ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-lg-4">
						<li className="nav-item">
							<Link
								to="/"
								className="nav-link active"
								aria-current="page"
							>
								<FontAwesomeIcon
									icon={faLaptopHouse}
									className="me-1"
								/>
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link to="/my-books" className="nav-link">
								<FontAwesomeIcon
									icon={faInfoCircle}
									className="me-1"
								/>
								About
							</Link>
						</li>
						<li className="nav-item dropdown">
							<Link
								to="/"
								className="nav-link dropdown-toggle"
								id="navbarDropdown"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<FontAwesomeIcon
									icon={faStore}
									className="me-1"
								/>
								Shop
							</Link>
							<ul
								className="dropdown-menu"
								aria-labelledby="navbarDropdown"
							>
								<li>
									<Link
										to="/"
										className="dropdown-item"
									>
										All Products
									</Link>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<Link
										to="/"
										className="dropdown-item"
									>
										Popular Items
									</Link>
								</li>
								<li>
									<Link
										to="/"
										className="dropdown-item"
									>
										New Arrivals
									</Link>
								</li>
							</ul>
						</li>
					</ul>
					{user.userName === '' ? notLoggetUser : loggetUser}
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
