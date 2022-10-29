import React from 'react';

export default function EmployeeCeo() {
	return (
		<div>
			<section className='section-xs dark'>
				<div className='container-fluid'>
					<div
						className='owl-carousel text-center owl m-0'
						data-plugin-options='{"singleItem": true, "autoPlay": 2500, "navigation": false, "pagination": true, "transitionStyle":"fade"}'
					>
						<div className='testimonial'>
							<figure>
								<img className='rounded' src='assets/images/TA0LESZM3-UCFGNRJSD-0270c50fe0d3-512.jpg' alt='patrick thibault' />
							</figure>

							<div className='testimonial-content p-0'>
								<p className='lead'>CEO Rocket Elavator</p>
								<cite>Patrick Thibault</cite>
							</div>
						</div>
						<div className='testimonial'>
							<figure>
								<img className='rounded' src='assets/images/James.JPEG' alt='james allan' />
							</figure>
							<div className='testimonial-content p-0'>
								<p className='lead'>Employee of the month</p>
								<cite>James Allan</cite>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
