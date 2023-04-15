import clsx from 'clsx'
import React from 'react'
import styles from './Dropdown.module.scss'
import { Link } from 'react-router-dom'
const Dropdown = ({ isShow }) => {

	return (
		<div className={clsx(styles.dropdown,
			{ [styles.open]: isShow }
		)}>
			<ul className={clsx(styles.dropdown_menu,
				{ [styles.show]: isShow }
			)}>
				<li>
					<Link to='/weddings'>Wedding</Link>
				</li>
				<li>
					<Link to='/lovestory'>Love Story</Link>
				</li>
				<li>
					<Link to='/family'>Family</Link>
				</li>
				{/* <li>
					<a href="#">Content</a>
				</li> */}
			</ul>
		</div>

	)
}

export default Dropdown