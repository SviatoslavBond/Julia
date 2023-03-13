import React from 'react'
import './formCalc.scss'
const FormCalc = () => {

	return (
		<div className='description'>
			<h3 className='description_price '>700$</h3>
			<p className='description_text'> В стоимость входит:</p>
			<ul className='description_list'>
				<li className='description_text description_item '>
					7 часов фотосессии
				</li>
				<li className='description_text description_item '>
					от 400-800 готовых фото с авторской   обработкой

				</li>
				<li className='description_text description_item'>
					сайт с свадебной историей
				</li>
				<li className='description_text description_item'>
					обработка фото  2 месяца
				</li>
				<li className='description_text description_item'>
					сопровождения
				</li>
				<li className='description_text description_item'>
					15 фото в  течении   3х дней  после  свадьбы
				</li>
				<li className='description_text  description_item'>
					транспортные  расходы
				</li>
			</ul>
			<form className='form' action="#">

				<div className='field'>
					<p className='form_text field_text'>Имя и Фамилия</p>
					<input type="text" name='name' />
				</div>
				<div className='field '>
					<p className='form_text field_text'>Email</p>
					<input type="text" name='email' />
				</div>
				<div className='field '>
					<p className='form_text field_text'>Телефон</p>
					<input type="tel" name='phone' />
				</div>
				<div className='field'>
					<p className='form_text field_text'>Короткая  заметка о вашей свадьбе*</p>
					<textarea className='field_textarea'>

					</textarea>
					<p className='form_text field_text'>
						*Укажите пожалуйста если уже назначили -
						дату свадьбы и город проведения торжества</p>
				</div>
				<div className='form_button'>
					<button type='submit'>Отправить</button>
				</div>

			</form>
		</div>
	)
}

export default FormCalc