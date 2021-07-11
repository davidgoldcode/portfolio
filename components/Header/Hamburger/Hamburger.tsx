import { FC, MouseEventHandler, useState } from 'react'
import cx from 'classnames'
import styles from './Hamburger.module.scss'

interface HamburgerProps {
    className?: string;
    isOpen: boolean;
    clickHandler: MouseEventHandler;
}

export const Hamburger: FC<HamburgerProps> = (props) => {
    return (
        <>
            <div className={cx(props.className, styles.hamburger_container, { [styles.hamburger_open]: props.isOpen })} onClick={props.clickHandler} aria-expanded={props.isOpen}
            >
                <span className={styles.hamburger_inner}></span>
            </div>
        </>
    )
};

Hamburger.defaultProps = {}