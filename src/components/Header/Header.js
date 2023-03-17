import React, { useState, useRef, useEffect } from 'react'
import { Link } from 'react-router-dom';
import clsx from 'clsx';
import { useSwipeable } from 'react-swipeable';
import { AiOutlineMenu, AiOutlineCloseCircle } from 'react-icons/ai'
import styles from './Header.module.scss'
import Dropdown from './DropdownMenu/Dropdown';

const Header = () => {
	const [show, setShow] = useState(false);
	const [isOpen, setIsOpen] = useState(false);
	const btnRef = useRef(null);
	const handlers = useSwipeable({
		onSwipedLeft: () => setIsOpen(!isOpen),
	});
	document.body.style.overflow = isOpen ? 'hidden' : 'auto';

	useEffect(() => {
		const handleCloseMenu = (event) => {
			if (event.target !== btnRef.current && event.target.previousElementSibling !== btnRef.current) {
				setShow(false)
			}
		}
		document.addEventListener('click', handleCloseMenu)
		return () => {
			document.removeEventListener('click', handleCloseMenu)
		}
	}, [btnRef]);

	return (
		<header >
			<div className='container'>
				<div className={styles.wrapper}>
					<Link className={styles.logo} to='/' >
						<h2>Julia Kulyok</h2>
					</Link>
					<ul {...handlers} className={clsx(styles.menu, { [styles.active]: isOpen })}>
						<li className={styles.menu_photo}>
							<a ref={btnRef} onClick={() => setShow(!show)} className={styles.menu_item} href='#'>
								Photo
							</a>
							<button className={styles.menu_btn} onClick={() => setShow(!show)}  ></button>

							<Dropdown isShow={show} />

						</li>
						<li>
							<a className={styles.menu_item} href='/price'>
								Price
							</a>
						</li>
						<li >
							<a className={styles.menu_item} href='/contacts'>
								Contacts
							</a>
						</li>
					</ul>
					<div onClick={() => setIsOpen(!isOpen)} className={styles.burger}>
						{
							isOpen ? <AiOutlineCloseCircle size={30} color='white' /> : <AiOutlineMenu size={25} color='#104149' />
						}
					</div>

				</div>
				<div className={styles.devider}></div>
			</div>


		</header>
	)
}

export default Header