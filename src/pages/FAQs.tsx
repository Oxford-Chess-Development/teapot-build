import React from 'react';
import styles from '../css/faqs.module.css';

export default function FAQs() {

	return (
		<section>
			<div>
				<div id='performance-rating' className={styles.question}>
					What are the performance rating options? which should I choose?
				</div>
				<div className={styles.answer}>
					There are two performance rating options: ELO and FIDE
					<ul>
						<li>
							The <span className='bold'>ELO</span> performance rating system refers to the average of an opponent's player's player ratings, buffed by 400 for each win and subtracted by 400 for every loss.
						</li>
						<li>
							The <span className='bold'>FIDE</span> formula calculates a rating difference factor <span className='code'>dp</span> using a <a href='https://handbook.fide.com/chapter/B022017' target='_blank' rel='noopener noreferrer'>lookup table</a> from the player's percentage score. That difference factor is then summed to the average rating of all opponents played. For instance, if the average opponent rating is 1400 and the player has won 2 out of 3 games, their <span className='code'>dp</span> factor will be +125 and so their performance rating will be 1525.
						</li>
					</ul>
				</div>
				<div id='ecf-performance-rating' className={styles.question}>
					Why is there no 'ECF' performance rating option?
				</div>
				<div className={styles.answer}>
					The ECF performance rating is semantically identical to the above <span className='bold'>ELO</span> system. The ECF uses a system of the average of all opponent ratings buffed by 50 points each way. Applying the ELO formula would do the same but +- 53, due to the rating conversion formula. Select <span className='bold'>ELO</span> if you wish to calculate performance ratings in the standard ECF way.
				</div>
			</div>
		</section>
	)
}