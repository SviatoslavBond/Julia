import React, { useState, useEffect } from 'react';
import Select from 'react-select';
import Geocode from 'react-geocode';
import { FaSearchLocation } from 'react-icons/fa'
import { MdOutlineLocationSearching } from 'react-icons/md'
import clsx from 'clsx';
import PlacesAutocomplete, {
	geocodeByAddress,
	geocodeByPlaceId,
	getLatLng,
} from 'react-places-autocomplete';
import './selectCity.scss'
const SelectCity = () => {
	const [address, setAdress] = useState('');
	const [coord, setCoord] = useState('');

	const handleSelect = async (value) => {
		const result = geocodeByAddress(value);
		setAdress(value)
	}
	return (
		<PlacesAutocomplete
			value={address}
			onChange={setAdress}
			onSelect={handleSelect}
			debounce={500}
		>
			{
				({ getInputProps, suggestions, getSuggestionItemProps, loading }) => (

					<div className='sc'>
						<div className='sc__field'>
							<FaSearchLocation className='sc__iconSearch' />
							<MdOutlineLocationSearching className='sc__iconTarget' />
							<input
								{...getInputProps({
									placeholder: 'Начните вводить название города',
									className: 'newStory__input ',

								})}
							/>
						</div>
						{/* {console.log(suggestions)} */}
						<div className={clsx({ sg: suggestions.length !== 0 })}>
							{loading && <div>Loading...</div>}
							{suggestions.map((suggestion, i) => {

								const className = suggestion.active
									? 'sg__item sg__item--active'
									: 'sg__item';
								// inline style for demonstration purpose

								return (
									<div
										key={i}
										{...getSuggestionItemProps(suggestion, {
											className,
											// style,
										})}
									>
										<span>{suggestion.description}</span>
									</div>
								);
							})}
						</div>
					</div>
				)
			}
		</PlacesAutocomplete >
	)
}



export default SelectCity;