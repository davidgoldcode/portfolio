import { FC } from 'react';
import cx from 'classnames';
import styles from './HomePage.module.scss';
import { homeData } from 'data'
import { Img } from "components/basic/Img";

const { headerText, images } = homeData;

export const HomePage: FC = () => {
	return (
		<section id={'home'} className={styles.homepage_container}>
			<h1>{headerText}</h1>
			{images.map((picture) => <Img src={picture.src} alt={picture.alt} className={styles.image} base64={picture.base64} disableScroll={true} hasOverlay={false} />)}
		</section>
	)
};
