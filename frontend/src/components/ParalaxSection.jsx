import React from 'react';
import {render} from 'react-dom';
import {Parallax, Background} from 'react-parallax';

export default function ParalaxSection() {
	const bgImage = '/assets/images/AdobeStock_73868131.jpeg';
	return (
		<div>
			<Parallax className='parallax parallax-1' bgImage={bgImage} strength={500}>
				<div className='container parallax parallax-1' style={{height: 300}}>
					<div className='text-center'>
						<h2 className='fs-40 fw-300 text-center'>The Best Customer Services</h2>
						<a className='btn btn-default btn-lg' href='#work'>
							AWARDS AND PROJECTS<i></i>
						</a>
						<a className='btn btn-default btn-lg' href='residential.html'>
							RESIDENTIAL SERVIVES <i></i>
						</a>
						<a className='btn btn-default btn-lg' href='corporate.html'>
							COPORATE SERVICES <i></i>
						</a>
					</div>
				</div>
			</Parallax>
		</div>
	);
}
