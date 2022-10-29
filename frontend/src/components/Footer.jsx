import React from 'react';

export default function Footer() {
	return (
		<div>
			<footer id='footer'>
				<div class='container-fluid'>
					<div class='row'>
						<div class='col-md-8'>
							<h6>
								<i class='icon-phone'></i> Call us?
							</h6>

							<p>
								Building the world of tomorrow involves a lot of things than doing business. You are looking to meet the right partner for you project, we can
								provide the best advices for the management.
								<br />
								Rocket Elevators is in service since 1976!{' '}
							</p>
							<h2>
								<span>
									{' '}
									<a href='tel:(438)-825-5455'>438-825-5455</a>
								</span>
							</h2>
						</div>

						<div class='col-md-4'>
							<h3 class='letter-spacing-1'>KEEP IN TOUCH</h3>

							<p>Subscribe to Our Newsletter to get Important News & Offers</p>

							<form class='validate' action='php/newsletter.php' method='post' data-success='Subscribed! Thank you!' data-toastr-position='bottom-right'>
								<div class='input-group'>
									<span class='input-group-addon'>
										<i class='fa fa-envelope'></i>
									</span>
									<input type='email' id='email' name='email' class='form-control required' placeholder='Enter your Email' />
									<span class='input-group-btn'>
										<button class='btn btn-success' type='submit'>
											Subscribe
										</button>
									</span>
								</div>
							</form>
						</div>
					</div>
				</div>

				<div class='copyright'>
					<div class='container'>
						<ul class='float-right m-0 list-inline mobile-block submenu-dark'>
							<li>
								<a href='#'>Terms &amp; Conditions</a>
							</li>
							<li>&bull;</li>
							<li>
								<a href='#'>Privacy</a>
							</li>
						</ul>
						&copy; All Rights Reserved, Rocket Elevator
					</div>
				</div>
			</footer>

			<a href='#' id='toTop'></a>
		</div>
	);
}
