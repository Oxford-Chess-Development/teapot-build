import React from 'react';
import { ReactElement } from 'react';

export default function About(): ReactElement {

	return <>
		<section id='section-about' className='section' style={{
			backgroundColor: 'rgb(80, 5, 5)'
		}}>
			<div className='subheader'>
				About
			</div>
			<p>Aloysius Lip is a 2nd-year undergraduate student at the University of Oxford and the current President of the Oxford University Chess Club. He reads Philosophy, Politics, and Economics, specialising in Microeconomics, Public Economics, and Game Theory. He enjoys programming in his free time, having won the "OxfordHack" international coding competition in 2018. His previous projects in the world of chess development have included:</p>
			<ul>
				<li><a className='inlineLink' href='http://users.ox.ac.uk/~chess' target='_blank' rel='noopener noreferrer'>Oxford University Chess Club</a> - the official website for the university society</li>
				<li><a className='inlineLink' href='https://npmjs.com/package/ecf' target='_blank' rel='noopener noreferrer'>ECF.JS</a> - the JavaScript wrapper for the ECF grading database that makes it really easy to download rating data from the ECF for any player or club</li>
				<li><a className='inlineLink' href='https://npmjs.com/package/lichess' target='_blank' rel='noopener noreferrer'>Lichess.JS</a> - the JavaScript wrapper for the Lichess API</li>
				<li><a className='inlineLink' href='https://github.com/theLAZYmd/LAZYbot' target='_blank' rel='noopener noreferrer'>LAZYbot</a> - a Discord bot designed for chess servers</li>
			</ul>
			<p>Leave any feedback from the beta deployment of Tournament on <a className='inlineLink' href='https://github.com/Oxford-Chess-Development/toastie-desktop-build/issues' target='_blank' rel='noopener noreferrer'>GitHub</a>. It's super easy to make a GitHub account and you can track the progress on your requests as they're handled! Alternatively, contact Aloysius using one of the below links.</p>
		</section>
		<section>
			<div className='subheader'>
				Development
			</div>
			<p>A full-stack developer, Aloysius has designed every aspect of this product, from server to database to mobile to domain and storage management to distribution. Nevertheless, Aloysius' preferred speciality is in <span>front-end</span> development. He works in React.JS, the framework designed by Facebook and has enjoyed making all his work picture perfect, to optimise it for user utilisation.</p>
		</section>
	</>;
}