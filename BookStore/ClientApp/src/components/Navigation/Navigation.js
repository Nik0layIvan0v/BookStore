import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
	faSignInAlt,
	faSignOutAlt,
	faLaptopHouse,
	faInfoCircle,
	faStore,
} from '@fortawesome/free-solid-svg-icons';

function Navigation() {
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<div className="container px-4 px-lg-5">
				<a className="navbar-brand" href="/">
					<img
						src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg"
						width={30}
						height={30}
						className="d-inline-block align-top"
						alt=""
					/>
					<span> Book Store</span>
				</a>
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
							<a
								className="nav-link active"
								aria-current="page"
								href="#!"
							>
								<FontAwesomeIcon
									icon={faLaptopHouse}
									className="me-1"
								/>
								Home
							</a>
						</li>
						<li className="nav-item">
							<a className="nav-link" href="#!">
								<FontAwesomeIcon
									icon={faInfoCircle}
									className="me-1"
								/>
								About
							</a>
						</li>
						<li className="nav-item dropdown">
							<a
								className="nav-link dropdown-toggle"
								id="navbarDropdown"
								href="/"
								role="button"
								data-bs-toggle="dropdown"
								aria-expanded="false"
							>
								<FontAwesomeIcon
									icon={faStore}
									className="me-1"
								/>
								Shop
							</a>
							<ul
								className="dropdown-menu"
								aria-labelledby="navbarDropdown"
							>
								<li>
									<a
										className="dropdown-item"
										href="#!"
									>
										All Products
									</a>
								</li>
								<li>
									<hr className="dropdown-divider" />
								</li>
								<li>
									<a
										className="dropdown-item"
										href="#!"
									>
										Popular Items
									</a>
								</li>
								<li>
									<a
										className="dropdown-item"
										href="#!"
									>
										New Arrivals
									</a>
								</li>
							</ul>
						</li>
					</ul>

					<button
						className="btn btn-outline-dark me-1"
						type="submit"
					>
						<FontAwesomeIcon
							icon={faSignOutAlt}
							className="me-1"
						/>
						Register
					</button>
					<button
						className="btn btn-outline-dark me-1"
						type="submit"
					>
						<FontAwesomeIcon
							icon={faSignInAlt}
							className="me-1"
						/>
						Login
					</button>
					<button
						className="btn btn-outline-dark me-1"
						type="submit"
					>
						<FontAwesomeIcon
							icon={faSignOutAlt}
							className="me-1"
						/>
						Logout
					</button>

					<form className="d-flex">
						<button
							className="btn btn-outline-dark"
							type="submit"
						>
							<i className="bi-cart-fill me-1" />
							Cart
							<span className="badge bg-dark text-white ms-1 rounded-pill">
								0
							</span>
						</button>
					</form>
				</div>
			</div>
		</nav>
	);
}

export default Navigation;
