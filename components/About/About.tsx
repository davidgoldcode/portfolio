import { FC } from 'react';
import styles from './About.module.scss';
import { Img } from "components/basic/Img";
import { aboutData } from 'data'
import { Heading } from 'components/basic/Heading/Heading'

const { headerText, contentText, images } = aboutData

export const About: FC = () => {
	return (
		<section id={'about'} className={styles.about_wrapper}>
			<Heading
				className={styles.about_header}
				headerText={headerText}
				contentText={contentText}
			/>
			<div className={styles.image_container} >
				{images.map((picture) => (<Img src={picture.src} alt={picture.alt} className={styles.images} title={picture.title} description={picture.description} disableScroll={false} />))}
			</div>
		</section>
	);
};
