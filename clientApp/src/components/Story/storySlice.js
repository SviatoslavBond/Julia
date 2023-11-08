import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
const initialState = {
	items: [],
	storiesLoadingStatus: 'loading'
};
export const fetchStories = createAsyncThunk(
	'stories/fetchStories',
	async () => {
		const { data } = await axios.get(`${process.env.REACT_APP_API_URL}/story`,);
		return data
	}
)
const fetchStoriesStatus = {
	[fetchStories.pending]: (state) => {
		state.storiesLoadingStatus = 'loading'
	},
	[fetchStories.fulfilled]: (state, action) => {
		state.storiesLoadingStatus = 'loaded'

		state.items = action.payload
	},
	[fetchStories.rejected]: (state) => {
		state.storiesLoadingStatus = 'error'
	}
}
const storySlice = createSlice({
	name: 'story',
	initialState,
	reducers: {

	},
	extraReducers: {
		...fetchStoriesStatus
	}
})

export const storyReducer = storySlice.reducer
