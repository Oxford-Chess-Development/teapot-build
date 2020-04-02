import React, { ReactElement, useEffect, useState, useCallback } from 'react';
import './App.css';
import Titlebar, { TitlebarProps } from './components/Titlebar';
import TextGallery from './components/TextGallery';

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
                    backgroundColor: 'rgb(44, 49, 19)'
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

            <div id='section-preview' className='section' style={{
                    backgroundColor: '#2d132c'
                }}>
                <div className='subheader'>
                    Preview
                </div>
                <div className='subsection'>
                    <h3>Desktop App</h3>
                    <p>The desktop (organiser) app of this software is available to beta test on this <a href='http://beta.oxfordchess.co.uk/' target='_blank' rel='noopener noreferrer'>online webpage</a>.</p>
                    <div className='installer'>
                        <img src={process.env.PUBLIC_URL + '/images/linux.png'} alt='linux' />
                        <a className='downloadLink' href={'http://beta.oxfordchess.co.uk/installers/toastie-desktop_1.0.0_amd64.deb'}>
                            <div className='downloadTitle'>↧ .deb</div>
                            <div>Debian, Ubuntu</div>
                        </a>
                    </div>
                </div>
                <div className='subsection'>
                    <h3>Mobile App</h3>
                    <p>The design of the mobile (player) app of this software has been published online on <a href='https://www.figma.com/file/74z1QM0ZdtdF2TrKiiAiFj/toastie-mobile' target='_blank' rel='noopener noreferrer'>Figma</a>.</p>
                </div>
            </div>

            <div id='section-downloads' className='section' style={{
                    backgroundColor: 'lilac'
                }}>
                <div className='subheader'>
                    Downloads
                </div>
                The Desktop version of this app will be available to download for Windows, Mac, and Debian-based Linux distributions. The mobile client for players will be available on the AppStore and the Google Play Store.
            </div>
            <div id='section-about' className='section' style={{
                    backgroundColor: 'rgb(80, 5, 5)'
                }}>
                <div className='subheader'>
                    About
                </div>
                Aloysius Lip is a 2nd-year undergraduate student at the University of Oxford and the current President of the Oxford University Chess Club. He enjoys programming in his free time.
            </div>
            <div className='footer'>
                <div className='icons'>
                    <a href='https://facebook.com/oxfordchess' target='_blank' rel='noopener noreferrer'>
                        <img src={process.env.PUBLIC_URL + '/icons/facebook.png'} />
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
