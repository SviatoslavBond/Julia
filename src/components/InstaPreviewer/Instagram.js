import React, { useEffect, useState } from 'react'
import ava from '../../assets/about/myFoto.webp';
import instaLogo from '../../assets/icons/instaLogo.svg';
import instaMessage from '../../assets/icons/msg.svg';
import './instagram.scss'

import { fetchInstaData } from '../../utils/fetchInstaData';

const Instagram = () => {
	const [instaData, setInstaData] = useState([]);
	const [errorInstaFetch, setErorrInstaFetch] = useState(false);


	useEffect(() => {
		const fetchData = async () => {
			try {
				const { data } = await fetchInstaData();
				if (!window.localStorage.getItem('instagramPhoto')) {
					setErorrInstaFetch(false)
					setInstaData(data.data);
					const json = JSON.stringify(data.data);
					window.localStorage.setItem('instagramPhoto', json);

				}
				else {
					const data = JSON.parse(window.localStorage.getItem('instagramPhoto'));
					setInstaData(data)
				}
			} catch (error) {
				setErorrInstaFetch(true)
			}
		}
		fetchData();

		const intercalID = setInterval(fetchData, 1000 * 60 * 60);
		return () => {
			clearInterval(intercalID)
		}
	}, [])




	return (
		<div className='insta'>
			<div className="container">
				<div className="insta__inner">
					<div className='insta__header'>
						<div className='insta__ava' >
							<img src={ava} alt="Julia Kulyok foto" />
						</div>
						<div className='insta__logo'>
							<a href="https://www.instagram.com/juliakulyok.ph/">
								<img src={instaLogo} alt="Instagram logo" />
							</a>
						</div>
						<div className='insta__msg'>
							<a href="	https://ig.me/m/juliakulyok.ph">
								<img src={instaMessage} alt="instagram message" />
							</a>

						</div>
					</div>
					<div className='photobox'>
						<div className='photobox__inner'>
							{
								instaData.map((post, index) => {
									const { media_type, media_url, caption, id, permalink } = post
									const url = media_type === "CAROUSEL_ALBUM" || media_type === 'IMAGE' ? media_url : post.thumbnail_url
									return (
										<div className='photobox__item'>
											<a href={permalink} key={id} >
												<img src={url} alt={caption} />
											</a>
										</div>
									)
								})
							}
						</div>
					</div>
				</div>
			</div>

		</div>

	)
}

export default Instagram
