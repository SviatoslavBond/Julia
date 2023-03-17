import React from 'react'
import SliderRange from './SliderRange/SliderRange';
import FormCalc from './Form/FormCalc';
import { countries } from './countries';
import './Calculator.scss';



const Calculator = () => {


	const changeNumberOfHours = (e) => {

	}

	return (
		<div>
			<h4 className='calc_title'> УЗНАЙ СТОИМОСТЬ ФОТОСЪЕМКИ</h4>
			<div className='calculator'>
				<div className='container'>
					<div className='calculator_wrap'>
						<div className='calculator_inner' >
							<div className='countries' >
								<p className='calculator_text countries_text'>Укажите страну проведения свадьбы </p>
								<select className='countries__select' name="countries" >
									{
										countries.map(({ price, country }) => {
											return <option key={country} value={price}>{country}</option>
										})
									}
								</select>
							</div>
							<div>
								<p className='calculator_text'>Выбирите длительность свадебной фотосессии</p>
								<div className='range-big range'>
									<SliderRange onChange={changeNumberOfHours} label={'h'} max={14} min={5} step={1} />
								</div>
							</div>

							<div className='options'>
								<p className='calculator_text'> Дополнительно:</p>
								<div className='fast-processing'>
									<label>
										<input type="checkbox" />
										<p className='calculator_text'>
											Быстрая обработка в течении месяца +25 %  от полной   стоимости фотоссессии
										</p>

									</label>
								</div>
								<div className='ultra-process'>
									<label>
										<input type="checkbox" />
										<p className='calculator_text'>
											Супер быстрая обработка в течении 2 недель + 50%  от стоимости фотоссессии
										</p>

									</label>
								</div>
								<div className='love-story'>
									<label>
										<input type="checkbox" />
										<p className='calculator_text'>
											Love story
										</p>

									</label>
									<div className='range-small range'>
										<SliderRange label={'h'} max={2} min={1} step={1} />
									</div>
								</div>
								<div className='super-retouch'>
									<label>
										<input type="checkbox" />
										<p className='calculator_text'>
											Журнальная ретушь
										</p>

									</label>
									<div className='range-big range'>
										<SliderRange label={'f'} max={50} min={1} step={1} />
									</div>
								</div>
							</div>

							<div className="calculator_addText">
								<p className='calculator_text'>*Если в пункте дополнительно нет того что вам нужно, вы можете обсудить этот вопрос со мной лично</p>
								<p className='calculator_text'>*При выборе страны цена меняется в зависимости от расходов на дорогу и т.д</p>
							</div>
						</div>
						<FormCalc />
					</div>

				</div>

			</div>
		</div>

	)
}

export default Calculator