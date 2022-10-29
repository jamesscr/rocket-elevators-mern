import React from 'react';

export default function Contacts() {
	return (
		<div>
			<section id='contact'>
				<div className='container-fluid'>
					<header className='text-center mb-60'>
						<h2>Contact Us</h2>
					</header>

					<div className='row'>
						<div className='col-md-8 col-sm-8'>
							<h3>
								Drop us a line or just say{' '}
								<strong>
									<em>Hello!</em>
								</strong>
							</h3>

							<div id='alert_success' className='alert alert-success mb-30'>
								<button type='button' className='close' data-dismiss='alert' aria-hidden='true'>
									&times;
								</button>
								<strong>Thank You!</strong> Your message successfully sent!
							</div>

							<div id='alert_failed' className='alert alert-danger mb-30'>
								<button type='button' className='close' data-dismiss='alert' aria-hidden='true'>
									&times;
								</button>
								<strong>[SMTP] Error!</strong> Internal server error!
							</div>
							<div id='alert_mandatory' className='alert alert-danger mb-30'>
								<button type='button' className='close' data-dismiss='alert' aria-hidden='true'>
									&times;
								</button>
								<strong>Sorry!</strong> You need to complete all mandatory (*) fields!
							</div>

							<form action='php/contact.php' method='post' enctype='multipart/form-data'>
								<fieldset>
									<input type='hidden' name='action' value='contact_send' />

									<div className='row'>
										<div className='col-md-4'>
											<label for='contact:name'>Full Name *</label>
											<input required type='text' value='' className='form-control' name='contact[name][required]' id='contact:name' />
										</div>
										<div className='col-md-4'>
											<label for='business:name'>Business Name *</label>
											<input required type='text' value='' className='form-control' name='contact[name][required]' id='contact:name' />
										</div>
										<div className='col-md-4'>
											<label for='contact:email'>E-mail Address *</label>
											<input required type='email' value='' className='form-control' name='contact[email][required]' id='contact:email' />
										</div>
									</div>
									<div className='row'>
										<div className='col-md-4'>
											<label for='contact:phone'>Phone *</label>
											<input type='text' value='' className='form-control' name='contact[phone]' id='contact:phone' />
										</div>
										<div className='col-md-4'>
											<label for='contact:name'>Project Name *</label>
											<input required type='text' value='' className='form-control' name='contact[name][required]' id='contact:name' />
										</div>
										<div className='col-md-4'>
											<label for='contact:name'>Project Description *</label>
											<input required type='text' value='' className='form-control' name='contact[name][required]' id='contact:name' />
										</div>
									</div>
									<div className='row'>
										<div className='col-md-8'>
											<label for='contact:subject'>Project Description *</label>
											<input required type='text' value='' className='form-control' name='contact[subject][required]' id='contact:subject' />
										</div>
										<div className='col-md-4'>
											<label for='contact_department'>Department</label>
											<select className='form-control pointer' name='contact[department]'>
												<option value=''>--- Select ---</option>
												<option value='Marketing'>Management</option>
												<option value='Webdesign'>Quality</option>
												<option value='Architecture'>Information</option>
											</select>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-12'>
											<label for='contact:message'>Message *</label>
											<textarea required maxlength='10000' rows='8' className='form-control' name='contact[message]' id='contact:message'></textarea>
										</div>
									</div>
									<div className='row'>
										<div className='col-md-12'>
											<label for='contact:attachment'>File Attachment</label>

											<input className='custom-file-upload' type='file' id='file' name='contact[attachment]' data-btn-text='Select a File' />
											<small className='text-muted block'>Max file size: 10Mb (zip/pdf/jpg/png)</small>
										</div>
									</div>
								</fieldset>

								<div className='row'>
									<div className='col-md-12'>
										<button type='submit' className='btn btn-primary'>
											<i className='fa fa-check'></i> SEND MESSAGE
										</button>
									</div>
								</div>
							</form>
						</div>

						<div className='col-md-4 col-sm-4'>
							<h2>Visit Us</h2>
							<div className='h-450'>
								<iframe
									src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2798.5158879660094!2d-73.56930918443756!3d45.45941077910084!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cc91067ae856153%3A0x5ba73b190d3e61d2!2s4468%20Wellington%20St%2C%20Verdun%2C%20QC%20H4G%202G4!5e0!3m2!1sen!2sca!4v1590865458808!5m2!1sen!2sca'
									width='600'
									height='450'
									frameborder='0'
									style={{border: 0}}
									allowfullscreen=''
									aria-hidden='false'
									tabindex='0'
								></iframe>
							</div>
							<hr />
							<p>
								<span className='block'>
									<strong>
										<i className='fa fa-map-marker'></i> Address:
									</strong>{' '}
									4468 Rue Wellington, Suite 204, Quebec-Canada, H4G 1W5
								</span>
								<span className='block'>
									<strong>
										<i className='fa fa-phone'></i> Phone:
									</strong>{' '}
									<a href='tel:(438)-825-5455'>438-825-5455</a>
								</span>
								<span className='block'>
									<strong>
										<i className='fa fa-envelope'></i> Email:
									</strong>{' '}
									<a href='info@codeboxx.biz'>info@codeboxx.biz</a>
								</span>
							</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
