import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
	return (
		<header>
			<nav>
				<ul>
					<li>Home</li>
					<li>Books</li>
					<li>About</li>
					<li>Home</li>
				</ul>
			</nav>
		</header>
	);
}

export default Header;

{
	/* <Link to="/" className="navbar-brand" href="/home">
					<img
						src="https://getbootstrap.com/docs/4.1/assets/brand/bootstrap-solid.svg"
						width={30}
						height={30}
						className="d-inline-block align-top"
						alt=""
					/>
					Book Store
				</Link> */
}
