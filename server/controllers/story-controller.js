import { StoryModel } from "../models/story.js"
import * as fs from 'fs';
class Stories {
	createStory = async (req, res) => {
		try {
			const { category, photo, location, storyName, describe, title, date } = req.body
			const doc = new StoryModel({
				storyName,
				location,
				category,
				photo,
				describe,
				title,
				date
			})
			const story = await doc.save();
			res.json(story)
		} catch (error) {
			res.status(500).json(error)
		}
	}

	getAll = async (req, res) => {
		try {
			const stories = await StoryModel.find()
			if (!stories) {
				res.status(403).json({
					message: "Stories not found"
				})
			}
			res.json(stories)

		} catch (err) {
			res.status(500).json(err)
		}
	}
	getOne = (req, res) => {
		try {
			const storyId = req.params.id
			StoryModel.findById(storyId).then(doc => {
				res.json(doc)
			}).catch(err => {
				res.status(403).json(err)
			})

		} catch (e) {
			res.status(500).json(e)
		}
	}
	delete = (req, res) => {
		try {
			const storyId = req.params.id;
			StoryModel.findByIdAndDelete(storyId).then(doc => {
				res.json(doc)
			}).catch(err => {
				res.status(403).json(err)
			})
		} catch (e) {
			res.status(500).json(e)
		}
	}
	update = (req, res) => {
		try {
			const { category, photo, location, storyName, describe, title } = req.body
			const storyId = req.params.id;
			StoryModel.findByIdAndUpdate(
				{ _id: storyId },
				{
					storyName,
					location,
					category,
					photo,
					describe,
					title
				}, {
				new: true
			}
			).then(doc => {
				res.json(doc)
			}).catch(err => {
				res.status(403).json(err)
			})

		} catch (e) {
			res.status(500).json(e)
		}
	}
	getByCategory = (req, res) => {
		try {
			const category = req.params.category;
			StoryModel.find({ category })
				.then(doc => res.json(doc))
				.catch(err => res.status(403).json(err))

		} catch (e) {
			res.status(500).json(e)
		}
	}
	deleteImage = (req, res) => {
		try {
			const path = req.body.path
			fs.unlink(`./${path}`, (err) => {
				if (err) {
					res.status(500).json('Failed to delete file');
					return;
				}
				res.json({
					deleteImage: true,
					success: true
				});
			})

		} catch (error) {
			res.status(403).json(error)
		}
	}
}

const stories = new Stories()
export { stories }