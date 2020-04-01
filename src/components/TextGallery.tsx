import React, { ReactElement, useState } from 'react';

interface TextGalleryProps {
    children?: JSX.Element[]
    autoAdvance?: number
}

export default function TextGallery(props: TextGalleryProps): ReactElement {

    const [index, setIndex] = useState(0);

    let dots = [] as ReactElement[];
    let children = props.children || []
    for (let i = 0; i < children.length; i++) {
        dots.push(<span
            className={['dot', i === index ? 'dotSelected' : ''].join(' ')}
            onClick={() => setIndex(i)}
        />);
    }

    return (
        <div className='textGallery'>
            <div className='stage'>
                {children[index]}
            </div>
            <div className='selection'>
                {dots}
            </div>
        </div>
    );
}