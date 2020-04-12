import React from 'react';

export default function Downloads() {

	
	return (
		<div>
			{/*<section id='section-preview' className='section' style={{
						backgroundColor: 'rgb(155, 40, 0)'
					}}>
					<div className='subheader'>
						Preview
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
				</section>*/}

				<section id='section-downloads' className='section' style={{
					backgroundColor: '#2d132c'
				}}>
				<div className='subheader'>
					Downloads
				</div>
				<div className='subsection'>
					<h3>Desktop App</h3>
					<p>The desktop (organiser) app of this software is available to beta test.</p>
					<div className='installer'>
						<img src={process.env.PUBLIC_URL + '/images/online.png'} alt='linux' />
						<a className='downloadLink' href={'http://beta.oxfordchess.co.uk/'}>
							<div className='downloadTitle'>View online beta</div>
							<div>Chrome, Safari, Edge</div>
						</a>
					</div>
					<div className='installer'>
						<img src={process.env.PUBLIC_URL + '/images/linux.png'} alt='linux' />
						<a className='downloadLink' href={'http://repo.oxfordchess.co.uk/latest/ubuntu.html'}>
							<div className='downloadTitle'>↧ .deb</div>
							<div>Debian, Ubuntu</div>
						</a>
					</div>
				</div>
				<div className='subsection'>
					<h3>Mobile App</h3>
					<p>The design of the mobile (player) app of this software has been published online on <a className='inlineLink' href='https://www.figma.com/file/74z1QM0ZdtdF2TrKiiAiFj/toastie-mobile' target='_blank' rel='noopener noreferrer'>Figma</a>. Designed to streamline every part of tournament organisation. Features:</p>
					<ul>
						<li><span className='bold'>Results submission</span> - let your players fill in the results for you. The app verifies that they both agree on the result and it gets entered into your record! You can confirm it, of course.</li>
						<li><span className='bold'>Beam information to your players!</span> - send them round times, announcements, notifications wherever they are so that they're never late for a round again!</li>
						<li><span className='bold'>Personalised player view</span> - players can see exactly who their opponents are, what board they're playing on, what room, their colour, and so on</li>
						<li><span className='bold'>Chat function</span> - do players have a problem? Now they can just message you immediately through the app. You can refer them onto an FAQ or send them a personalised response!</li>
						<li><span className='bold'>Automatic results submission!</span> - playing online or have a PGN stream of their game? On Lichess.org, Chess.com, or Chess24? Just enter that into the results pairing list and Tournament will pick up the results when its over and add it to your record (coming soon).</li>
					</ul>
					<div className='installer'>
						<a className='downloadLink mobile' href={'https://www.figma.com/file/74z1QM0ZdtdF2TrKiiAiFj/toastie-mobile'}>
							<div>View mobile design</div>
						</a>
					</div>
				</div>
				<div className='subsection'>
					<p>View all versions or download directly at our <a className='inlineLink' href='http://repo.oxfordchess.co.uk' target='_blank' rel='noopener noreferrer'>
							Releases page
						</a>
					</p>
				</div>
			</section>
		</div>
	);
}