import { FC, useState, useEffect, MouseEventHandler } from 'react';
import Link from 'next/link';
import { v4 as uuidv4 } from 'uuid';
import cx from 'classnames';
import styles from './Header.module.scss';
import Head from 'next/head';
import { Hamburger } from './Hamburger'
import { headerData as tags } from 'data';



export const Header: FC = (props) => {
	const [isOpen, setIsOpen] = useState(false)

	const hamburgerClickHandler: MouseEventHandler = () => {
		setIsOpen(!isOpen)
	}

	useEffect(() => {
		const viewportHandler = () => {
			const windowSize = window.innerWidth;
			if (windowSize >= 600) {
				setIsOpen(false);
			} else {
				return;
			}
		};

		window.addEventListener('resize', viewportHandler);

		return () => window.removeEventListener('resize', viewportHandler);
	}, []);


	return (
		<>
			<Head>
				<title>davidgold dot io</title>
				<meta name="description" content="Portfolio Page" />
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header className={cx(styles.header_container, { [styles.mobile_open]: isOpen }, { [styles.mobile_closed]: !isOpen })}>
				<ul>
					{tags.map(({ title, href }) => {
						return (
							<li>
								<Link href={href} key={uuidv4()}>
									<a>{title}</a>
								</Link>
							</li>
						);
					})}
				</ul>
			</header>

			<>
				<Hamburger isOpen={isOpen} clickHandler={hamburgerClickHandler} />
			</>

		</>
	);
};

