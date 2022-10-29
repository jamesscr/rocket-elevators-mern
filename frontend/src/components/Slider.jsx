import React from 'react';
import RevSlider, {Slide, Caption} from 'react-rev-slider';
import {Link} from 'react-router-dom';

export default function Slider() {
	const config = {
		delay: 9000,
		startwidth: 1170,
		startheight: 600,
		hidethumbs: 10,
		fullwidth: 'on',
		forcefullwidth: 'on',
	};
	return (
		<RevSlider config={config}>
			{/* Slider----------------1 */}
			<Slide
				src='assets/images/AdobeStock_162479912.jpeg'
				alt='slidebg1'
				x='50'
				y='100'
				speed='500'
				start='1500'
				easing='Cubic.easeIn'
				splitin='none'
				splitout='none'
				elementdelay='0.1'
				endelementdelay='0.1'
				navigationstyle='preview1'
				endspeed='500'
				transition='parallaxtotop'
				slotamount='7'
				masterspeed='900'
				saveperformance='off'
				title='Rocket Elevators'
			>
				<Caption
					class='tp-caption font-roboto skewfromleft tp-resizeme'
					x='300'
					y='244'
					speed='500'
					start='1200'
					easing='Power4.easeOut'
					style={{
						zIndex: 2,
						color: '#fff',
						fontSize: '65px',
						lineHeight: '85px',
						fontWeight: 'bold',
						letterSpacing: 0,
						textShadow: 5,
						text: 'italic',
					}}
				>
					Rocket Elevators
				</Caption>
				<Caption
					class='tp-caption font-roboto skewfromleft tp-resizeme'
					x='300'
					y='324'
					speed='500'
					start='1000'
					easing='easeInCirc'
					splitin='none'
					splitout='none'
					elementdelay='0.1'
					endelementdelay='0.1'
					endspeed='500'
					style={{
						zIndex: 3,
						color: '#fff',
						fontSize: '20px',
						fontWeight: 300,
						textShadow: 5,
					}}
				>
					Elevate, Safety, Speed and Style
				</Caption>
				<Caption
					class='tp-caption sfb tp-resizeme'
					x='300'
					y='410'
					speed='500'
					start='1500'
					easing='Power3.easeIn'
					splitin='none'
					splitout='none'
					elementdelay='1'
					endelementdelay='0.1'
					endspeed='500'
					style={{
						zIndex: 4,
						maxWidth: 'auto',
					}}
				>
					<a className='btn btn-lg btn-default btn-bordered btn-shadow-1' href='#services'>
						Services &nbsp;
						<i className='fa fa-angle-right'></i>
					</a>
				</Caption>
				<Caption
					class='tp-caption sfb tp-resizeme'
					x='600'
					y='410'
					speed='500'
					start='1500'
					easing='Power3.easeInOut'
					splitin='none'
					splitout='none'
					elementdelay='0.1'
					endelementdelay='0.1'
					endspeed='500'
					style={{
						zIndex: 4,
						maxWidth: 'auto',
					}}
				>
					<Link to='/quote' className='btn btn-lg btn-default btn-bordered btn-shadow-1'>
						Get a Quote &nbsp; <i className='fa fa-angle-right'></i>
					</Link>
				</Caption>
			</Slide>
			{/* Slider----------------2 */}
			<Slide
				src='assets/images/AdobeStock_122227340.jpeg'
				alt='slidebg1'
				x='50'
				y='100'
				speed='500'
				start='1500'
				easing='Cubic.easeOut'
				splitin='none'
				splitout='none'
				elementdelay='0.1'
				endelementdelay='0.1'
				navigationstyle='preview2'
				endspeed='500'
				transition='parallaxtotop'
				slotamount='7'
				masterspeed='900'
				saveperformance='off'
				title='Rocket Elevators'
			>
				<Caption
					class='tp-caption skewfromrightshort fadeout'
					x='50'
					y='100'
					speed='500'
					start='1500'
					easing='Cubic.easeOut'
					splitin='none'
					splitout='none'
					elementdelay='0.1'
					endelementdelay='0.1'
					endspeed='500'
					style={{
						zIndex: 2,
						color: '#fff',
						fontSize: '65px',
						lineHeight: '85px',
						fontWeight: 'bold',
						letterSpacing: 0,
						textShadow: 5,
					}}
				>
					Residential Services
				</Caption>
				<Caption
					class='tp-caption skewfromrightshort fadeout'
					x='50'
					y='300'
					speed='500'
					start='1000'
					easing='easeInCirc'
					splitin='none'
					splitout='none'
					elementdelay='0.1'
					endelementdelay='0.1'
					endspeed='500'
					style={{
						zIndex: 3,
						color: '#fff',
						fontSize: '20px',
						fontWeight: 300,
						textShadow: 'none',
					}}
				>
					All You Need For Residential Services
				</Caption>
				<Caption
					class='tp-caption skewfromrightshort fadeout'
					x='50'
					y='410'
					speed='500'
					start='1500'
					easing='Power3.easeIn'
					splitin='none'
					splitout='none'
					elementdelay='1'
					endelementdelay='0.1'
					endspeed='500'
					style={{
						zIndex: 4,
						maxWidth: 'auto',
					}}
				>
					<a className='btn btn-lg btn-default btn-bordered btn-shadow-1' href='residential.html'>
						Residential Services &nbsp; <i className='fa fa-angle-right'></i>
					</a>
				</Caption>
			</Slide>
			{/* Slider----------------3 */}
			<Slide
				src='assets/images/AdobeStock_78149317.jpeg'
				alt='slidebg1'
				x='50'
				y='100'
				speed='500'
				start='1500'
				easing='Cubic.easeIn'
				splitin='none'
				splitout='none'
				elementdelay='0.1'
				endelementdelay='0.1'
				navigationstyle='preview3'
				endspeed='500'
				transition='parallaxtotop'
				slotamount='7'
				masterspeed='900'
				saveperformance='off'
				title='Corporate Services'
			>
				<Caption
					class='tp-caption skewfromrightshort fadeout'
					x='50'
					y='100'
					speed='500'
					start='1500'
					easing='Cubic.easeOut'
					splitin='none'
					splitout='none'
					elementdelay='0.1'
					endelementdelay='0.1'
					endspeed='500'
					style={{
						zIndex: 2,
						color: '#fff',
						fontSize: '65px',
						lineHeight: '85px',
						fontWeight: 'bold',
						letterSpacing: 0,
						textShadow: 'none',
						text: 'italic',
					}}
				>
					Corporate Services
				</Caption>
				<Caption
					class='tp-caption skewfromrightshort fadeout'
					x='50'
					y='300'
					speed='500'
					start='1000'
					easing='easeInCirc'
					splitin='none'
					splitout='none'
					elementdelay='0.1'
					endelementdelay='0.1'
					endspeed='500'
					style={{
						zIndex: 3,
						color: '#fff',
						fontSize: '20px',
						fontWeight: 300,
						textShadow: 5,
					}}
				>
					Take Full Advantage of our Commercial Services
				</Caption>
				<Caption
					class='tp-caption skewfromrightshort fadeout'
					x='50'
					y='410'
					speed='500'
					start='1500'
					easing='Power3.easeIn'
					splitin='none'
					splitout='none'
					elementdelay='1'
					endelementdelay='0.1'
					endspeed='500'
					style={{
						zIndex: 4,
						maxWidth: 'auto',
					}}
				>
					<a className='btn btn-lg btn-default btn-bordered btn-shadow-1' href='corporate.html'>
						Corporate Services &nbsp; <i className='fa fa-angle-right'></i>
					</a>
				</Caption>
			</Slide>
		</RevSlider>
	);
}
