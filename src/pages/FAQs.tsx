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
			q: 'How do I change a player name from a tournament?',
			s: 'name-change',
			a: <>
				Hover over a player's name in the Player Sidebar on the left. An edit button should appear. If it doesn't:
				<ul>
					<li>If your tournament has started, you need to enable or disable the 'Edit Players' mode for the tournament. Click the Edit button in the bottom-left to toggle.</li>
					<li>If your tournament has finished and you have published results, you need to unpublish them in order to make a name change. Do this by clicking the 'Unpublish' button.</li>
				</ul>
			</>
		},
		{
			q: 'How does ScorchApp pair players?',
			s: 'player-profile',
			v: '1.2.15',
			a: <>There are currently two modes - Swiss and Round-Robin. Go to Settings > Pairing System to change between them. You <span className='bold'>must</span> do this at the start of the tournament. A Swiss tournament pairs people according to their score to try and produce a decisive winner. A round-robin tournament pairs everyone against everyone.</>
		},
		{
			q: 'What tie-breaks are available to me?',
			s: 'tie-breaks',
			v: '1.2.18',
			a: <>
				<p>There is currently support for 10 tie breaks. In default order these are:</p>
				<ol>
					<li>Head-to-Head score (the match point total from all games played between the two players)</li>
					<li>Game Point total (if available, the game points scored by each)</li>
					<li>Black total (players who played black more times benefit)</li>
					<li>Most wins</li>
					<li>Progressive score (also known as Cumulative, the sum of scores that were the player had each round)</li>
					<li>Head-to-head game point score</li>
					<li>Performance rating (see <a href='#performance-rating'>below</a> for the performance rating system options)</li>
					<li>Rating</li>
					<li>By average rating cut (average rating of opponents, then: the same in sequence with the lowest rated opponent on each side remove, while both players still have an opponent)</li>
					<li>Alphabetical order</li>
				</ol>
				Go to the settings dialogue and drop-and-drag the tie break order in the bottom section to change them. Press 'save' to apply changes.
			</>
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
			q: 'How do I give a player a bye?',
			s: 'bye-new',
			v: '1.2.16',
			a: <>Bye pairings are automatic in <span className='bold'>ScorchApp</span>! The pairing system will give a player a bye in accordance with Swiss or Round-robin rules if there are an odd number of players. If you want to specifically give someone a bye, go to Pairings and scroll to the bottom and click 'New manual pairing'. Simply type in the name of the player on one side and 'BYE' on the other to enter a new BYE.</>
		},
		{
			q: 'How do I give a player a \'score bonus\'?',
			s: 'score-bonus',
			v: '1.2.17',
			a: <>
				<p>Click on any player to load up the Profile view. Alternatively, go to the right sidebar, click 'Profile', and search any player. At the bottom there is an input section for Bonus points. Type in the round from which you want the bonus points to apply, and and the numerical points value you want to add. Watch it update in real time!</p>
				<p>Game point bonuses are available for tournaments using game points.</p>
			</>
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