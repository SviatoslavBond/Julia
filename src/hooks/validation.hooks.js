import { useState } from "react";

export const useValid = () => {
	const [storyName, setNameOfStory] = useState('');
	const [location, setLocation] = useState('');
	const [date, setDate] = useState('');
	const [title, setTitle] = useState('');
	const [titleDirty, setTitleDirty] = useState(false);
	const [storyNameDirty, setNameDirty] = useState(false);
	const [locationDirty, setLocationDirty] = useState(false);
	const [dateDirty, setDateDirty] = useState(false);
	const [errorName, setErrorName] = useState('This field is required');
	const [errorLocation, setErrorLocation] = useState('This field is required');
	const [errorDate, setErrorDate] = useState(true);
	const [errorTitle, setErrorTitle] = useState('Title is required');
	const [formValid, setFormValid] = useState(false);//Change

	const blurHandler = (e) => {
		switch (e.target.name) {
			case 'name':
				setNameDirty(true);
				break;
			case 'city':
				setLocationDirty(true);
				break;
			case 'date':
				setDateDirty(true);
				break;
			case 'title':
				setTitleDirty(true);
				break;
			default:
		}
	}
	const setToInitialStateOfForm = () => {
		setNameOfStory('');
		setLocation('');
		setDate('');
		setTitle('')
		setNameDirty(false);
		setLocationDirty(false);
		setDateDirty(false);
		setTitleDirty(false)
		setErrorName('This field is required');
		setErrorLocation('This field is required');
		setErrorDate(true);
		setErrorTitle('Title is required');
	}

	const changeHandler = (e) => {
		console.log(e);
		if (typeof e !== "string") {
			// eslint-disable-next-line default-case
			switch (e.target.name) {
				case 'name':
					if (e.target.value.length > 5) {
						setErrorName(false)
					} else {
						setErrorName('Min 5 letters')
					}
					setNameOfStory(e.target.value)
					break;
				case 'date':
					if (e.target.value === '') {
						setErrorDate('Date is required');
					} else {
						setErrorDate(false)
					}
					setDate(e.target.value)
					break;
				case 'title':
					if (e.target.value.length < 5) {
						setErrorTitle('Min 5 letters')
					} else {
						setErrorTitle(false)
					}
					setTitle(e.target.value)
					break;
			}
		} else {
			if (e === '') {
				setErrorLocation('You must type location of your story')
			} else {
				setErrorLocation(false)
			}
			setLocation(e);
		}

	}

	return {
		setFormValid,
		blurHandler,
		setToInitialStateOfForm,
		changeHandler,
		storyName,
		location,
		date,
		title,
		titleDirty,
		storyNameDirty,
		locationDirty,
		dateDirty,
		errorName,
		errorLocation,
		errorDate,
		errorTitle,
		formValid
	}
}