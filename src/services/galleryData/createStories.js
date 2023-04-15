import { v4 as uid } from 'uuid';
import { getPathsImages } from 'utils/getPathsImage';
export const createStoryItems = (contexts, category) => {
	const stories = contexts.map(context => {
		const path = getPathsImages(context);


		const dataOfEvent = context.id.split('/').pop().split(' ')[0]
		const [name, year, location] = dataOfEvent.split('_')
		return {
			paths: path,
			id: uid(),
			name,
			year,
			location,
			category: category
		}
	})
	return stories;
}