import React, { ReactElement, useState, useEffect, useReducer, useCallback } from 'react';
import styles from '../css/components.module.css';

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
            key={['textGallery', 'dot', i].join('.')}
            className={[styles.dot, i === index ? styles.dotSelected : ''].join(' ')}
            onClick={() => {
                setIndex(i);
                setHasClicked(true);
            }}
        />);
    }

    const updateIndex = useCallback(() => {
        if (!props.autoAdvance) return;
        let x: NodeJS.Timeout;
        if (!hasClicked) x = setTimeout(() => setIndex((index + 1) % length), props.autoAdvance);
        return () => {
            clearTimeout(x);
        }
    }, [index, length, props.autoAdvance, hasClicked]);

    useEffect(updateIndex, [updateIndex]);

    return (
        <div className={styles.textGallery}>
            <div className={styles.stage} style={{
                left: `calc(-100vw * ${index})`
            }}>
                {children.map((c, i) => <div key={['textGallery', 'child', i].join('.')}>{c}</div>)}
            </div>
            <div className={styles.selection}>
                {dots}
            </div>
        </div>
    );
}