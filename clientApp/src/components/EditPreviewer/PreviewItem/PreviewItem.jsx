import React from 'react'
import { MdDelete, } from "react-icons/md";
import IconCover from '../../UI/IconCover/IconCover';
import './previewItem.scss'
const PreviewItem = ({ foto, setCoverImage, deleteImage }) => {
	const { path, URI, id } = foto
	return (
		<div className='up-item'>
			<div className='up-block'>
				{
					foto.cover ? null : <div className="cover-button up-btn">
						<IconCover onClick={() => setCoverImage(id)}
							className='up-icons up-icons-cover'
						/>
						<span>Обложка</span>
					</div>
				}
				<div className="delete-button up-btn">
					<MdDelete onClick={() => deleteImage(URI, id)} className='up-icons  up-icons-delete' />
				</div>
			</div>
			<div className='opacity'></div>
			<div className='up-photo'>
				<img src={path} alt="" />
			</div>
		</div>
	)
}

export default PreviewItem