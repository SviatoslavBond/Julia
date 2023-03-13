import React from 'react'
import SliderRange from './SliderRange/SliderRange';
import './Calculator.scss';

const Calculator = () => {


	const changeNumberOfHours = (e) => {
		console.log(e.target.value);
	}

	return (
		<div className='calculator'>
			<div>
				<h4 className='calculator_text'>Выбирите длительность свадебной фотосессии</h4>
				<SliderRange onChange={changeNumberOfHours} max={14} min={5} step={1} />
				<p className='calculator_text'> Дополнительно:</p>
				<input type="checkbox" name="" id="" />

			</div>
			<div>

			</div>
		</div>
	)
}

export default Calculator