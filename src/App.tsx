import React, { ReactElement } from 'react';
import './App.css';
import Titlebar from './components/Titlebar';
import TextGallery from './components/TextGallery';

function App(): ReactElement {
	return (
		<div className='App'>
            
            <Titlebar />

            <div id='home' className='section'>
                <div className='subheader' />
                <div>
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                </div>
            </div>

            <div id='features' className='section' style={{
                    backgroundColor: '#2d132c'
                }}>
                <div className='subheader'>
                    Features
                </div>
                <TextGallery autoAdvance={1}>
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

            <div id='preview' className='section' style={{
                    backgroundColor: '#2d132c'
                }}>
                <div className='subheader'>
                    Preview
                </div>
                <div>
                    <h3>Desktop App</h3>
                    <p>The desktop (organiser) app of this software is available to beta test on this <a href='http://toastie-desktop.s3-website.eu-west-2.amazonaws.com/' target='_blank' rel='noopener noreferrer'>online webpage</a>.</p>
                </div>
                <div>
                    <h3>Mobile App</h3>
                    <p>The design of the mobile (player) app of this software has been published online on <a href='https://www.figma.com/file/74z1QM0ZdtdF2TrKiiAiFj/toastie-mobile' target='_blank' rel='noopener noreferrer'>Figma</a>.</p>
                </div>
            </div>

            <div id='downloads' className='section' style={{
                    backgroundColor: 'lilac'
                }}>
                <div className='subheader'>
                    Downloads
                </div>
                Hello world
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            </div>
            <div id='about' className='section' style={{
                    backgroundColor: '#801336'
                }}>
                <div className='subheader'>
                    About
                </div>
                Hello world
                "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
            </div>
            <div className='footer'>
                © Aloysius Lip, 2020
            </div>
		</div>
	);
}

export default App;
