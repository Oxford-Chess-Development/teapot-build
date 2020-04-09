import React, { ReactElement, useEffect, useState } from 'react';
import './App.css';
import Titlebar from './components/Titlebar';
import TextGallery from './components/TextGallery';
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';
import Album from './components/Image';

function scrollToID({ id }: { id: string }) {

    if (id.toLowerCase() === 'home') window.location.hash = '';
    else window.location.hash = '#' + id.toLowerCase();
    let body = document.getElementsByTagName('BODY')[0];
    if (!body) return;
    let element = document.getElementById('section-' + id.toLowerCase()) as HTMLDivElement;
    if (!element) return;
    window.scrollTo({
        top: element.offsetTop - (window.innerHeight * 0.12),
        left: 0,
        behavior: 'smooth'
    });
}

function App(): ReactElement {

    let hash = window.location.hash.slice(1);
    const [id, setID] = useState(hash);
    let body = document.getElementsByTagName('BODY')[0];

    useEffect(() => {
        scrollToID({ id })
    }, [id, body]);

	return (
		<div className='App'>
            
            <Titlebar setID={setID} />

            <div id='section-home' className='section' style={{
                    backgroundColor: '#111111'
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
            </div>

            <div id='section-features' className='section' style={{
                    backgroundColor: 'rgb(44, 85, 19)'
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
            </div>

            {/*<div id='section-preview' className='section' style={{
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
            </div>*/}

            <div id='section-downloads' className='section' style={{
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
                    <p>View all versions or download directly at our <a className='inlineLink' href='http;//repo.oxfordchess.co.uk' target='_blank' rel='noopener noreferrer'>
                            Releases page
                        </a>
                    </p>
                </div>
            </div>
            
            <div id='section-about' className='section' style={{
                    backgroundColor: 'rgb(80, 5, 5)'
                }}>
                <div className='subheader'>
                    About
                </div>
                <p>Aloysius Lip is a 2nd-year undergraduate student at the University of Oxford and the current President of the Oxford University Chess Club. He reads Philosophy, Politics, and Economics, specialising in Microeconomics, Public Economics, and Game Theory. He enjoys programming in his free time, having won the "OxfordHack" international coding competition in 2018. His previous projects in the world of chess development have included:</p>
                <ul>
                    <li><a className='inlineLink' href='http://users.ox.ac.uk/~chess' target='_blank' rel='noopener noreferrer'>Oxford University Chess Club</a> - the official website for the university society</li>
                    <li><a className='inlineLink' href='https://npmjs.com/package/ecf' target='_blank' rel='noopener noreferrer'>ECF.JS</a> - the JavaScript wrapper for the ECF grading database that makes it really easy to download rating data from the ECF for any player or club</li>
                    <li><a className='inlineLink' href='https://npmjs.com/package/lichess' target='_blank' rel='noopener noreferrer'>Lichess.JS</a> - the JavaScript wrapper for the Lichess API</li>
                    <li><a className='inlineLink' href='https://github.com/theLAZYmd/LAZYbot' target='_blank' rel='noopener noreferrer'>LAZYbot</a> - a Discord bot designed for chess servers</li>
                </ul>
                <p>Leave any feedback from the beta deployment of Tournament on <a className='inlineLink' href='https://github.com/Oxford-Chess-Development/toastie-desktop-build/issues' target='_blank' rel='noopener noreferrer'>GitHub</a>. It's super easy to make a GitHub account and you can track the progress on your requests as they're handled! Alternatively, contact Aloysius using one of the below links.</p>
            </div>
            <div className='footer'>
                <div className='icons'>
                    <a href='https://facebook.com/oxfordchess' target='_blank' rel='noopener noreferrer'>
                        <FaFacebook />
                    </a>
                    <a href='https://twitter.com/ChessOxford' target='_blank' rel='noopener noreferrer'>
                        <FaTwitter />
                    </a>
                    <a href='https://linkedin.com/in/aloysiuslip' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin />
                    </a>
                    <a href='https://aloysiuslip.com' target='_blank' rel='noopener noreferrer'>
                        <img src={process.env.PUBLIC_URL + '/icons/website.png'} alt='website'/>
                    </a>
                    <a href='http://beta.oxfordchess.co.uk/' target='_blank' rel='noopener noreferrer'>
                        <img src={process.env.PUBLIC_URL + '/icons/desktop.png'} alt='desktop-beta'/>
                    </a>
                    <a href='https://www.figma.com/file/74z1QM0ZdtdF2TrKiiAiFj/toastie-mobile' target='_blank' rel='noopener noreferrer'>
                        <img src={process.env.PUBLIC_URL + '/icons/mobile.png'} alt='mobile-design'/>
                    </a>
                    <a href='mailto:aloysius.lip@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <img src={process.env.PUBLIC_URL + '/icons/email.png'} alt='email'/>
                    </a>
                </div>
                <div className='author'>Copyright 2020, Aloysius Lip</div>
            </div>
		</div>
	);
}

export default App;
