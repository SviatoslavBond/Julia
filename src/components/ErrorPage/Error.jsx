import React from 'react'
import error from "./404.svg";
import { useNavigate } from 'react-router-dom';
import { Card, Typography, Button, Box } from '@mui/material';


import './error.scss'
const Error = () => {
	const nav = useNavigate();
	return (
		<Card sx={{ py: 2 }}>
			<div className="container">
				<Box display={'flex'} alignItems={'center'} justifyContent={'center'}>
					<img className='error__image' src={error} alt="Error page. Something went wrong" />
				</Box>
				<Typography sx={{ fontSize: '2.5rem', textAlign: 'center', color: 'darkviolet' }}>Something went wrong</Typography>
				<Typography sx={{ fontSize: '1.5rem', textAlign: 'center' }}>This page doesn’t exist or was removed!</Typography>
				<Typography sx={{ fontSize: '1.2rem', textAlign: 'center' }}>We suggest you go back to home.</Typography>
				<Button
					color="secondary"
					onClick={() => nav(-1, { state: 'error' })}
					sx={{ margin: '0 auto', display: 'block', my: 1, px: 4 }}
					variant="contained">Back</Button>
			</div>
		</Card>
	)
}

export default Error