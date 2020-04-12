import React from 'react';
import TextGallery from '../components/TextGallery';
import Album from '../components/Image';

export default function Features() {

	return (
		<div>
			<section id='section-demo' className='section' style={{
				backgroundColor: 'lightblue'
			}}>
                <div className='subheader' />
                <Album
                    type='carousel'
                    enableLightbox={true}
                    photos={[
                        '/images/cover-plain.jpg',
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
            </section>
			<section id='section-features' className='section' style={{
				backgroundColor: '#1b300e'
			}}>
				<div className='subheader'>
					Features
				</div>
				<div className='subsection'>
					<ul>
						<li>Fully-featured Desktop app for instant and intuitive results and pairing management</li>
						<li>Lightning-fast swiss system implementation</li>
						<li><span className='bold'>Mobile app</span> allowing players to submit their results themselves</li>
					</ul>
				<div style={{width: '100%', display: 'flex'}}>And many more standard functions that make your life easier, like:</div>
					<ul>
						<li>Support for both teams and individuals</li>
						<li>Match points and game points submission</li>
						<li>Support for players joining and leaving tournaments</li>
						<li>Changing points scored for wins, losses, draws, and byes</li>
						<li>Performance rating and 'expected score' calculators via the ELO and FIDE systems</li>
					</ul>
				</div>
				<TextGallery autoAdvance={3000}>
					<div>
						<h3>Modern</h3>
						<p>Built with the latest front-end technologies and constantly updated. Designed to work on any platform, cross-platform. </p>
					</div>
					<div>
						<h3>Functional</h3>
						<p>Gone are the days of a single-use single-method platform. Tournament seeks to let tournament creators run things the way they want, providing as many different options and variations as possible to suit their needs.</p>
					</div>
					<div>
						<h3>Intuitive</h3>
						<p>Tournament seeks to place everything right where you expect. Any feature you might be looking for there is there, right when you need it.</p>
					</div>
				</TextGallery>
			</section>
		</div>
	);
}