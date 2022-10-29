import React from 'react';
import Navbar from '../components/Navbar';
import QuoteForm from '../components/QuoteForm';

export default function Quote() {
	return (
		<div>
			<nav className='quot-nav-top'>
				<Navbar />
			</nav>
			<div className='container qout-container'>
				<QuoteForm />
			</div>
		</div>
	);
}
