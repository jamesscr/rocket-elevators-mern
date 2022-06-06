import React from 'react';

export default function Navbar() {
	return (
		<div>
			<div id='header' className='navbar-toggleable-md sticky header-sm dark clearfix'>
				<header id='topNav'>
					<div className='container-fluid'>
						<button className='btn btn-mobile' data-toggle='collapse' data-target='.nav-main-collapse'>
							<i className='fa fa-bars'></i>
						</button>

						<a className='logo float-left scrollTo' href='#top'>
							<img src='assets/images/R2.png' alt='logo' />
						</a>

						<div className='navbar-collapse collapse float-right nav-main-collapse submenu-dark'>
							<nav className='nav-main'>
								<ul id='topMain' className='nav nav-pills nav-main nav-onepage'>
									<li className='active'>
										<a href='#top'>HOME</a>
									</li>
									<li>
										<a href='#services'>SERVICES</a>
									</li>
									<li>
										<a href='#work'>PORTFOLIO</a>
									</li>
									<li>
										<a href='#news'>NEWS</a>
									</li>
									<li>
										<a href='#clients'>CLIENTS</a>
									</li>
									<li>
										<a href='#contact'>CONTACT</a>
									</li>
								</ul>
							</nav>
						</div>
					</div>
				</header>
			</div>
		</div>
	);
}
