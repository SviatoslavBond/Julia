import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useSwipeable } from 'react-swipeable';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai'
import styles from './Header.module.scss'
const Header = () => {
	const [isOpen, setIsOpen] = useState(false);
	const handlers = useSwipeable({
		onSwipedLeft: (eventData) => setIsOpen(!isOpen),

	});
	document.body.style.overflow = isOpen ? 'hidden' : 'auto';


	return (
		<header >
			<div className={styles.wrapper}>
				<Link className={styles.logo} to='/' >
					<h2>Julia Kulyok</h2>
				</Link>
				<ul {...handlers} className={clsx(styles.menu, { [styles.active]: isOpen })}>
					<li>
						<a href='/photo'>
							Photo
						</a>
					</li>
					<li>
						<a href='/price'>
							Price
						</a>
					</li>
					<li>
						<a href='/contacts'>
							Contacts
						</a>
					</li>
				</ul>
				<div onClick={() => setIsOpen(!isOpen)} className={styles.burger}>
					{
						isOpen ? <AiOutlineCloseCircle size={30} color='#09272c' /> : <AiOutlineMenu size={25} color='#104149' />
					}

				</div>

			</div>

		</header>
	)
}

export default Header