import React, { ReactElement, useEffect, useState } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import Titlebar from './components/Titlebar';
import TextGallery from './components/TextGallery';
import Album from './components/Image';
import Footer from './components/Footer';
import Home from './pages/Home';
import Downloads from './pages/Downloads';
import Features from './pages/Features';
import About from './pages/About';

function scrollToID({ id }: { id: string }) {
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

	return <>
		<Router basename={process.env.PUBLIC_URL}>
			<div className='App'>
				<Titlebar setID={setID} />
				<div className='main'>
						<Route render={({location}) => {
							return (
								<Switch location={location}>
									<Route exact path='/' component={Home} />
									<Route exact path='/home' render={(props) => <Redirect to={{
										pathname: '/',
										state: props.history.location.state
									}} />} />
									<Route exact path='/features' component={Features} />
									<Route exact path='/downloads' component={Downloads} />
									<Route exact path='/about' component={About} />
									<Route path='*' render={() => null} status={404} />
								</Switch>
							);
						}}/>          
					<Footer />
				</div>
			</div>
		</Router> 
	</>;
}

export default App;
