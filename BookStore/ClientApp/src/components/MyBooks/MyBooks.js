import React from 'react';
import { useState, useEffect } from 'react';
import { Carousel, Container } from 'react-bootstrap';
import { isAuth } from '../../hoc/isAuth';
import { useFetch } from '../../hooks/useFetch';

function MyBooks() {
	const [books, setBooks] = useState([]);

	useEffect(() => {
		fetch('https://dog.ceo/api/breeds/image/random/3')
			.then((res) => res.json())
			.then((result) => setBooks(result.message));
	}, []);

	return (
		<Container>
			<Carousel>
				{books.map((image) => (
					<Carousel.Item key={image}>
						<img
							className="d-block w-100"
							src={image}
							alt="First slide"
						/>
						<Carousel.Caption>
							<h3>First slide label</h3>
							<p>
								Nulla vitae elit libero, a pharetra
								augue mollis interdum.
							</p>
						</Carousel.Caption>
					</Carousel.Item>
				))}
			</Carousel>
		</Container>
	);
}

const EnhancedComponent = isAuth(MyBooks);

export default EnhancedComponent;
