import React from 'react';
import styles from '../css/name.module.css';
import { useState } from 'react';
import { useEffect } from 'react';

const straplines = [
	'eboard',
	'ing system',
	'e manager'
]

export default function Name() {

	const [expand, setExpand] = useState(false);
	const [line, setLine] = useState(0);

	useEffect(() => {
		let x = setTimeout(() => {
			setExpand(!expand);
			setLine((line + 1) % straplines.length);
		}, expand ? 8000 : 6000);
		return () => clearTimeout(x);
	}, [expand, setExpand]);

	return (
		<div className={styles.text}>
			<div className={[styles.your].join(' ')}>
				<div className={[!expand ? styles.slideRight : styles.slideLeft].join(' ')}>
					{'your \u200b'}
				</div>
			</div>
			<div className={'highlighted'}>scor</div>
			<div className={[styles.board, expand ? styles.expand : styles.contract].join(' ')}>
				<div>{straplines[line]}{'\u200b'} of {'\u200b'}</div>
			</div>
			<div className={'highlighted'}>ch</div>
			<div className={[styles.oice, expand ? styles.expand : styles.contract].join(' ')}>
				<div>oice</div>
			</div>
			{!expand ? <div className={[styles.fadeIn].join(' ')}>
				<div>chess</div>
			</div> : null}
		</div>
	)
}