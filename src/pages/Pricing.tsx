import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/pricing.module.css';

export default function Pricing() {

	return (
		<section id='pricing' className={styles.container}>
			<a href='#pricing' className={styles.title}>
				Pricing
			</a>
			<div className={['buttonSection', styles.buttonSection].join(' ')}>
				<div className={['download', 'platform', styles.priceButton].join(' ')}>
					<div className='bold'>Free</div>
					<div>£0</div>
					<div>Experience the software</div>
					<div>All 3 products</div>
					<a href='https://beta.oxfordchess.co.uk' target='_blank' rel='noopener noreferrer'>Create account</a>
				</div>
				<div className={['download', 'platform', styles.priceButton].join(' ')}>
					<div className='bold'>Trial</div>
					<div>£0</div>
					<div>Lasts 30 days</div>
					<div>(Almost) fully-featured</div>
					<a href='mailto:aloysius.lip@gmail.com' target='_blank' rel='noopener noreferrer'>Get in contact</a>
				</div>
				<div className={['download', 'platform', styles.priceButton].join(' ')}>
					<div className='bold'>Licensed</div>
					<div className='strikethrough'>£200 / year</div>
					<div>£100 / year in beta</div>
					<div>Fully-featured</div>
					<a href='mailto:aloysius.lip@gmail.com' target='_blank' rel='noopener noreferrer'>Get in contact</a>
				</div>
			</div>
			<div className={styles.description}>
				<p>What does the <span className='bold'>in beta</span> status of this software mean? New features are constantly being built. That means you can access the <span className='bold'>Tournament Suite</span> for a reduced price. You will be in constant contact with the creator, <Link to='/about#author'>Aloysius</Link>, who will listen to any suggestions you have for features. Average turnaround for a new feature is within a week. In return, you should report any bugs you find.</p>
				<p><span className={styles.notice}>Beta status will likely last throughout the month of April.</span></p>
			</div>
		</section>
	);
}