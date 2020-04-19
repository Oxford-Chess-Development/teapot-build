import React from 'react';
import { Link } from 'react-router-dom';
import styles from '../css/faqs.module.css';

const data = {
	ScorchApp: [
		{
			q: 'How do I see more information about a player?',
			s: 'player-profile',
			v: '1.2.16',
			a: <>Click on a player's name to see more information about them. Alternatively, go to the right sidebar pane and click 'Profile'. Simple search a player's name for them to appear.</>
		},
		{
			q: 'How does ScorchApp pair players?',
			s: 'player-profile',
			v: '1.2.15',
			a: <>There are currently two modes - Swiss and Round-Robin. Go to Settings > Pairing System to change between them. You <span className='bold'>must</span> do this at the start of the tournament. A Swiss tournament pairs people according to their score to try and produce a decisive winner. A round-robin tournament pairs everyone against everyone.</>
		},
		{
			q: 'I gave someone a bye earlier and now I want to pair them with someone new. How do I do this?',
			s: 'bye-add',
			v: '1.2.16',
			a: <>This is designed as a multi-stage process to make sure you don't accidentally lose a result you wanted to keep! The steps are as follows:
			<ol>
				<li>Add a new player. In the Tournament Players pane on the left, you can add players in whatever way you choose.</li>
				<li>Pair your new players. You can either do this by pressing the 'Pair remaining' button which will have appeared at the bottom of the Pairings section, or by adding a new 'manual pairing'</li>
				<li>Swap out the bye player with one of your new players. If you have an even number, you'll have 2 current 'byes'. You can swap one of the byes with your new bye opponent so that the human players play each other. The bye players will automatically disappear.</li>
			</ol></>
		},
		{
			q: 'I have 2 players with the same name. What should I do?',
			s: 'duplicate-names',
			v: '1.2.14',
			a: <><span className='bold'>ScorchApp</span> automatically rejects duplicate names on player entry or edit. This is to catch mistakes busy tournament organisers might make. If you want to switch this feature off, go to Settings > Permissions > Check for duplicate players and switch it to 'Off'. You can switch it back on straight after you've entered your player with the same name!</>
		},
		{
			q: 'What are the performance rating options? Which should I choose?',
			s: 'performance-rating',
			a: <>There are two performance rating options: ELO and FIDE
			<ul>
				<li>
					The <span className='bold'>ELO</span> performance rating system refers to the average of an opponent's player's player ratings, buffed by 400 for each win and subtracted by 400 for every loss.
				</li>
				<li>
					The <span className='bold'>FIDE</span> formula calculates a rating difference factor <span className='code'>dp</span> using a <a href='https://handbook.fide.com/chapter/B022017' target='_blank' rel='noopener noreferrer'>lookup table</a> from the player's percentage score. That difference factor is then summed to the average rating of all opponents played. For instance, if the average opponent rating is 1400 and the player has won 2 out of 3 games, their <span className='code'>dp</span> factor will be +125 and so their performance rating will be 1525.
				</li>
			</ul></>
		}
	]
} as {[key: string]: {q: string, s: string, v: string, a: string | JSX.Element}[]}	//question, slug, version, answer

export default function FAQs() {

	return <>
		<section id='header' className={styles.container}>
			<Link to='/faqs' className={styles.title}>
				Frequently Asked Questions
			</Link>
		</section>
		{Object.entries(data).map(([section, entries]) => {
			return (
				<section id={section.toLowerCase()} className={styles.container}>
					<a href={'#' + section.toLowerCase()} className={styles.title}>
						ScorchApp
					</a>
					{entries.map((v) => {
						return (
							<div id={v.s}>
								<a href={'#' + v.s} className={styles.question}>
									{v.q}
								</a>
								<div className={styles.version}>
									{v.v ? 'v' + v.v : ''}
								</div>
								<div className={styles.answer}>
									{v.a}
								</div>
							</div>
						)
					})}
				</section>
			)
		})}
	</>

}