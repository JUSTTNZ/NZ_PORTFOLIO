/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import './Sidebar.css'
import { AiOutlineHome, AiOutlineUser, AiOutlineFolderOpen, AiOutlineMail, AiOutlineClose,AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineMenu  } from 'react-icons/ai';
import { FiBriefcase } from 'react-icons/fi';
import { useState } from 'react';

 const Sidebar = () => {
    const [activeLink, setActiveLink] = useState('/');
  return (
    <>
        <div className="fixed flex flex-col justify-around top-0 left-0 h-screen w-[-50px] m-0 bg-gray-900 text-white shadow-lg">
            <p className=' px-2 text-blue-400 text-2xl font-mono font-bold'>Confidence.</p>
            <div>
            <NavLink 
            to={'/'} 
            onClick={() => setActiveLink('/')}
            className="flex flex-col items-center justify-center mt-2">
                <div className={`flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 ease-linear cursor-pointer ${activeLink === '/' ? 'bg-blue-500' : 'bg-gray-800 hover:bg-blue-600'}`}>
                    <AiOutlineHome size="30" className="text-white" />
                </div>
                {activeLink === '/' && <div className='indicator'></div>}
                <span className='mt-1 text-gray-300 font-mono'>Home</span>
            </NavLink>
            <NavLink 
            to={'/about'}
            onClick={() => setActiveLink('/about')}
            className="flex flex-col items-center justify-center mt-2">
                <div className={`flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 ease-linear cursor-pointer ${activeLink === '/about' ? 'bg-blue-500' : 'bg-gray-800 hover:bg-blue-600'}`}>
                    <AiOutlineUser size="30" className="text-white" />
                </div>
                {activeLink === '/about' && <div className='indicator'></div>}
                    <span className='mt-1 text-gray-300 font-mono'>About</span>
            </NavLink>
            <NavLink 
            to={'/work'}
            onClick={() => setActiveLink('/work')}
            className="flex flex-col items-center justify-center mt-2">
                <div className={`flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 ease-linear cursor-pointer ${activeLink === '/work' ? 'bg-blue-500' : 'bg-gray-800 hover:bg-blue-600'}`}>
                    <FiBriefcase size="30" className="text-white" />
                </div>
                {activeLink === '/work' && <div className='indicator'></div>}
                    <span className='mt-1 text-gray-300 font-mono'>Work</span>
            </NavLink>
            <NavLink 
            to={'/portfolio'}
            onClick={() => setActiveLink('/portfolio')}
            className="flex flex-col items-center justify-center mt-2">
                <div className={`flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 ease-linear cursor-pointer ${activeLink === '/portfolio' ? 'bg-blue-500 ' : 'bg-gray-800 hover:bg-blue-600'}`}>
                    <AiOutlineFolderOpen size="30" className="text-white" />
                </div>
                {activeLink === '/portfolio' && <div className='indicator'></div>}
                    <span className='mt-1 text-gray-300 font-mono'>Portfolio</span>
            </NavLink>
            <NavLink 
            to={'/contact'}
            onClick={() => setActiveLink('/contact')}
            className="flex flex-col items-center justify-center mt-2">
                <div className={`flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 ease-linear cursor-pointer ${activeLink === '/contact' ? 'bg-blue-500' :'bg-gray-800 hover:bg-blue-600'}`}>
                    <AiOutlineMail size="30" className="text-white" />
                </div>
                {activeLink === '/contact' && <div className='indicator'></div>}
                    <span className='mt-1 text-gray-300 font-mono'>Contact</span>
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


const SideBarLink = ({icon}) => (
    <div>
        <div className='sidebar-links'>{icon}</div>
    </div>
)
export default Sidebar


