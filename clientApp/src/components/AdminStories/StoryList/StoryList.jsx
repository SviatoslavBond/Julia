import React from 'react'
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { createSelector } from '@reduxjs/toolkit';
import { Box, Card, Container, Paper } from '@mui/material';
import { formatDate } from 'utils/formateDate';
import { StoryCard } from './StoryCard/StoryCard';
export const StoryList = () => {
	const category = useParams();
	const getWeddingsSelector = createSelector(
		(state) => state.stories.items,
		(stories) => {
			if (category['*'] === 'all-stories') {
				return stories;
			}
			return stories.filter(story => story.category === category['*'])
		}
	)
	const stories = useSelector(getWeddingsSelector);


	return (
		<Box>
			<Container fixed>
				{
					stories.map(story => {
						return (
							<StoryCard story={story} />
						)
					})
				}


			</Container>
		</Box >
	)
}