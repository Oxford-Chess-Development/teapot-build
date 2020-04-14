import React, { ReactElement, useEffect, useState, Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Redirect, RouteComponentProps } from 'react-router-dom';
import './App.css';
import Titlebar from './components/Titlebar';
import Footer from './components/Footer';
import Home from './pages/Home';
import Products from './pages/Products';
import Pricing from './pages/Pricing';
import Features from './pages/Features';
import About from './pages/About';
import { StaticContext } from 'react-router';

export function scrollToID( id: string) {
    let body = document.getElementsByTagName('BODY')[0];
    if (!body) return;
    let element = document.getElementById(id.toLowerCase()) as HTMLDivElement;
    if (!element) return;
    window.scrollTo({
        top: element.offsetTop - (window.innerHeight * 0.12),
        left: 0,
        behavior: 'smooth'
    });
}

const routes = ['Products', 'Features', 'Pricing', 'About'];
const components = {
	home: Home,
	products: Products,
	features: Features,
	pricing: Pricing,
	about: About
} as {[key: string]: (props?: RouteComponentProps<any, StaticContext, any>) => ReactElement}

function App(): ReactElement {

    let hash = window.location.hash.slice(1);
    const [id, setID] = useState(hash);
    let body = document.getElementsByTagName('BODY')[0];

    useEffect(() => {
        scrollToID(id)
	}, [id, body]);

	return <>
		<Router basename={process.env.PUBLIC_URL}>
			<div className='App'>
				<Titlebar setID={setID} routes={routes} />
				<div className='main'>
						<Route render={({location}) => {
							return (
								<Switch location={location}>
									<Route exact path='/' render={(props) => <Home />} />
									{routes.map((r) => {
										return <Route exact path={'/' + r.toLowerCase()} render={(props) => {
											let Elem = components[r.toLowerCase()];
											return <Elem {...props} />;
										}} />
									})}
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
