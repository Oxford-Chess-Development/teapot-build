import React, { ReactElement } from 'react';
import TextGallery from '../components/TextGallery';
import styles from '../css/features.module.css';
import { FaCheckCircle } from 'react-icons/fa';

const FeatureList = {
	scorchapp: [
		{
			name: 'Swiss system pairings',
			level: 0
		},
		{
			name: 'Team and individual competitors',
			level: 0
		},
		{
			name: 'Game points',
			level: 0
		},
		{
			name: 'Players joining and leaving halfway',
			level: 0
		},
		{
			name: 'Re-pair a player joining that same round',
			level: 0
		},
		{
			name: 'Change the number of rounds once started',
			level: 0
		},
		{
			name: 'Performance rating calculations',
			level: 0
		},
		{
			name: 'Expected score calculations',
			level: 0
		},
		{
			name: 'Game point totals',
			level: 0
		},
		{
			name: 'Custom win / loss / draw / bye match points',
			level: 0
		},
		{
			name: 'Live tournament statistics',
			level: 0
		},
		{
			name: 'Copy players from a spreadsheet',
			level: 0
		},
		{
			name: 'Switch pairings around',
			level: 0
		},
		{
			name: 'Forbid specific pairings',
			level: 0
		},
		{
			name: 'Change a previous result',
			level: 0
		},
		{
			name: 'More than 2 tournaments',
			level: 1
		},
		{
			name: 'More than 2 rounds in a tournament',
			level: 1
		},
		{
			name: 'More than 50 players in a tournament',
			level: 1
		},
		{
			name: 'Up to 1000 players in a tournament',
			level: 2
		}
	],
	scorchresults: [
		{
			name: 'Pairings and results table',
			level: 0
		},
		{
			name: 'Standings table',
			level: 0
		},
		{
			name: 'Performance and expected score trackers',
			level: 0
		},
		{
			name: 'Charts showing performance and standings over time',
			level: 0
		},
		{
			name: 'Chart showing easy breakdown of in progress games',
			level: 0
		},
		{
			name: 'Publish round times',
			level: 0
		},
		{
			name: 'Automatic game links from Chess.com',
			level: 0
		},
		{
			name: 'Automatic game links from Lichess.org',
			level: 0,
			dev: true
		},
		{
			name: 'Automatic results submission from Chess.com and Lichess.org',
			level: 0,
			dev: true
		},
		{
			name: 'Results submission from users',
			level: 0,
			dev: true
		},
		{
			name: 'Customisable link to your rules and website',
			level: 2
		},
		{
			name: 'Watch tournament streams live',
			level: 2
		},
		{
			name: 'Tournament profile picture',
			level: 2
		},
		{
			name: 'Custom URL',
			level: 2
		}
	],
	scorchmobile: [
		{
			name: 'Personalised \'match\' view with opponent / game details',
			level: 0
		},
		{
			name: 'Round times and tournament progress tracker',
			level: 0
		},
		{
			name: 'Pairings and standings',
			level: 0
		},
		{
			name: 'Message queries to tournament organiser',
			level: 0
		},
		{
			name: 'QR code login',
			level: 0
		},
		{
			name: 'Personalised email login',
			level: 2
		}
	]
} as {[key: string]: {name: string, level: number, dev?: boolean}[]}

export default function Features() {

	return (
		<>
			<section id='highlights' className={styles.container}>
				<TextGallery
					autoAdvance={5000}
				>
					<div>
						<h3>Modern</h3>
						<p>Built with the latest front-end technologies and constantly updated. Designed to work on any platform. Syncs instanteously across platforms to make life as easy as possible for you. </p>
					</div>
					<div>
						<h3>Functional</h3>
						<p>Gone are the days of a single-use "my-way only" platform. The <span className='highlighted'>scorch</span>chess suite lets you, the tournament creator, run things the way you want, providing as many different options as possible to suit your needs.</p>
					</div>
					<div>
						<h3>Intuitive</h3>
						<p>Scorch seeks to place everything right where you expect. Any feature you might be looking for is there, right when you need it. We make running tournaments a pleasure for you.</p>
					</div>
				</TextGallery>
			</section>
			<section id='features' className={styles.container}>
				<a href='#features' className={styles.title}>
					Features
				</a>
				<div className={styles.subtitle}>
					Every feature is modular. That means you can toggle which ones you want for your tournament across a number of different settings. Really design your tournament the way you want it.
				</div>
				<div className='description'>
					Control your tournament with <span className='bold'>scorchapp</span>.<br />Get the ability to publish your results to <span className='bold'>scorchresults</span> automatically thrown in.
				</div>
				{Object.entries(FeatureList).map(([section, entries]) => {
					return <div>
						<table>
							<thead>
								<tr className={styles.section}>
									<th colSpan={4}>{section}</th>
								</tr>
								<tr className={styles.license}>
									<th><div className={styles.spacer}>{'\u200b'}</div></th>
									<th scope='col' style={{width: '15%'}}>Free</th>
									<th scope='col' style={{width: '15%'}}>Trial</th>
									<th scope='col' style={{width: '15%'}}>Licensed</th>
								</tr>
							</thead>
							<tbody>
								{entries.map((meta) => {
									let tdGroup = [] as ReactElement[];
									for (let i = 0; i <= 2; i++) {
										tdGroup.push(
											<td className={meta.dev ? styles.dev : ''}>
												{meta.level <= i ?
													!meta.dev ?
														<FaCheckCircle /> :
														'Coming soon' :
													null
												}
											</td>
										)
									}
									return <tr className={styles.entry}>
										<th>{meta.name}</th>
										{tdGroup}
									</tr>
								})}
							</tbody>
						</table>
					</div>
				})}
			</section>
		</>
	);
}