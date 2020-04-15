import React from 'react';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import { ReactElement } from 'react';
import styles from '../css/footer.module.css';

export default function Footer(): ReactElement {
	
	return (
		<div className={styles.footer}>
			<div className={styles.icons}>
				<a href='https://facebook.com/scorchapp' target='_blank' rel='noopener noreferrer'>
					<FaFacebook />
				</a>
				<a href='https://twitter.com/ChessOxford' target='_blank' rel='noopener noreferrer'>
					<FaTwitter />
				</a>
				<a href='https://results.scorchapp.co.uk' target='_blank' rel='noopener noreferrer'>
					<img src={process.env.PUBLIC_URL + '/icons/website.png'} alt='website'/>
				</a>
				<a href='http://beta.scorchapp.co.uk/' target='_blank' rel='noopener noreferrer'>
					<img src={process.env.PUBLIC_URL + '/icons/desktop.png'} alt='desktop-beta'/>
				</a>
				<a href='https://www.figma.com/file/74z1QM0ZdtdF2TrKiiAiFj/toastie-mobile' target='_blank' rel='noopener noreferrer'>
					<img src={process.env.PUBLIC_URL + '/icons/mobile.png'} alt='mobile-design'/>
				</a>
				<a href='mailto:aloysius.lip@gmail.com' target='_blank' rel='noopener noreferrer'>
					<img src={process.env.PUBLIC_URL + '/icons/email.png'} alt='email'/>
				</a>
			</div>
			<div className={styles.author}>Copyright 2020, Aloysius Lip</div>
		</div>
	)
}