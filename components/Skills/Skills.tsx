import { FC } from 'react'
import cx from 'classnames'
import styles from './Skills.module.scss'
import { skillsData } from 'data'
import { Heading } from 'components/basic/Heading/Heading'
import { v4 as uuidv4 } from 'uuid';



const { headerText, contentText, skills, accolades } = skillsData

export const Skills: FC = () => {

    return (
        <section id={'skills'} className={styles.skills_wrapper}>
            <Heading
                className={styles.skills_header}
                headerText={headerText}
                contentText={contentText}
            />
            <div className={styles.skills_container} >
                <h2>Technical Chops:</h2>
                {skills.map((skill) => (
                    <p key={uuidv4()}>{skill}</p>
                ))}
                <h2>Accolades:</h2>
                {accolades.map((skill) => (
                    <p key={uuidv4()}>{skill}</p>
                ))}
            </div>
        </section>

    )
};
