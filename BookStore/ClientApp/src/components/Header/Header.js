import React from 'react';
import { useState, useEffect } from 'react';
import { getGenres } from '../../services/genreService';
import { Link } from 'react-router-dom';

function Header() {
	const [genres, setGenres] = useState([]);

	useEffect(() => {
		getGenres().then((res) => setGenres(res));

		setGenres(genres);
	}, []);

	return (
		<header>
			<nav>
				<ul>
					{genres.map((g) => (
						<li key={g.genreId}>{g.genreContent}</li>
					))}
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
