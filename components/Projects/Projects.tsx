import { FC } from 'react'
import styles from './Projects.module.scss'
import { Heading } from 'components/basic/Heading/Heading'
import { projectData } from 'data'
import { Img } from 'components/basic/Img/Img'
import { v4 as uuidv4 } from 'uuid';


const { headerText, images } = projectData

export const Projects: FC = () => {
    return (
        <section id={'projects'} className={styles.projects_wrapper} >
            <Heading
                className={styles.projects_header}
                headerText={headerText}
            />
            <div className={styles.image_wrapper}>
                {images.map((picture) => (
                    <Img key={uuidv4()} src={picture.src} alt={picture.alt} className={styles.image} base64={picture.base64} title={picture.title} description={picture.description} link={picture.link} disableScroll={false} />
                ))}
            </div>
        </section>

    )
};
