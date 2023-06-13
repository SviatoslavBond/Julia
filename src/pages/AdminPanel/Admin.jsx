import React, { useEffect } from 'react'
import AddStory from 'components/AddStory/CreateStory';
import { Link, Routes, Route, NavLink, useNavigate } from 'react-router-dom';
import Devider from 'components/UI/Devider/Devider';
import EditPreviewer from 'components/EditPreviewer/EditPreviewer';
import { AiOutlinePlusCircle } from 'react-icons/ai';
import { fetchStories } from 'components/Story/storySlice';
import { useDispatch, useSelector } from 'react-redux';
import Error from 'components/ErrorPage/Error';
import { StoryList } from 'components/AdminStories/StoryList/StoryList';
import './admin.scss'
import { Container } from '@mui/material';
const Admin = () => {
	const activeLink = ({ isActive }) => (isActive ? { color: "orange" } : { color: "white" });
	const error = useSelector(state => state.stories.storiesLoadingStatus)
	const dispattch = useDispatch();
	const navigate = useNavigate();
	useEffect(() => {
		dispattch(fetchStories())
	}, []);

	useEffect(() => {
		if (error === 'error') {
			navigate('/admin/add-story/error')
		} else {
			navigate('/admin/add-story')
		}
	}, [error])


	return (
		<div className='admin'>
			<Container fixed	>
				<div className='admin__wrap'>

					<Link className='admin__logo' to='/' >
						<h2>Julia Kulyok</h2>
					</Link>
					<Devider width={100} bg={'#a1a2a3'} height={'1'} />
					<div className='admin__inner' >
						<div className='admin__aside'>
							<h3 className='admin__side-title'>My stories</h3>
							<div className='admin__menu' >
								<ul className='admin__menu-list' >
									<li className='admin__menu-item'>
										<NavLink style={activeLink} to='wedding'>Weddings</NavLink>
									</li>
									<li className='admin__menu-item'>
										<NavLink style={activeLink} to='lovestory'>Love story</NavLink>
									</li>
									<li className='admin__menu-item'>
										<NavLink style={activeLink} to='family'>Family</NavLink>
									</li>
									<li className='admin__menu-item'>
										<NavLink style={activeLink} to='content'>Content</NavLink>
									</li>
									<li className='admin__menu-item'>
										<NavLink style={activeLink} to='all-stories'>All stories</NavLink>
									</li>

								</ul>
								<Link to='/admin/add-story' className='admin__addStory'>
									<div className='admin__addStoryText'>Create new story</div>
									<AiOutlinePlusCircle className='admin__addStoryIcon' />
								</Link>

							</div>
						</div>

						<div className='admin__main'>
							<Routes>
								<Route path='add-story' element={<AddStory />} />
								<Route path='add-story/error' element={<Error />} />
								<Route path='wedding' element={<StoryList />} />
								<Route path='lovestory' element={<StoryList />} />
								<Route path='content' element={<StoryList />} />
								<Route path='family' element={<StoryList />} />
								<Route path='all-stories' element={<StoryList />} />
								<Route path='drag' element={<EditPreviewer />} />
							</Routes>
						</div>

					</div>
				</div>
			</Container>
		</div>
	)
}

export default Admin;