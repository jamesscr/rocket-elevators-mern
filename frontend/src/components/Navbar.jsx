import React, {useState} from 'react';
import {HashLink as Link} from 'react-router-hash-link';

export default function Navbar() {
	return (
		<div id='header' className='navbar-toggleable-md sticky header-sm dark clearfix'>
			<header id='topNav'>
				<div className='container-fluid'>
					<button className='btn btn-mobile' data-toggle='collapse sticky' data-target='.nav-main-collapse '>
						<i className='fa fa-bars'></i>
					</button>

					<Link className='logo float-left' smooth to='/#top'>
						<img src='assets/images/R2.png' alt='logo' />
					</Link>

					<div className='navbar-collapse collapse float-right nav-main-collapse submenu-dark'>
						<nav className='nav-main'>
							<ul id='topMain' className='nav nav-pills nav-main nav-onepage'>
								<li className='active scrollTo'>
									<Link smooth to='/#top'>
										HOME
									</Link>
								</li>
								<li>
									<Link to='/#services'>SERVICES</Link>
								</li>
								<li>
									<Link to='/#work'>PORTFOLIO</Link>
								</li>
								<li>
									<Link to='/#news'>NEWS</Link>
								</li>
								<li>
									<Link to='/#clients'>CLIENTS</Link>
								</li>
								<li>
									<Link to='/#contact'>CONTACT</Link>
								</li>
							</ul>
						</nav>
					</div>
				</div>
			</header>
		</div>
	);
}
