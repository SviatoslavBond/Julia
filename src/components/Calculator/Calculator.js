import React, { useState } from 'react';

import SliderRange from '../UI/SliderRange/SliderRange';
import FormCalc from './Form/FormCalc';
import { countries } from './countries';
import './Calculator.scss';



const Calculator = ({ observe }) => {
	const [price, setPrice] = useState()
	const [checkedLS, setCheckededLS] = useState(false);
	const [checkedRetouch, setCheckededRetouch] = useState(false);
	const [countryValue, setCountryValue] = useState(120);
	const [numberOfHours, setNumbersOfHours] = useState(5);
	const [fastProcessing, setFastProcessing] = useState(false);
	const [ultraProcessing, setUltraProcessing] = useState(false);
	const [LSHours, setLSHours] = useState(0);
	const [superRetouch, setSuperRetouch] = useState(0);




	return (
		<div id='price' ref={observe}>
			<h4 className='calc__title'> УЗНАЙ СТОИМОСТЬ ФОТОСЪЕМКИ</h4>
			<div className='calculator'>
				<div className='container'>
					<div className='calculator__wrap'>
						<div className='calculator_inner' >
							<div className='countries' >
								<p className='calculator__text countries__text'>Укажите страну проведения свадьбы </p>
								<select onChange={(e) => setCountryValue(e.target.value)} className='countries__select' name="countries" >
									{
										countries.map(({ price, country }) => {
											return <option key={country} value={price}>{country}</option>
										})
									}
								</select>
							</div>
							<div>
								<p className='calculator__text'>Выбирите длительность свадебной фотосессии</p>
								<div className='range-big range'>
									<SliderRange onChange={(e) => setNumbersOfHours(e.target.value)} label={'h'} max={14} min={5} step={1} />
								</div>
							</div>

							<div className='options'>
								<p className='calculator__text '> Дополнительно:</p>
								<div className='options__item fast-processing'>
									<label >
										<input onChange={(e) => setFastProcessing(!fastProcessing)} type="checkbox" />
										<span className='fake-checkbox'></span>
										<span className='calculator__text'>
											Быстрая обработка в течении месяца +25 %  от полной   стоимости фотоссессии
										</span>
									</label>
								</div>
								<div className='ultra-process'>
									<label>
										<input onChange={(e) => setUltraProcessing(!ultraProcessing)} type="checkbox" />
										<span className='fake-checkbox'></span>
										<p className='calculator__text'>
											Супер быстрая обработка в течении 2 недель + 50%  от стоимости фотоссессии
										</p>
									</label>
								</div>
								<div className='love-story'>
									<label  >
										<input onClick={(e) => {
											setCheckededLS(!checkedLS)
										}} type="checkbox" />
										<span className='fake-checkbox'></span>
										<p className='calculator__text'>
											Love story
										</p>
									</label>
									<div className='range-small range'>
										<SliderRange onChange={(e) => setLSHours(e.target.value)} disabled={checkedLS} label={'h'} max={2} min={1} step={1} />
									</div>
								</div>
								<div className='super-retouch'>
									<label>
										<input onClick={() => setCheckededRetouch(!checkedRetouch)} type="checkbox" />
										<span className='fake-checkbox'></span>
										<p className='calculator__text'>
											Журнальная ретушь
										</p>
									</label>
									<div className='range-big range'>
										<SliderRange onChange={(e) => setSuperRetouch(e.target.value)} disabled={checkedRetouch} label={'f'} max={50} min={1} step={1} />
									</div>
								</div>
							</div>

							<div className="calculator__addText">
								<p className='calculator__text'>*Если в пункте дополнительно нет того что вам нужно, вы можете обсудить этот вопрос со мной лично</p>
								<p className='calculator__text'>*При выборе страны цена меняется в зависимости от расходов на дорогу и т.д</p>
							</div>
						</div>
						<FormCalc />
					</div>

				</div>

			</div>
		</div>

	)
}

export default Calculator;
