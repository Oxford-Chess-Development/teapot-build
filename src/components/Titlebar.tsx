import React, { ReactElement, Dispatch, SetStateAction } from 'react';

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
            <div className='nameWrapper'>
                <div className='name'>
                    <span className='bold'>Tournament</span> by Oxford Chess Development
                </div>
            </div>
            <div className='buttonContainer'>
                {buttons.map((b) => {
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
        </div>
    );
}