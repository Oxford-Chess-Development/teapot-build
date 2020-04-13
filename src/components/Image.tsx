import React, { useState, useCallback } from 'react';
import { Carousel as RRC } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Gallery from 'react-photo-gallery';
import Lightbox, { Modal, ModalGateway } from 'react-images';
import { PhotoProps } from 'react-photo-gallery';
import styles from '../css/components.module.css';
import url from 'url';

interface Image extends PhotoProps {
	source: string
    src: string
    srcSet: string
	title: string
	width: number
	height: number
	alt?: string
    index: number
}

export interface AlbumProps {
	type: 'carousel' | 'grid'
	enableLightbox: boolean

	photos: string[],
	axis?: 'vertical' | 'horizontal', //def: horizontal
	autoPlay?: boolean //def: true
	selectedItem?: number
	showThumbs?: boolean
	interval?: number
	transitionTime?: number
	centerMode?: boolean
    dynamicHeight?: boolean
    startIndex?: number

	margin?: number
	targetRowHeight?: number
    ratio: number[]
    height?: number
}

export default function Album(props: AlbumProps) {

    const mapToPhoto = useCallback((src: string, index: number): Image => {
		return {
			index,
			source: url.resolve(process.env.PUBLIC_URL, src),
			src: url.resolve(process.env.PUBLIC_URL, src),
			srcSet: url.resolve(process.env.PUBLIC_URL, src),
			width: props.ratio[0],
			height: props.ratio[1],
			title: src
		};
	}, [props.ratio])

	const [currentImage, setCurrentImage] = useState(props.startIndex || 0);
	const [viewerIsOpen, setViewerIsOpen] = useState(false);
	const [photos, setPhotos] = useState(props.photos.map(mapToPhoto));

	const openLightbox = useCallback((event, { photo, index }) => {
		setCurrentImage(index);
		setViewerIsOpen(true);
	}, []);

	const closeLightbox = () => {
		setCurrentImage(0);
		setViewerIsOpen(false);
    };
    
	return (
		<div
			className={props.type === 'grid' ? styles.grid : styles.carousel}
		>
			{!photos.length ? null : props.type === 'grid' ?
				<Gallery	// Grid
					photos={photos}
					onClick={props.enableLightbox !== false ? openLightbox : () => {}}
					margin={props.margin || 2}
					columns={3}
					targetRowHeight={props.height || 200}
				/> :
				<RRC		//React-Reponsive-Carousel
					onClickItem={props.enableLightbox !== false ? openLightbox : () => {}}
					infiniteLoop={true}
					useKeyboardArrows={true}
					showStatus={false}
					emulateTouch={true}
					axis={props.axis || 'horizontal'}
					autoPlay={props.autoPlay !== false}
					selectedItem={props.selectedItem || 0}
					showThumbs={props.showThumbs !== false}
					interval={props.interval || 4000}
					transitionTime={props.transitionTime || 500}
					centerMode={props.centerMode || false}
					dynamicHeight={props.dynamicHeight || true}
				>
					{photos.map((x, i) => {
						if (!x) return null;
						return (
							<div key={x.src + '.' + i.toString()}>
								<img
									src={x.src}
									alt={x.alt}
								></img>
							</div>
						)
					})}
				</RRC>
			}
			{props.enableLightbox !== false ? (
				<ModalGateway>
					{!viewerIsOpen ?  null : (
						<Modal onClose={closeLightbox}>
							<Lightbox
								currentIndex={currentImage}
								views={photos.map(x => ({
									...x,
									caption: x.title
								}))}
							/>
						</Modal>
					)}
				</ModalGateway>
			) : null}
		</div>
	);
}

interface ImgProps {
	src: string
	alt: string
}

export function Img(props: ImgProps) {

	const [viewerIsOpen, setViewerIsOpen] = useState(false);

	return (
		<div onClick={() => setViewerIsOpen(!viewerIsOpen)}>
			<img {...props} width='100%' />
			<ModalGateway>
				{!viewerIsOpen ?  null : (
					<Modal onClose={() => setViewerIsOpen(false)}>
						<Lightbox
							currentIndex={0}
							views={[
								Object.assign({}, props, {
									source: props.src
								})
							]}
						/>
					</Modal>
				)}
			</ModalGateway>
		</div>
	)
}