import React from 'react';

export default function Services() {
	return (
		<div>
			<section id='services'>
				<div className='container-fluid'>
					<div className='heading-title heading-dotted text-center'>
						<h2>Services</h2>
					</div>

					<div className='row service-item-list'>
						<div className='col-12 col-md-4'>
							<div className='service-item service-item-box float-left'>
								<a className='service-image' href='pack-realestate-service-item.html'>
									<img className='img-fluid' src='/assets/images/AdobeStock_42622540.jpeg' width='1200' height='800' alt='residential elevators' />
								</a>

								<h4 className='service-item-price'>
									<strong className='text-primary'>Residential Services</strong>
								</h4>

								<p className='service-item-desc fs-15'>
									Rocket Elevators residential service are innovative products that offer unique solutions with creativity in mind.
								</p>

								<hr />

								<div className='btn btn-dark btn-block'>
									<a href='residential.html'>READ MORE</a>
								</div>
							</div>
						</div>

						<div className='col-12 col-md-4'>
							<div className='service-item service-item-box float-right'>
								<a className='service-image' href='pack-realestate-service-item.html'>
									<img className='img-fluid' src='/assets/images/AdobeStock_53477661.jpeg' width='1200' height='800' alt='commercial/hybrid elevators' />
								</a>

								<h4 className='service-item-price'>
									<strong className='text-primary'>Quote Form Services</strong>
								</h4>

								<p className='service-item-desc fs-15'>Try our quote form to get the best instant calcultion price, of the services needed.</p>

								<hr />

								<div className='btn btn-dark btn-block'>
									<a href='quotecalc.html'>GET A QUOTE</a>
								</div>
							</div>
						</div>

						<div className='col-12 col-md-4'>
							<div className='service-item service-item-box'>
								<a className='service-image' href='pack-realestate-service-item.html'>
									<img className='img-fluid' src='/assets/images/AdobeStock_33975620.jpeg' width='1200' height='800' alt='corporate elevators' />
								</a>

								<h4 className='service-item-price'>
									<strong className='text-primary'>Commercial and Corporate</strong>
								</h4>

								<p className='service-item-desc fs-15'>Rocket Elevator specializes in the manufacture of corporate elevators and dumbwaiters.</p>
								<hr />
								<div className='btn btn-dark btn-block'>
									<a href='corporate.html'>READ MORE</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
