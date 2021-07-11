import { FC, useEffect, useState } from 'react'
import styles from './Contact.module.scss'
import { Heading } from 'components/basic/Heading/Heading'
import { contactData } from 'data'
import { v4 as uuidv4 } from 'uuid';


const { headerText, socialMedia, hello } = contactData

export const Contact: FC = () => {
    const [helloWord, setHelloWord] = useState<string>('Hello')
    const [isHovering, setIsHovering] = useState<boolean>(false)
    const [wordIndex, setWordIndex] = useState<number>(0)

    const wordHandler = () => {
        setWordIndex(wordIndex + 1)
        setHelloWord(hello[wordIndex]['hello'])
    }

    useEffect(() => {
        let timeout: ReturnType<typeof setTimeout>;

        if ((wordIndex < hello.length - 1) && isHovering) {
            timeout = setTimeout(() => wordHandler(), 500);
        } else {
            setWordIndex(0)
        }

        return () => {
            clearTimeout(timeout);
        };


    }, [hello, isHovering, wordIndex])

    return (
        <section id={'contact'} className={styles.contact_wrapper}>
            <Heading
                className={styles.contact_header}
                headerText={headerText}
            />
            <div className={styles.social_container}>
                <h1 onMouseEnter={() => setIsHovering(true)} onMouseLeave={() => setIsHovering(false)}>Say {helloWord}</h1>
                <div>
                    {socialMedia.map((website) => (
                        <a key={uuidv4()} href={website.url}>{website.name}</a>
                    ))}
                </div>
            </div>
        </section>
    )
};
