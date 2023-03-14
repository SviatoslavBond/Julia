import clsx from 'clsx'
import React from 'react'
import styles from './Dropdown.module.scss'
import { Collapse, List, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
const Dropdown = ({ isShow }) => {


	return (
		<div className={clsx(styles.dropdown,
			{ [styles.open]: isShow }
		)}>
			<ul className={clsx(styles.dropdown_menu,
				{ [styles.show]: isShow }
			)}>
				<li>
					<a href="#">Wedding</a>
				</li>
				<li>
					<a href="#">Love Story</a>
				</li>
				<li>
					<a href="#">Family</a>
				</li>
				<li>
					<a href="#">Content</a>
				</li>
			</ul>
		</div>
		// <Collapse in={isShow} timeout="auto" unmountOnExit>
		// 	<ul className={styles.dropdown_menu}>
		// 		<li>
		// 			<a href="#">Wedding</a>
		// 		</li>
		// 		<li>
		// 			<a href="#">Love Story</a>
		// 		</li>
		// 		<li>
		// 			<a href="#">Family</a>
		// 		</li>
		// 		<li>
		// 			<a href="#">Content</a>
		// 		</li>
		// 	</ul>
		// </Collapse>
	)
}

export default Dropdown