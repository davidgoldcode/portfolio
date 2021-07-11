import { FC } from 'react';
import cx from 'classnames';
import styles from './HomePage.module.scss';
import { Img } from "components/basic/Img";

// TODO: add img props 

interface HomePageProps {
	className?: string;
}

export const HomePage: FC<HomePageProps> = (props) => {
	return (
		<section id={'home'} className={cx(props.className, styles.homepage_container)}>
			<h1>David Gold</h1>
			<Img src={'/assets/homepage/me_nyc_homepage.jpg'} alt="Vercel Logo" className={styles.image} disableScroll={true} hasOverlay={false} />
		</section>
	)
};
