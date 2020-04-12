import React from 'react';
import { capitalise } from '../utils/prototype';
import styles from '../css/home.module.css';

let OSName = 'unknown';
if (navigator.appVersion.includes('Win')) OSName = 'windows';
if (navigator.appVersion.includes('Mac')) OSName = 'mac';
if (navigator.appVersion.includes('X11')) OSName = 'unknown'; //'unix';
if (navigator.appVersion.includes('Linux')) OSName = 'ubuntu';

export default function Home() {

	return (
		<section id='section-home' className={styles.container}>
			<div><h1>A modern platform for organisers of chess tournaments.</h1></div>
			<div className={styles.description}>
				Organising chess tournaments should be easy, intuitive, and individually tailored to you.
				<br />Synced across desktop, web, and mobile, <span className='bold'>Tournament</span> offers everything to run chess tournament your way, providing the most effortless experience for yourself, your players, and your spectators.
			</div>
			<div className={styles.buttonSection}>
				{OSName !== 'unknown' ? <a className={[styles.platform, styles.download].join(' ')} href={`http://repo.oxfordchess.co.uk/latest/${OSName}.html`} target='_blank' rel='noopener noreferrer'>
					Download for {capitalise(OSName === 'ubuntu' ? 'linux' : OSName)}
				</a> : null}
				<a className={[styles.web, styles.download].join(' ')} href='https://beta.oxfordchess.co.uk/' target='_blank' rel='noopener noreferrer'>
					Open Web App
				</a>
			</div>			
		</section>
	);
}