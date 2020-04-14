import React from 'react';
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
		</section>
	);
}