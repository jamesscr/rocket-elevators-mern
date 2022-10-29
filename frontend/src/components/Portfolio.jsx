import React from 'react';

export default function Portfolio() {
	return (
		<div>
			<section id='work'>
				<div className='container-fluid'>
					<div className='heading-title heading-dotted text-center'>
						<h2>Portfolio</h2>
					</div>

					<div className='text-center'>
						<ul className='nav nav-pills mix-filter mb-60'>
							<li data-filter='all' className='filter active'>
								<a href='#'>All</a>
							</li>
							<li data-filter='awards' className='filter'>
								<a href='#'>Awards</a>
							</li>
							<li data-filter='commercial' className='filter'>
								<a href='#'>Commercial and Coporate</a>
							</li>
							<li data-filter='residential' className='filter'>
								<a href='#'>Residential</a>
							</li>
							<hr />
						</ul>
					</div>
				</div>

				<div id='portfolio' className='portfolio-nogutter'>
					<div className='row mix-grid'>
						<div className='col-md-3 col-sm-3 mix residential'>
							<div className='item-box'>
								<figure>
									<span className='item-hover'>
										<span className='overlay dark-5'></span>
										<span className='inner'>
											<a
												className='ico-rounded lightbox'
												href='ajax/portfolio-detail-modal-residential.html'
												data-plugin-options='{"type":"ajax", "closeOnBgClick":false}'
											>
												<span className='glyphicon glyphicon-option-horizontal fs-20'></span>
											</a>
										</span>
									</span>

									<img className='img-fluid' src='assets/images/portfolio/resi1.jpg' width='600' height='399' alt='' />
								</figure>

								<div className='item-box-desc'>
									<h3 className='title text-center'>Ganser lift Project</h3>
									<hr />
								</div>
							</div>
						</div>

						<div className='col-md-3 col-sm-3 mix residential'>
							<div className='item-box'>
								<figure>
									<span className='item-hover'>
										<span className='overlay dark-5'></span>
										<span className='inner'>
											<a
												className='ico-rounded lightbox'
												href='ajax/portfolio-detail-modal-residential.html'
												data-plugin-options='{"type":"ajax", "closeOnBgClick":false}'
											>
												<span className='glyphicon glyphicon-option-horizontal fs-20'></span>
											</a>
										</span>
									</span>

									<img className='img-fluid' src='assets/images/portfolio/resi2.jpg' width='600' height='399' alt='portfolio' />
								</figure>

								<div className='item-box-desc'>
									<h3 className='title text-center'>Stiltz Home Project</h3>
									<hr />
								</div>
							</div>
						</div>

						<div className='col-md-3 col-sm-3 mix residential'>
							<div className='item-box'>
								<figure>
									<span className='item-hover'>
										<span className='overlay dark-5'></span>
										<span className='inner'>
											<a
												className='ico-rounded lightbox'
												href='ajax/portfolio-detail-modal-residential.html'
												data-plugin-options='{"type":"ajax", "closeOnBgClick":false}'
											>
												<span className='glyphicon glyphicon-option-horizontal fs-20'></span>
											</a>
										</span>
									</span>
									<img className='img-fluid' src='assets/images/portfolio/resi3.jpg' width='600' height='399' alt='portfolio' />
								</figure>

								<div className='item-box-desc'>
									<h3 className='title text-center'>Vacuum Elevators Project</h3>
									<hr />
								</div>
							</div>
						</div>

						<div className='col-md-3 col-sm-3 mix residential'>
							<div className='item-box'>
								<figure>
									<span className='item-hover'>
										<span className='overlay dark-5'></span>
										<span className='inner'>
											<a
												className='ico-rounded lightbox'
												href='ajax/portfolio-detail-modal-residential.html'
												data-plugin-options='{"type":"ajax", "closeOnBgClick":false}'
											>
												<span className='glyphicon glyphicon-option-horizontal fs-20'></span>
											</a>
										</span>
									</span>

									<img className='img-fluid' src='assets/images/portfolio/resi4.jpg' width='600' height='399' alt='residential' />
								</figure>

								<div className='item-box-desc'>
									<h3 className='title text-center'>Home Elevators Project</h3>
									<hr />
								</div>
							</div>
						</div>

						<div className='col-md-3 col-sm-3 mix commercial'>
							<div className='item-box'>
								<figure>
									<span className='item-hover'>
										<span className='overlay dark-5'></span>
										<span className='inner'>
											<a
												className='ico-rounded lightbox'
												href='ajax/portfolio-detail-modal-commercial.html'
												data-plugin-options='{"type":"ajax", "closeOnBgClick":false}'
											>
												<span className='glyphicon glyphicon-option-horizontal fs-20'></span>
											</a>
										</span>
									</span>

									<img className='img-fluid' src='assets/images/portfolio/Astoria-hotel.jpg' width='600' height='399' alt='portfolio' />
								</figure>

								<div className='item-box-desc'>
									<h3 className='title text-center'>Astoria Hotel Project</h3>
									<hr />
								</div>
							</div>
						</div>

						<div className='col-md-3 col-sm-3 mix commercial'>
							<div className='item-box'>
								<figure>
									<span className='item-hover'>
										<span className='overlay dark-5'></span>
										<span className='inner'>
											<a
												className='ico-rounded lightbox'
												href='ajax/portfolio-detail-modal-commercial.html'
												data-plugin-options='{"type":"ajax", "closeOnBgClick":false}'
											>
												<span className='glyphicon glyphicon-option-horizontal fs-20'></span>
											</a>
										</span>
									</span>

									<img className='img-fluid' src='assets/images/portfolio/Global-Giant-China-Harbour.jpg' width='600' height='399' alt='portfolio' />
								</figure>

								<div className='item-box-desc'>
									<h3 className='title text-center'>Global Giant China Harbour Project</h3>
									<hr />
								</div>
							</div>
						</div>

						<div className='col-md-3 col-sm-3 mix commercial'>
							<div className='item-box'>
								<figure>
									<span className='item-hover'>
										<span className='overlay dark-5'></span>
										<span className='inner'>
											<a
												className='ico-rounded lightbox'
												href='ajax/portfolio-detail-modal-commercial.html'
												data-plugin-options='{"type":"ajax", "closeOnBgClick":false}'
											>
												<span className='glyphicon glyphicon-option-horizontal fs-20'></span>
											</a>
										</span>
									</span>

									<img className='img-fluid' src='assets/images/portfolio/Japan-Belluna.jpg' width='600' height='399' alt='portfolio' />
								</figure>

								<div className='item-box-desc'>
									<h3 className='title text-center'>Japan's Belluna Project</h3>
									<hr />
								</div>
							</div>
						</div>

						<div className='col-md-3 col-sm-3 mix commercial'>
							<div className='item-box'>
								<figure>
									<span className='item-hover'>
										<span className='overlay dark-5'></span>
										<span className='inner'>
											<a
												className='ico-rounded lightbox'
												href='ajax/portfolio-detail-modal-commercial.html'
												data-plugin-options='{"type":"ajax", "closeOnBgClick":false}'
											>
												<span className='glyphicon glyphicon-option-horizontal fs-20'></span>
											</a>
										</span>
									</span>

									<img className='img-fluid' src='assets/images/portfolio/Sri-Lanka.jpg' width='600' height='399' alt='' />
								</figure>

								<div className='item-box-desc'>
									<h3 className='title text-center'>Sri Lanka Project</h3>
									<hr />
								</div>
							</div>
						</div>

						<div className='col-md-3 col-sm-3 mix awards'>
							<div className='item-box'>
								<figure>
									<span className='item-hover'>
										<span className='overlay dark-5'></span>
										<span className='inner'>
											<a
												className='ico-rounded lightbox'
												href='ajax/portfolio-detail-modal-award.html'
												data-plugin-options='{"type":"ajax", "closeOnBgClick":false}'
											>
												<span className='glyphicon glyphicon-option-horizontal fs-20'></span>
											</a>
										</span>
									</span>

									<img className='img-fluid' src='assets/images/portfolio/2016-Build-It-Awards.jpg' width='600' height='399' alt='built' />
								</figure>

								<div className='item-box-desc'>
									<h3 className='title text-center'> Build It Awards 2016</h3>
									<hr />
								</div>
							</div>
						</div>

						<div className='col-md-3 col-sm-3 mix awards'>
							<div className='item-box'>
								<figure>
									<span className='item-hover'>
										<span className='overlay dark-5'></span>
										<span className='inner'>
											<a
												className='ico-rounded lightbox'
												href='ajax/portfolio-detail-modal-award.html'
												data-plugin-options='{"type":"ajax", "closeOnBgClick":false}'
											>
												<span className='glyphicon glyphicon-option-horizontal fs-20'></span>
											</a>
										</span>
									</span>

									<img
										className='img-fluid'
										src='assets/images/portfolio/2019-Elevator-World-Project-of-the-Year.jfif'
										width='600'
										height='399'
										alt='portfolio'
									/>
								</figure>

								<div className='item-box-desc'>
									<h3 className='title text-center'>Award best project of the year 2017 </h3>
									<hr />
								</div>
							</div>
						</div>

						<div className='col-md-3 col-sm-3 mix awards'>
							<div className='item-box'>
								<figure>
									<span className='item-hover'>
										<span className='overlay dark-5'></span>
										<span className='inner'>
											<a
												className='ico-rounded lightbox'
												href='ajax/portfolio-detail-modal-award.html'
												data-plugin-options='{"type":"ajax", "closeOnBgClick":false}'
											>
												<span className='glyphicon glyphicon-option-horizontal fs-20'></span>
											</a>
										</span>
									</span>

									<img className='img-fluid' src='assets/images/portfolio/2017-Award-best-project-of-the-year.jpg' width='600' height='399' alt='portf' />
								</figure>

								<div className='item-box-desc'>
									<h3 className='title text-center'>Built it Award 2017</h3>
									<hr />
								</div>
							</div>
						</div>

						<div className='col-md-3 col-sm-3 mix awards'>
							<div className='item-box'>
								<figure>
									<span className='item-hover'>
										<span className='overlay dark-5'></span>
										<span className='inner'>
											<a
												className='ico-rounded lightbox'
												href='ajax/portfolio-detail-modal-award.html'
												data-plugin-options='{"type":"ajax", "closeOnBgClick":false}'
											>
												<span className='glyphicon glyphicon-option-horizontal fs-20'></span>
											</a>
										</span>
									</span>

									<img className='img-fluid' src='assets/images/portfolio/2020-award.png' width='600' height='399' alt='portf' />
								</figure>

								<div className='item-box-desc'>
									<h3 className='title text-center'>Elevator elite entrepreneurial Awards </h3>
									<hr />
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
