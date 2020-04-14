import React from 'react';
import { ReactElement } from 'react';
import styles from '../css/about.module.css';
import { FaQuoteLeft, FaQuoteRight } from 'react-icons/fa';
import { signature } from './signature';

export default function About(): ReactElement {

	return <>
		<section id='story' className={styles.container}>
			<a href='#story' className={styles.title}>
				Story
			</a>
			<div className='quote'>
				<FaQuoteLeft className={styles.leftQuote} />
				<p>As a keen chess player myself and having organised many chess tournaments for the university club, I often found myself frustrated. Existing software is too outdated, never user-friendly especially to non-professionals, and simply lacking in ideas. When I first joined the club, we tried to resurrect the annual 'Cuppers' tournament, an afternoon amateur college rapidplay. The competition was nearly derailed by slow pairing times. There is so much technology available to us and it's all so powerful. We shouldn't have to be stuck in the boring logistics which distract from the incredible game that is chess.</p>
				<p><span className='highlighted'>Scorch</span> modernises organisation and make the whole process easy and enjoyable. I've created a platform that is easy to use, filled with features, and innovative, using the latest in app and website technology to its fullest potential. Chess players shouldn't have to settle for anything less.</p>
				<FaQuoteRight className={styles.rightQuote} />
			</div>
			<img className={styles.signature} src={signature} alt='signature' />
		</section>
		<section id='author' className={styles.container}>
			<a href='#author' className={styles.title}>
				About the author
			</a>
			<div>
				<p><span className='highlighted'>Scorch</span> is the sole work of Aloysius Lip, a 2nd-year undergraduate student at the University of Oxford and the current President of the Oxford University Chess Club. He reads Philosophy, Politics, and Economics, specialising in Microeconomics, Public Economics, and Game Theory.</p>
				<p>He enjoys programming in his free time, having won the international coding competition in 2018. His previous projects in the world of chess development, viewable on his <a href='https://aloysiuslip.com' rel='noopener noreferrer' target='_blank'>personal website</a>, have included:</p>
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
				<p>A full-stack developer, Aloysius has designed every aspect of this product, from server to database to mobile to domain and storage management to distribution. His preferred speciality is in <span>front-end</span> development. He works in React.JS, the framework designed by Facebook and has enjoyed making all his work picture perfect, to optimise it for all the chess players in the world who might come along and use his work.</p>
				<p>Please note: <span className='highlighted'>scorch</span> used to be named Tournament.</p>
			</div>
		</section>
		<section id='contact' className={styles.container}>
			<div className={styles.title}>
				Contact
			</div>
			<div>

			<p>Leave any feedback from the beta deployment of <span className='highlighted'>Scorch</span> on <a className='inlineLink' href='https://github.com/Oxford-Chess-Development/toastie-desktop-build/issues' target='_blank' rel='noopener noreferrer'>GitHub</a>. It's super easy to make a GitHub account and you can track the progress on your requests as they're handled!</p>
			<p>Alternatively, Aloysius is reachable at any of the below links.</p>
			</div>
		</section>
	</>
}