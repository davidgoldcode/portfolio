import { FC } from 'react'
import cx from 'classnames'
import styles from './Heading.module.scss'

interface HeadingProps {
    headerText: string;
    contentText?: string;
    className?: string;
}

export const Heading: FC<HeadingProps> = (props) => {
    return (
        <header className={cx(props.className, styles.heading_container)}>
            <h1>{props.headerText}</h1>
            {props.contentText && <p>{props.contentText}</p>}
        </header>

    )
};

Heading.defaultProps = {}