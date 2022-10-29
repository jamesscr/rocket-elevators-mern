import React from 'react';

export default function Clients() {
	return (
		<div>
			<section id='clients'>
				<div className='container-fluid'>
					<div className='heading-title heading-dotted text-center'>
						<h2>Our Clients</h2>
					</div>

					<ul className='row clients-dotted list-inline'>
						<li className='col-md-3 col-sm-3 col-6'>
							<a href='#'>
								<img className='img-fluid' src='assets/images/logos/images1.png' alt='HALFEN' />
							</a>
						</li>
						<li className='col-md-3 col-sm-3 col-6'>
							<a href='#'>
								<img className='img-fluid' src='assets/images/logos/images2.jfif' alt='HEART' />
							</a>
						</li>
						<li className='col-md-3 col-sm-3 col-6'>
							<a href='#'>
								<img className='img-fluid' src='assets/images/logos/images3.jfif' alt='TALORMADE' />
							</a>
						</li>
						<li className='col-md-3 col-sm-3 col-6'>
							<a href='#'>
								<img className='img-fluid' src='assets/images/logos/images4.png' alt='ONTARIO' />
							</a>
						</li>
						<li className='col-md-3 col-sm-3 col-6'>
							<a href='#'>
								<img className='img-fluid' src='assets/images/logos/images5.jfif' alt='HEALTH' />
							</a>
						</li>
						<li className='col-md-3 col-sm-3 col-6'>
							<a href='#'>
								<img className='img-fluid' src='assets/images/logos/images6.png' alt='UNIVERSITY' />
							</a>
						</li>
						<li className='col-md-3 col-sm-3 col-6'>
							<a href='#'>
								<img className='img-fluid' src='assets/images/logos/images7.jfif' alt='PROVIGO' />
							</a>
						</li>
						<li className='col-md-3 col-sm-3 col-6'>
							<a href='#'>
								<img className='img-fluid' src='assets/images/logos/images8.png' alt='CASEE' />
							</a>
						</li>
					</ul>
				</div>
			</section>
		</div>
	);
}
