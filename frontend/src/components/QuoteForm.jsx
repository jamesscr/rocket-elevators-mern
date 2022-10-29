import React from 'react';

export default function QuoteForm() {
	return (
		<div className='container'>
			<div className='card card-default'>
				<div className='card-heading'>
					<h1 className='quot-card'>Get a Quote</h1>
				</div>

				<div className='card-block'>
					<form className='validate' action='php/contact.php' method='post' enctype='multipart/form-data' data-success='Sent! Thank you!' data-toastr-position='top-right'>
						<fieldset>
							<input type='hidden' name='action' value='contact_send' />

							<div>
								<div className='row'>
									<div className='col-md-2 col-sm-4'>
										<label>Choose Building Type*</label>
										<select name='contact[Type]' className='form-control pointer required' id='building'>
											<option value='0'>------- Select -------</option>
											<option value='1'>Residential</option>
											<option value='2'>Commercial</option>
											<option value='3'>Corporate</option>
											<option value='4'>Hybrid</option>
										</select>
									</div>
								</div>
							</div>

							<br />

							<div id='residentialForm' style={{display: 'none'}}>
								<div className='row'>
									<div className='col-md-4 col-sm-4'>
										<label>Number of Apartments*</label>
										<input type='number' name='residential[apartments]' value='' min='1' className='form-control required resFields' />
									</div>
									<div className='col-md-4 col-sm-4'>
										<label>Number of Floors*</label>
										<input type='number' name='residential[floors]' value='' min='1' className='form-control required resFields' />
									</div>
									<div className='col-md-4 col-sm-4'>
										<label>Number of Basements*</label>
										<input type='number' name='residential[basements]' value='' min='1' className='form-control required' />
									</div>
								</div>
							</div>

							<div id='commercialForm' style={{display: 'none'}}>
								<div className='row'>
									<div className='col-md-6 col-sm-6'>
										<label>Number of Distinct Businesses*</label>
										<input type='number' name='commercial[businesses]' value='' min='1' className='form-control required' />
									</div>
									<div className='col-md-6 col-sm-6'>
										<label>Number of Floors*</label>
										<input type='number' name='commercial[floors]' value='' min='1' className='form-control required' />
									</div>
								</div>
								<div className='row'>
									<div className='col-md-4 col-sm-4'>
										<label>Number of Basements*</label>
										<input type='number' name='commercial[basements]' value='' min='1' className='form-control required' />
									</div>
									<div className='col-md-4 col-sm-4'>
										<label>Number of Elevator Cages Needed*</label>
										<input type='number' name='commercial[cages]' value='' min='1' className='form-control required comField' />
									</div>
									<div className='col-md-4 col-sm-4'>
										<label>Number of Parking Spaces*</label>
										<input type='number' name='commercial[parking]' value='' min='1' className='form-control required' />
									</div>
								</div>
							</div>

							<div id='corporateForm' style={{display: 'none'}}>
								<div className='row'>
									<div className='col-md-6 col-sm-6'>
										<label>Number of Separate Tenant Companies*</label>
										<input type='number' name='contact[companies]' value='' min='1' className='form-control required' />
									</div>
									<div className='col-md-6 col-sm-6'>
										<label>Number of Floors*</label>
										<input type='number' name='contact[floors]' value='' min='1' className='form-control required corporateField' />
									</div>
								</div>
								<div className='row'>
									<div className='col-md-4 col-sm-4'>
										<label>Number of Basements*</label>
										<input type='number' name='contact[basements]' value='' min='1' className='form-control required corporateField' />
									</div>
									<div className='col-md-4 col-sm-4'>
										<label>Number of Parking Spaces*</label>
										<input type='number' name='contact[parking]' value='' min='1' className='form-control required' />
									</div>
									<div className='col-md-4 col-sm-4'>
										<label>Number of Occupants per Floor*</label>
										<input type='number' name='contact[occupants]' value='' min='1' className='form-control required corporateField' />
									</div>
								</div>
							</div>

							<div id='hybridForm' style={{display: 'none'}}>
								<div className='row'>
									<div className='col-md-4 col-sm-4'>
										<label>Number of Distinct Businesses*</label>
										<input type='number' name='contact[businesses]' value='' min='1' className='form-control required' />
									</div>
									<div className='col-md-4 col-sm-4'>
										<label>Number of Floors*</label>
										<input type='number' name='contact[floors]' value='' min='1' className='form-control required hybFields' />
									</div>
									<div className='col-md-4 col-sm-4'>
										<label>Number of Basements*</label>
										<input type='number' name='contact[basements]' value='' min='1' className='form-control required hybFields' />
									</div>
								</div>
								<div className='row'>
									<div className='col-md-4 col-sm-4'>
										<label>Number of Parking Spaces*</label>
										<input type='number' name='contact[parking]' value='' min='1' className='form-control required' />
									</div>
									<div className='col-md-4 col-sm-4'>
										<label>Max Occupants per Floor*</label>
										<input type='number' name='contact[occupants]' value='' min='1' className='form-control required hybFields' />
									</div>
									<div className='col-md-4 col-sm-4'>
										<label>Number of Hours of Activity*</label>
										<input type='number' name='contact[activity]' value='' min='1' max='24' className='form-control required' />
									</div>
								</div>
							</div>

							<br />

							<div className='row'>
								<div className='col-md-4 col-sm-4'>
									<label>Number of Elevators*</label>
									<input type='text' name='contact[elevatorsHyb]' value='0' className='form-control required elevator' readonly />
								</div>
							</div>

							<hr />

							<div>
								<div className='radioButtons'>
									<h4>Select the range of elevators : </h4>
									<div className='row' style={{justifyContent: 'space-around'}} id='radioButtons'>
										<label for='standard'>
											{' '}
											<input type='radio' id='standard' name='radio' onclick='packagePrice()' className='buttons' value='0' />
											Standard{' '}
										</label>

										<label for='premium'>
											{' '}
											<input type='radio' id='premium' name='radio' onclick='packagePrice()' className='buttons' value='1' />
											Premium{' '}
										</label>

										<label for='excelium'>
											{' '}
											<input type='radio' id='excelium' className='buttons' onclick='packagePrice()' name='radio' value='2' />
											Excelium{' '}
										</label>
									</div>
									<br />
									<div className='row'>
										<div className='col-md-4 col-sm-4'>
											<label>Unit price</label>
											<input type='text' name='price' value='' className='form-control required unitNum' readonly />
										</div>
									</div>
									<div className='row'>
										<div className='col-md-4 col-sm-4'>
											<label>Elevators price</label>
											<input type='text' name='price' value='' className='form-control required price' readonly />
										</div>
									</div>
									<div className='row'>
										<div className='col-md-4 col-sm-4'>
											<label>Installation fees</label>
											<input type='text' name='installation' value='' className='form-control required installation' readonly />
										</div>
									</div>
									<div className='row'>
										<div className='col-md-4 col-sm-4'>
											<label>Total Price</label>
											<input type='text' name='installation' value='' className='form-control required total' readonly />
										</div>
									</div>
								</div>
							</div>
						</fieldset>
					</form>
				</div>
			</div>
		</div>
	);
}
