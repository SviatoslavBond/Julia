import React from 'react';
import { Link } from 'react-router-dom';
import './story.scss'

const Stories = ({ stories, title, linkTo }) => {

	return (
		<div className='story'>
			<div className="container">
				<div className="story__wrap">
					<Link to={`/${linkTo}`} className="story__title">{title}</Link>
					<div className="story__inner">
						{
							stories.map(story => {
								const { paths, category, name, lacation, id } = story;
								return (
									<div key={id} className='story__item'>
										<Link to={`/story/${id}/${category}`} href='#'>
											<img src={paths[0]} alt={`${category} of ${name} in ${lacation}`} />
										</Link>
									</div>)
							})
						}
					</div>
					<Link className='story__more' to={`${linkTo}`}>More stories</Link>
				</div>

			</div>
		</div>
	)
}

export default Stories