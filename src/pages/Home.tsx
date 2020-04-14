import React, { ReactElement } from 'react';
import { capitalise } from '../utils/prototype';
import styles from '../css/home.module.css';
import { isMobile } from '../utils/auth';
import Name from '../components/Name';

let OSName = 'unknown';
if (navigator.appVersion.includes('Win')) OSName = 'windows';
if (navigator.appVersion.includes('Mac')) OSName = 'mac';
if (navigator.appVersion.includes('X11')) OSName = 'unknown'; //'unix';
if (navigator.appVersion.includes('Linux')) OSName = 'ubuntu';

export default function Home(): ReactElement {

	return (
		<section id='section-home' className={styles.container}>
			<Name />
			<div><h1>A modern platform for organisers of chess tournaments.</h1></div>
			<div className={styles.description}>
				Organising chess tournaments should be easy, intuitive, and individually tailored to you.
				<br />Synced across desktop, web, and mobile, <span className='bold'><span className='highlighted'>scorch</span>chess</span> offers everything to run chess tournament your way, providing the most effortless experience for yourself, your players, and your spectators.
			</div>
			<div className={'buttonSection'}>
				{OSName !== 'unknown' ? <a className={['platform', 'download'].join(' ')} href={`http://repo.oxfordchess.co.uk/latest/${OSName}.html`} target='_blank' rel='noopener noreferrer'>
					Download for {capitalise(OSName === 'ubuntu' ? 'linux' : OSName)}
				</a> : null}
				{!isMobile() ? <a className={['web', 'download'].join(' ')} href='https://beta.oxfordchess.co.uk/' target='_blank' rel='noopener noreferrer'>
					Open Web App
				</a> : null}
			</div>
			<div style={{position: 'fixed', visibility: 'hidden'}}>
				<a href='/products#app'>Your scoring manager of choice.</a>
				<a href='/products#results'>Your scoreboard of choice.</a>
				<a href='/products#server'>Your scoring system of choice.</a>
				<a href='/products#mobile'>Your score feed of choice.</a>
			</div>		
		</section>
	);
}