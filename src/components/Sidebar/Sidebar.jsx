/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen, AiOutlineMail, AiOutlineClose,AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineMenu  } from 'react-icons/ai';
import { FiBriefcase } from 'react-icons/fi';
// import { useState } from "react";
 const Sidebar = ({isActive}) => {
    // const [showNav, setShowNav] = useState(false)
  return (
    <>
        <div className="fixed flex flex-col justify-around top-0 left-0 h-screen w-[-50px] m-0 bg-gray-900 text-white shadow-lg">
            <p className=' px-2 text-blue-400 text-2xl font-mono font-bold'>Confidence.</p>
            <div>
                <NavLink 
                to={'/'} 
                className={({ isActive}) => `${isActive ? 'bg-blue-200' : 'text-blue-500'}`}>
                <SideBarIcon icon={<AiOutlineHome size="30"/>} name= 'Home' />
                </NavLink>
                <NavLink 
                to={'/about'}
                className={({ isActive}) => `${isActive ? 'bg-blue-200' : 'bg-gray-800'}`}>
                    <SideBarIcon icon={<AiOutlineUser size={30}/>} name= 'About' />
                </NavLink>
                <NavLink 
                to={'/work'}
                className={({ isActive}) => `${isActive ? 'bg-blue-200' : 'bg-gray-800'}`}>
                    <SideBarIcon icon={<FiBriefcase size={30}/>} name= 'Work' />
                </NavLink>
                <NavLink 
                to={'/portfolio'}
                className={({ isActive}) => `${isActive ? 'bg-blue-200' : 'bg-gray-800'}`}>
                    <SideBarIcon icon={<AiOutlineFolderOpen size={30}/>} name= 'Portfolio' />
                </NavLink>
                <NavLink 
                to={'/contact'}
                className={({ isActive}) => `${isActive ? 'bg-blue-200' : 'bg-gray-800'}`}>
                    <SideBarIcon icon={<AiOutlineMail size={30}/>} name= 'Contact' />
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

const SideBarIcon = ({ icon, name}) => (
    <div className=''>
        <div className={`sidebar-icon`}>{icon}</div>
        <span className='sidebar-names'>{name}</span>
    </div>
)

const SideBarLink = ({icon}) => (
    <div>
        <div className='sidebar-links'>{icon}</div>
    </div>
)
export default Sidebar


