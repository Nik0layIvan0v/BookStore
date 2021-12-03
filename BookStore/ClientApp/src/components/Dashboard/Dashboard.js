import React from 'react';
import BookCard from './BookCard/BookCard';

function Dashboard() {
	return (
		<section className="py-5">
			<div className="container px-4 px-lg-5 mt-5">
				<div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center">
					<BookCard />
					<BookCard />
					<BookCard />
					<BookCard />
					<BookCard />
					<BookCard />
					<BookCard />
					<BookCard />
					<BookCard />
					<BookCard />
				</div>
			</div>
		</section>
	);
}

export default Dashboard;
