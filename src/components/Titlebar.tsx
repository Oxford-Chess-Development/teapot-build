import React, { ReactElement, Dispatch, SetStateAction, useState } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from '../utils/auth';
import styles from '../css/titlebar.module.css';
import { GiHamburgerMenu } from 'react-icons/gi';

export interface TitlebarProps {
	setID: Dispatch<SetStateAction<string>>
	routes: string[]
}

export default function Titlebar(props: TitlebarProps): ReactElement {

	const [mobileMenu, setMenu] = useState(false);

    return <>
        <div className={styles.header}>
            <div className={styles.logoWrapper}>
                <img
                    src={process.env.PUBLIC_URL + '/images/favicon.png'}
                    className={styles.logo}
                    alt='logo'
                />
            </div>
            {isMobile() ? <div className={styles.menuButton} onClick={() => setMenu(!mobileMenu)}>
					<GiHamburgerMenu />
				</div> : <>
                <div className={styles.nameWrapper}>
					<Link 
						to={{
							pathname: '/',
							state: {
								from: window.location.pathname
							}
						}}
						className={styles.name}>
                        <span className={['highlighted'].join(' ')}>scorch</span>chess
                    </Link>
                </div>
                <div className={styles.buttonContainer}>
                    {props.routes.map((b, i) => {
						if (b === 'FAQs') return null;
                        return <>
							<Link
								key={[b, i].join('.')}
								className={styles.button}
								onClick={() => props.setID(b)}
								to={{
									pathname: '/' + b.toLowerCase(),
									state: {
										from: window.location.pathname
									}
								}}
							>
								{b}
							</Link>
						</>
                    })}
                </div>
            </>}
        </div>
		<div className={styles.mobileMenu} style={{
			maxHeight: mobileMenu ? '100%' : '0px'
		}}>
			<div style={{ height: '26vh' }} />
			{['Home', ...props.routes].map((b, i) => {
					return <>
					<Link
						key={[b, i].join('.')}
						className={styles.button}
						onClick={() => setMenu(false)}
						to={{
							pathname: b === 'Home' ? '/' : '/' + b.toLowerCase(),
							state: {
								from: window.location.pathname
							}
						}}
					>
						{b}
					</Link>
				</>
			})}
		</div>
    </>;
}