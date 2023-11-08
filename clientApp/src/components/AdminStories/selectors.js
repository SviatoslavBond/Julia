import { createSelector } from "@reduxjs/toolkit";

export const getWeddingsSelector = createSelector(
	(state) => state.stories.items,
	(stories) => stories.filter(story => story.category === 'wedding')
)
export const getLoveStorySelector = createSelector(
	(state) => state.stories.items,
	(stories) => stories.filter(story => story.category === 'lovestory')
)
export const getFamilySelector = createSelector(
	(state) => state.stories.items,
	(stories) => stories.filter(story => story.category === 'family')
)
export const getContentSelector = createSelector(
	(state) => state.stories.items,
	(stories) => stories.filter(story => story.category === 'content')
)