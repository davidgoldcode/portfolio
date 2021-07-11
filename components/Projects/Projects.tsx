import { FC } from 'react'
import styles from './Projects.module.scss'
import { Heading } from 'components/basic/Heading'
import { projectData } from 'data'
import { Img } from 'components/basic/Img'

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
                    <Img src={picture.src} alt={picture.alt} className={styles.image} title={picture.title} description={picture.description} link={picture.link} disableScroll={false} />
                ))}
            </div>
        </section>

    )
};
