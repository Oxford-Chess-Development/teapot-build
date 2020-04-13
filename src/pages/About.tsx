import React from 'react';
import { ReactElement } from 'react';
import styles from '../css/about.module.css';

export default function About(): ReactElement {

	return <>
		<section id='author' className={styles.container}>
			<a href='#author' className={styles.title}>
				About the author
			</a>
			<div>
				<p>Oxford Chess Development is the sole work of Aloysius Lip, a 2nd-year undergraduate student at the University of Oxford and the current President of the Oxford University Chess Club. He reads Philosophy, Politics, and Economics, specialising in Microeconomics, Public Economics, and Game Theory.</p>
				<p>He enjoys programming in his free time, having won the international coding competition in 2018. His previous projects, viewable on his <a href='https://aloysiuslip.com' rel='noopener noreferrer' target='_blank'>personal website</a> in the world of chess development have included:</p>
				<table>
					<tbody>
						<tr>
							<th><a href='http://users.ox.ac.uk/~chess' target='_blank' rel='noopener noreferrer'>
								Oxford University Chess Club
							</a></th>
							<td>The official website for the university society</td>
						</tr>
						<tr>
							<th><a href='https://npmjs.com/package/ecf' target='_blank' rel='noopener noreferrer'>
								ECF.JS
							</a></th>
							<td>The JavaScript wrapper for the ECF grading database that makes it really easy to download rating data from the ECF for any player or club</td>
						</tr>
						<tr>
							<th><a href='https://npmjs.com/package/lichess' target='_blank' rel='noopener noreferrer'>
								Lichess.JS
							</a></th>
							<td>The JavaScript wrapper for the Lichess API</td>
						</tr>
						<tr>
							<th><a href='https://npmjs.com/package/lichess' target='_blank' rel='noopener noreferrer'>
								LAZYbot
							</a></th>
							<td>A Discord bot designed for chess servers</td>
						</tr>
					</tbody>
				</table>
			</div>
		</section>
		<section id='development' className={styles.container}>
			<a href='#development' className={styles.title}>
				Development
			</a>
			<div>
				A full-stack developer, Aloysius has designed every aspect of this product, from server to database to mobile to domain and storage management to distribution. His preferred speciality is in <span>front-end</span> development. He works in React.JS, the framework designed by Facebook and has enjoyed making all his work picture perfect, to optimise it for all the chess players in the world who might come along and use his work.
			</div>
		</section>
		<section id='contact' className={styles.container}>
			<div className={styles.title}>
				Contact
			</div>
			<div>

			<p>Leave any feedback from the beta deployment of Tournament on <a className='inlineLink' href='https://github.com/Oxford-Chess-Development/toastie-desktop-build/issues' target='_blank' rel='noopener noreferrer'>GitHub</a>. It's super easy to make a GitHub account and you can track the progress on your requests as they're handled!</p>
			<p>Alternatively, Aloysius is reachable at any of the below links.</p>
			</div>
		</section>
	</>
}