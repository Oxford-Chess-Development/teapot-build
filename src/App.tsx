import React, { ReactElement, useEffect, useState, useCallback } from 'react';
import './App.css';
import Titlebar, { TitlebarProps } from './components/Titlebar';
import TextGallery from './components/TextGallery';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

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
                <div className='imageWrapper'>
                    <img className='homeImage' src={process.env.PUBLIC_URL + '/images/cover-plain.jpg'} alt='Tournament by Oxford Chess Development' />
                </div>
            </div>

            <div id='section-features' className='section' style={{
                    backgroundColor: 'rgb(44, 85, 19)'
                }}>
                <div className='subheader'>
                    Features
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
                    <p>The design of the mobile (player) app of this software has been published online on <a className='inlineLink' href='https://www.figma.com/file/74z1QM0ZdtdF2TrKiiAiFj/toastie-mobile' target='_blank' rel='noopener noreferrer'>Figma</a>.</p>
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
                    <a href='https://linkedin.com/in/aloysiuslip' target='_blank' rel='noopener noreferrer'>
                        <FaLinkedin />
                    </a>
                    <a href='https://aloysiuslip.com' target='_blank' rel='noopener noreferrer'>
                        <img src={process.env.PUBLIC_URL + '/icons/website.png'} />
                    </a>
                    <a href='http://beta.oxfordchess.co.uk/' target='_blank' rel='noopener noreferrer'>
                        <img src={process.env.PUBLIC_URL + '/icons/desktop.png'} />
                    </a>
                    <a href='https://www.figma.com/file/74z1QM0ZdtdF2TrKiiAiFj/toastie-mobile' target='_blank' rel='noopener noreferrer'>
                        <img src={process.env.PUBLIC_URL + '/icons/mobile.png'} />
                    </a>
                    <a href='mailto:aloysius.lip@gmail.com' target='_blank' rel='noopener noreferrer'>
                        <img src={process.env.PUBLIC_URL + '/icons/email.png'} />
                    </a>
                </div>
                <div className='author'>Copyright 2020, Aloysius Lip</div>
            </div>
		</div>
	);
}

export default App;
