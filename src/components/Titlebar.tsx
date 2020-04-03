import React, { ReactElement, Dispatch, SetStateAction } from 'react';
import { isMobile } from '../utils/auth';

export interface TitlebarProps {
    setID: Dispatch<SetStateAction<string>>
}

export default function Titlebar(props: TitlebarProps): ReactElement {

    const buttons = ['Home', 'Features', 'Preview', 'Downloads', 'About']

    return (
        <div className='header'>
            <div className='logoWrapper'>
                <img
                    src={process.env.PUBLIC_URL + '/images/favicon.png'}
                    className='logo'
                    alt='logo'
                />
            </div>
            {isMobile() ? null : <>
                <div className='nameWrapper'>
                    <div className='name'>
                        <span className='bold'>Tournament</span> by Oxford Chess Development
                    </div>
                </div>
                <div className='buttonContainer'>
                    {buttons.map((b) => {
                        if (b === 'Preview') return <a
                            className='button'
                            href='http://beta.oxfordchess.co.uk'
                            target='_blank'
                            rel='nooopener noreferrer'
                        >
                            {b}
                        </a>
                        /*if (b === 'Downloads') return <a
                            className='button'
                            href='http://repo.oxfordchess.co.uk'
                            target='_blank'
                            rel='nooopener noreferrer'
                        >
                            {b}
                        </a>*/
                        return <a
                            className='button'
                            onClick={() => props.setID(b)}
                        >
                            {b}
                        </a>
                    })}
                </div>
            </>}
        </div>
    );
}