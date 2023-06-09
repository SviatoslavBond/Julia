import React from 'react'
import styles from './About.module.scss';
import myFoto from 'assets/about/myFoto.webp';

const About = () => {

	return (
		<div className={styles.about}>
			<div className="container">
				<div className={styles.about_inner}>
					<div className={styles.about_foto}
						data-aos="fade-up"
					>
						<img src={myFoto} alt="Julia Kulyok" />
					</div>
					<div
						data-aos="fade-up"
						className={styles.about_descr} >
						<h4>Привет, я Юля</h4>
						<p className={styles.about_textYellow}>ФОТОГРАФИЯ ДЛЯ
							МЕНЯ - ЭТО  ЖИЗНЬ</p>
						<p >Я впервые взяла фотоаппарат в руки в 11 лет.  В 17 поняла что людям нравятся мои фото и решила стать фотографом. В 18 лет а именно в 11 классе сняла первую свадьбу И вот уже 7 лет фотографирую любовь.</p>
						<p className={styles.about_textYellow} >МОИ ФОТОГРАФИИ ПРО: ЛЮБОВЬ  ЭМОЦИИ ЭСТЕТИКУ ЖИЗНЬ
							ИСКРЕННОСТЬ</p>
						<p>Для меня в жизни главное: любовь семья творчество моменты Все это про свадебную фотосъемку. Я кайфую от своей работы для меня важно сохранять трогательную историю семьи в фотоснимках.</p>
						<p>Я стремлюсь что бы фотографии отражали вас и атмосферу вашего торжества поэтому к каждой паре подхожу индивидуально. Я не фотографирую по шаблону очередную свадьбу для меня важно чувствовать своих героев. Моя супер сила - это передавать людей на фото настоящими.
							Я вижу красоту каждого и умею ее подчеркнуть.</p>
						<p>Здесь вы можете ознакомиться с моими работами, а в Instagram узнать ближе меня</p>
					</div>
				</div>


			</div>


		</div>
	)
}

export default About