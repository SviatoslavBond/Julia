import React from 'react'
import AddStory from 'components/AddStory/CreateStory';
import { Link, Routes, Route, Outlet, NavLink } from 'react-router-dom';
import Devider from 'components/UI/Devider/Devider';
import EditPreviewer from 'components/EditPreviewer/EditPreviewer';
import { AiOutlinePlusCircle } from 'react-icons/ai';

import './admin.scss'
const Admin = () => {
	const activeLink = ({ isActive }) => (isActive ? { color: "orange" } : { color: "white" });
	return (
		<div className='admin'>
			<div className='container'>
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
										<NavLink style={activeLink} to='content'>Coment</NavLink>
									</li>
									<li className='admin__menu-item'>
										<NavLink style={activeLink} to='drag'>Dnd</NavLink>
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
								<Route path='wedding' element={<p>Wedding</p>} />
								<Route path='lovestory' element={<p>Love Story</p>} />
								<Route path='content' element={<p>Content</p>} />
								<Route path='drag' element={<EditPreviewer />} />
							</Routes>
						</div>

					</div>
				</div>
			</div>





		</div>
	)
}

export default Admin;