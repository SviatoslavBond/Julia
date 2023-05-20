import React from 'react'
import { BsFillCheckCircleFill } from 'react-icons/bs'
import { CgDanger } from 'react-icons/cg';
import clsx from 'clsx';

import './error.scss'
//Parent node have to has the -  position:relative it is required
const ErrorMessage = ({ isDirty, isError }) => {
	return (
		<>
			{
				(isDirty && isError)
					?
					<>
						<CgDanger className='check check__danger' />
						<p className='error-message'>{isError}</p>
					</>
					:
					<BsFillCheckCircleFill className={clsx("check", {
						' check__hidden': !isDirty && isError,
						' check__visible': !isError,
					})} />
			}
		</>
	)
}

export default ErrorMessage