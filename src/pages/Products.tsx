import React from 'react';
import { Link } from 'react-router-dom';
import Album, { Img } from '../components/Image';
import styles from '../css/products.module.css';
import { FaWindows, FaApple, FaLinux } from 'react-icons/fa';

export default function Products() {

	return (
		<>
			<section id='overview' className={styles.container}>
				<a href='#overview' className={styles.title}>
					Overview
				</a>
				<div className={styles.description}>
					There are three programs in the <span className='highlighted'>scorch</span>chess suite.<br />
					<ul>
						<li><a href='#app'>scorchapp</a>, your software to manage tournaments, is a Desktop and Web app.</li>
						<li><a href='#results'>scorchresults</a> is the public-facing site where you can publish pairings players' and spectators' convenience.</li>
						<li><a href='#mobile'>scorchmobile</a> is an app serving live personalised information to your players during physical tournaments.</li>
					</ul>
					Your license to <a href='#app'>scorchapp</a> automatically includes the functions to <a href='#results'>scorchresults</a> and <a href='#mobile' className='bold'>scorchmobile</a>.
				</div>
			</section>
			<section id='app' className={styles.container}>
				<a href='#app' className={styles.title}>
					scorchapp
				</a>
				<div className={styles.subtitle}>
					Cross-platform Desktop app to manage tournaments. Also available in web view.
				</div>
				<div className={styles.carousel}>
					<Album
						type='carousel'
						enableLightbox={true}
						photos={[
							'/screenshots/login_1.gif',
							'/screenshots/load_1.gif',
							'/screenshots/settings_1.gif',
							'/screenshots/round_1.gif',
							'/screenshots/desktop_1.1.0_1.png'
						]}
						ratio={[16, 9]}
						height={600}
						interval={10000}
					/>
				</div>
				<div>
					<p>Your one-touch platform to manage tournaments that's visual, filled with functions, and intuitive to use.</p>
					<p>See all the features available in the Desktop app over at the <Link className='bold' to={{
						pathname: '/features',
						state: {
							from: '/products'
						}
					}}>Features</Link> page</p>
				</div>

				<div className={'buttonSection'}>
					<a className={['web', 'download', styles.download].join(' ')} href='https://beta.scorchapp.co.uk/' target='_blank' rel='noopener noreferrer'>
						Open Web App
					</a>
				</div>
				<div className={'buttonSection'}>
					<a className={['platform', 'download'].join(' ')} href={`http://repo.scorchapp.co.uk/latest/windows.html`} target='_blank' rel='noopener noreferrer'>
						<FaWindows />Windows
					</a>
					<a className={['platform', 'download'].join(' ')} href={`http://repo.scorchapp.co.uk/latest/mac.html`} target='_blank' rel='noopener noreferrer'>
						<FaApple />Mac
					</a>
					<a className={['platform', 'download'].join(' ')} href={`http://repo.scorchapp.co.uk/latest/ubuntu.html`} target='_blank' rel='noopener noreferrer'>
						<FaLinux />Linux
					</a>
				</div>
				<a href='http://repo.scorchapp.co.uk' target='_blank' rel='noopener noreferrer' className={styles.subtitle}>
					View all downloads
				</a>
			</section>
			<section id='results' className={styles.container}>
				<a href='#results' className={styles.title}>
					scorchresults
				</a>
				<div className={styles.subtitle}>
					Universal web view for results and pairings. Attractive. Automated. Effortless.
				</div>
				<div className={styles.carousel}>
					<Album
						type='carousel'
						enableLightbox={true}
						photos={[
							'/screenshots/pairings_1.png',
							'/screenshots/stats_2.png',
							'/screenshots/stats_5.png',
							'/screenshots/stats_3.png',
							'/screenshots/stats_4.png',
						]}
						ratio={[16, 9]}
						height={600}
						interval={10000}
					/>
				</div>
				<div>
					<p>Choose to make your tournament public? All your results and pairings are immediately live-synced to our  <a href='https://results.scorchapp.co.uk/' target='_blank' rel='noopener noreferrer'>website</a>.</p>
					<p>Instantly view your pairings, standings, and tournament statistics in one beautiful web view, on computer or mobile.</p>
				</div>
				<div className={'buttonSection'}>
					<a className={['web', 'download'].join(' ')} href='https://results.scorchapp.co.uk/' target='_blank' rel='noopener noreferrer'>
						Open Results Site
					</a>
				</div>
			</section>
			<section id='mobile' className={styles.container}>
				<a href='#mobile' className={styles.title}>
					scorchmobile
				</a>
				<div className={styles.subtitle}>
					Your companion to real-life tournaments. Send messages to any player, anywhere.
				</div>
				<div className={[styles.carousel, styles.verticalCarousel].join(' ')}>
					<Album
						type='carousel'
						enableLightbox={true}
						photos={[
							'/mobile/login.png',
							'/mobile/qr.png',
							'/mobile/rounds.png',
							'/mobile/match.png',
							'/mobile/announcements.png',
							'/mobile/contact.png'
						]}
						ratio={[9, 16]}
						height={600}
						interval={10000}
					/>
				</div>
				<div>
					<p>Designed for <span className='bold'>physical tournaments</span>. Have a waiting room filled with thousands of anxious parents or players spread across rooms and all wondering what time the next round is going to start? Instantly beam your announcements, your round times, and your pairings to all your players.</p>
					<p className='underlined'>Development on the mobile app has been put on hold and re-prioritised to other products on account of the global pause on in-person chess tournaments.</p>
				</div>
			</section>
			<section id='workflow' className={styles.container}>
				<a href='#workflow' className={styles.title}>
					Workflow
				</a>
				<div>
					<Img
						src='/workflow.png'
						alt='workflow'
					/>
				</div>
			</section>
		</>
	)
}