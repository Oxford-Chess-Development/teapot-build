import React, { ReactElement } from 'react';

export default function Titlebar(): ReactElement {

    const buttons = ['Home', 'Features', 'Preview', 'Downloads', 'About']

    return (
        <div className='header'>
            <div className='logoWrapper'>
                <img
                    src={process.env.PUBLIC_URL + 'images/favicon.png'}
                    className='logo'
                    alt='logo'
                />
            </div>
            <div className='name'>
                <span className='bold'>Tournament</span> by Oxford Chess Development
            </div>
            <div className='buttonContainer'>
                {buttons.map((b, i) => <a
                    className='button'
                    href={'#' + b.toLowerCase()}
                >
                    {b}
                </a>)}                    
            </div>
        </div>
    );
}