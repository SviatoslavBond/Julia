import { body } from "express-validator";

export const storyCreateValidation = [
	body('storyName', 'Enter storyName of story').isLength({ min: 4 }).isString(),
	body('location', 'Enter location of story').isString(),
	body('category', 'Category is required').isString(),
	body('describe', 'Describe is required').isString(),
	body('title', ' Enter title of story').isString(),
	body('photo', ' Photo must be array ').isArray(),
	body('date', 'You did not type the date').isString(),
]


