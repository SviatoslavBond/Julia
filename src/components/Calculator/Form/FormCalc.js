import axios from 'axios'
import React from 'react'
import './formCalc.scss'
const TOKEN = 'IGQVJYYnNqZAVlWME9odHhPelFncXZAsUHVHcDhBMTU3UGpLcWZAZAZAXRDS0xXMUpuRVhhRnI2eEl1VVhrU0ZAULXVQczEwZAUNsZAGNEbVVuYlZAadEh4TmpMOFdBN0NsNUN0SlAwaHA0MS1meHlrcnM0bmxfTwZDZD';

const refreshedToken = 'IGQVJXdGc2T2JwMkI1dTJaSHE1NVFnUk1udzFVcmJMNjRtc2ZASVjIxRlprSXVMYTNWOU9nT0x2bm5QamhXT1EybkJwRUNyQXVPVU1ielV0UmU5WmxwVm15blBHN1BnX0taTWE2RWZA3'
const baseEndPoint = "https://graph.instagram.com";
const fields = 'id,media_type,media_url,timestamp,thumbnail_url,permalink';

const FormCalc = () => {

	const getInsta = (e) => {
		e.preventDefault();


		axios.get(`${baseEndPoint}/me/media?fields=${fields}&access_token=${refreshedToken}`)
			.then(res => {
				const json = JSON.stringify(res.data.data);
				window.localStorage.setItem('instagramPhoto', json)
				console.log(res.data.data)
				console.log(`from api`)
			})
			.catch(er => console.log(er))


	}

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
					<button onClick={getInsta} >Отправить</button>
				</div>

			</form>
		</div>
	)
}

export default FormCalc