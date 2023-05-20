import { configureStore } from "@reduxjs/toolkit";
import { storyReducer } from "components/Story/storySlice";
const store = configureStore({
	reducer: {
		story: storyReducer
	},
	devTools: process.env.NODE_ENV !== 'production',
})
export default store;