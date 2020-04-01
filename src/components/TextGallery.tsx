import React, { ReactElement, useState, useEffect, useReducer } from 'react';

interface TextGalleryProps {
    children?: JSX.Element[]
    autoAdvance?: number
}

export default function TextGallery(props: TextGalleryProps): ReactElement {

    const [index, setIndex] = useState(0);
    const [hasClicked, setHasClicked] = useReducer((state: boolean, action: boolean): boolean => {
        if (action) setTimeout(() => setHasClicked(false), 10000);
        return action;
    }, false);
    let length = props.children ? props.children.length : 0;

    let dots = [] as ReactElement[];
    let children = props.children || []
    for (let i = 0; i < children.length; i++) {
        dots.push(<span
            className={['dot', i === index ? 'dotSelected' : ''].join(' ')}
            onClick={() => {
                setIndex(i);
                setHasClicked(true);
            }}
        />);
    }

    useEffect(() => {
        if (!props.autoAdvance) return;
        let x: NodeJS.Timeout;
        if (!hasClicked) x = setTimeout(() => setIndex((index + 1) % length), props.autoAdvance);
        return () => {
            clearTimeout(x);
        }
    }, [index, props.children?.length, props.autoAdvance, hasClicked]);

    return (
        <div className='textGallery'>
            <div className='stage' style={{
                left: `calc(-100% * ${index})`
            }}>
                {children.map(c => <div>{c}</div>)}
            </div>
            <div className='selection'>
                {dots}
            </div>
        </div>
    );
}