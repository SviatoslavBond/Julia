
import express from 'express';
import { storyCreateValidation } from '../middleware/validators/validations.js';
import handleValidationErrors from '../middleware/validators/handleValidationErrors.js';
const storyRouter = express.Router();
import { stories } from '../controllers/story-controller.js';


storyRouter.post('/story', storyCreateValidation, handleValidationErrors, stories.createStory);
storyRouter.get('/story', stories.getAll);
storyRouter.get('/story/:id', stories.getOne);
storyRouter.delete('/story/:id', stories.delete);
storyRouter.delete('/deleteImage', stories.deleteImage);
storyRouter.patch('/story/:id', storyCreateValidation, handleValidationErrors, stories.update);
storyRouter.get('/:category', stories.getByCategory);


export default storyRouter