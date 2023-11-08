import { Schema, model } from "mongoose";
const StorySchema = new Schema({
	storyName: {
		type: String,
		required: true
	},
	describe: String,
	category: {
		type: String,
		required: true
	},
	location: {
		type: String,
		required: true
	},
	date: {
		type: String,
		required: true
	},
	title: {
		type: String,
		required: true
	},
	photo: [{
		cover: {
			type: Boolean,
			require: true
		},
		path: {
			type: String,
			required: true
		}
	}],


}, { timestamps: true })
export const StoryModel = model('Story', StorySchema)