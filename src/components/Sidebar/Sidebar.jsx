/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen, AiOutlineMail, AiOutlineClose,AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineMenu  } from 'react-icons/ai';
import { FiBriefcase } from 'react-icons/fi';
import { useState } from 'react';

 const Sidebar = ({isActive}) => {
    const [activeLink, setActiveLink] = useState('/');
  return (
    <>
        <div className="fixed flex flex-col justify-around top-0 left-0 h-screen w-[-50px] m-0 bg-gray-900 text-white shadow-lg">
            <p className=' px-2 text-blue-400 text-2xl font-mono font-bold'>Confidence.</p>
            <div>
            <NavLink 
          to={'/'} 
          onClick={() => setActiveLink('/')}
          className="flex flex-col items-center justify-center mt-2"
        >
          <div className={`flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 ease-linear cursor-pointer ${activeLink === '/' ? 'bg-blue-500' : 'bg-gray-800 hover:bg-blue-600'}`}>
            <AiOutlineHome size="30" className="text-white" />
          </div>
          <span className='mt-1 text-gray-300 font-mono'>Home</span>
        </NavLink>
                <NavLink 
                to={'/about'}
              onClick={() => setActiveLink('/about')}
          className="flex flex-col items-center justify-center mt-2">
            <div className={`flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 ease-linear cursor-pointer ${activeLink === '/about' ? 'bg-blue-500' : ' hover:bg-blue-600'}`}>
                    <AiOutlineUser size="30" className="text-white" />
                    </div>
                    <span className='mt-1 text-gray-300 font-mono'>About</span>
                </NavLink>
                <NavLink 
                to={'/work'}
                className={({ isActive}) => `${isActive ? 'bg-blue-500' : 'bg-gray-800'}`}>
                    <SideBarIcon icon={<FiBriefcase size={30}/>} name= 'Work' isActive={isActive}/>
                </NavLink>
                <NavLink 
                to={'/portfolio'}
                className={({ isActive}) => `${isActive ? 'bg-blue-500' : 'bg-gray-800'}`}>
                    <SideBarIcon icon={<AiOutlineFolderOpen size={30}/>} name= 'Portfolio' isActive={isActive}/>
                </NavLink>
                <NavLink 
                to={'/contact'}
                className={({ isActive}) => `${isActive ? 'bg-blue-500' : 'bg-gray-800'}`}>
                    <SideBarIcon icon={<AiOutlineMail size={30}/>} name= 'Contact' isActive={isActive}/>
                </NavLink>
            </div>
            <div>
            <SideBarLink icon={<AiFillLinkedin size={15}/>} name= 'Contact'/>
            <SideBarLink icon={<AiFillGithub size={15}/>} name= 'Contact'/>
            <SideBarLink icon={<AiFillInstagram size={15}/>} name= 'Contact'/>
            </div>
        </div>
    </>

  )
  
}

const SideBarIcon = ({ icon, name }) => (
    <div className=''>
        <div className='sidebar-icon'>{icon}</div>
        <span className='sidebar-names'>{name}</span>
    </div>
)

const SideBarLink = ({icon}) => (
    <div>
        <div className='sidebar-links'>{icon}</div>
    </div>
)
export default Sidebar


