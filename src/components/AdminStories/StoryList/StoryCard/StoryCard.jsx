import React from 'react'
import { Box, Paper, Typography, Button } from '@mui/material'
import { formatDate } from 'utils/formateDate';
import { ImLocation2 } from 'react-icons/im'
import { MdDriveFileRenameOutline, MdOutlineDescription, MdTitle, MdDateRange } from 'react-icons/md'

import './storyCard.scss';

export const StoryCard = ({ story }) => {
	const { storyName, location, describe, title, createdAt, photo } = story;
	const { path } = photo.find(photo => photo.cover === true);

	return (
		<Paper className='story-card' sx={{ marginY: 2, p: 2 }} elevation={3}>
			<Box display={'flex'}>
				<Box sx={{ width: 150, maxHeight: 150, marginRight: 2 }}>
					<img className='responseImg' src={path} />
					<Typography sx={{ mt: 2 }}>Количество фото: <b>{photo.length}</b></Typography>
				</Box>
				<Box>
					<Typography sx={{ fontSize: 20, fontWeight: 700 }}>Info:</Typography>
					<Typography className='story-card__text'>
						<ImLocation2 color='orange' />	<b>Location:</b> {location}
					</Typography>
					<Typography className='story-card__text'>
						<MdDriveFileRenameOutline color='purple' />	<b>Name:</b> {storyName}
					</Typography>
					<Typography className='story-card__text'>
						<MdOutlineDescription color='red' />	<b>Description:</b> {describe}
					</Typography>
					<Typography className='story-card__text'>
						<MdTitle color='orange' />  <b>Title:</b> {title}
					</Typography>
					<Typography className='story-card__text'>
						<MdDateRange color='green' />	<b>Created at:</b> {formatDate(createdAt)}
					</Typography>
					<Box sx={{ mt: 2 }} >
						<Button variant='contained' sx={{ mr: 2 }}>Edit story</Button>
						<Button variant='contained' color='secondary'>Prewiev story</Button>
					</Box>

				</Box>
				<Box sx={{ ml: 'auto', mt: 'auto' }}>
					<Button variant='contained' color='error'>Delete story</Button>
				</Box>

			</Box>

		</Paper>

	)
}