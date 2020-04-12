import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import { Link } from 'react-router-dom';
import { isMobile } from '../utils/auth';
import styles from '../css/titlebar.module.css';

export interface TitlebarProps {
    setID: Dispatch<SetStateAction<string>>
}

export default function Titlebar(props: TitlebarProps): ReactElement {

    const buttons = ['Home', 'Features', 'Preview', 'Downloads', 'About']

    return (
        <div className={styles.header}>
            <div className={styles.logoWrapper}>
                <img
                    src={process.env.PUBLIC_URL + '/images/favicon.png'}
                    className={styles.logo}
                    alt='logo'
                />
            </div>
            {isMobile() ? null : <>
                <div className={styles.nameWrapper}>
                    <div className={styles.name}>
                        <span className={'bold'}>Tournament</span> by Oxford Chess Development
                    </div>
                </div>
                <div className={styles.buttonContainer}>
                    {buttons.map((b, i) => {
                        if (b === 'Preview') return <a
							key={[b, i].join('.')}
                            className={styles.button}
                            href='http://beta.oxfordchess.co.uk'
                            target='_blank'
                            rel='noopener noreferrer'
                        >
                            {b}
                        </a>
                        /*if (b === 'Downloads') return <a
                            className={styles.button}
                            href='http://repo.oxfordchess.co.uk'
                            target='_blank'
                            rel='nooopener noreferrer'
                        >
                            {b}
                        </a>*/
                        return <Link
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
                    })}
                </div>
            </>}
        </div>
    );
}