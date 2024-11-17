/* eslint-disable react/prop-types */
import { NavLink } from 'react-router-dom';
import './Sidebar.css';
import { AiOutlineHome, AiOutlineUser , AiOutlineFolderOpen, AiOutlineMail, AiFillLinkedin, AiFillGithub, AiFillInstagram, AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { FiBriefcase } from 'react-icons/fi';
import { useState } from 'react';

const Sidebar = () => {
    const [activeLink, setActiveLink] = useState('/');
    const [isOpen, setIsOpen] = useState(false); 

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
         
         {!isOpen ? (
    <button onClick={toggleSidebar} className="fixed top-4 left-4 z-50 text-white md:hidden">
        <AiOutlineMenu size={30} />
    </button>
) : (
    <button onClick={toggleSidebar} className="fixed top-4 left-4 z-50 text-white md:hidden">
        <AiOutlineClose size={30} />
    </button>
)}

          
            <div className={`fixed top-0 left-0 h-full bg-gray-900 text-white shadow-lg transition-transform duration-500 ease-in-out ${isOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0 md:relative md:w-auto`} 
                 style={{ background: isOpen ? '#181818' : '', width: isOpen ? '100%' : 'auto', zIndex: isOpen ? 2 : 0, overflowY: 'scroll'}}>

    <p className={`text-blue-400 text-2xl font-mono font-bold ${isOpen ? 'text-center p-4' : 'p-4'}`}>Confidence.</p>
 

                <div>
                    <NavLink to={'/'} onClick={() => { setActiveLink('/'); toggleSidebar(); }} className="flex flex-col items-center justify-center mt-2">
                        <div className={`flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 ease-linear cursor-pointer ${activeLink === '/' ? 'bg-blue-500' : 'bg-gray-800 hover:bg-blue-600'}`}>
                            <AiOutlineHome size="30" className="text-white" />
                        </div>
                        {activeLink === '/' && <div className='indicator'></div>}
                        <span className='mt-1 text-gray-300 font-mono'>Home</span>
                    </NavLink>
                    <NavLink to={'/about'} onClick={() => { setActiveLink('/about'); toggleSidebar(); }} className="flex flex-col items-center justify-center mt-2">
                        <div className={`flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 ease-linear cursor-pointer ${activeLink === '/about' ? 'bg-blue-500' : 'bg-gray-800 hover:bg-blue-600'}`}>
                            <AiOutlineUser  size="30" className="text-white" />
                        </div>
                        {activeLink === '/about' && <div className='indicator'></div>}
                        <span className='mt-1 text-gray-300 font-mono'>About</span>
                    </NavLink>
                    <NavLink to={'/work'} onClick={() => { setActiveLink('/work'); toggleSidebar(); }} className="flex flex-col items-center justify-center mt-2">
                        <div className={`flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 ease-linear cursor-pointer ${activeLink === '/work' ? 'bg-blue-500' : 'bg-gray-800 hover:bg-blue-600'}`}>
                            <FiBriefcase size="30" className="text-white" />
                        </div>
                        {activeLink === '/work' && <div className='indicator'></div>}
                        <span className='mt-1 text-gray-300 font-mono'>Work</span>
                    </NavLink>
                    <NavLink to={'/portfolio'} onClick={() => { setActiveLink('/portfolio'); toggleSidebar(); }} className="flex flex-col items-center justify-center mt-2">
                        <div className={`flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 ease-linear cursor-pointer ${activeLink === '/portfolio' ? 'bg-blue-500' : 'bg-gray-800 hover:bg -blue-600'}`}>
                            <AiOutlineFolderOpen size="30" className="text-white" />
                        </div>
                        {activeLink === '/portfolio' && <div className='indicator'></div>}
                        <span className='mt-1 text-gray-300 font-mono'>Portfolio</span>
                    </NavLink>
                    <NavLink to={'/contact'} onClick={() => { setActiveLink('/contact'); toggleSidebar(); }} className="flex flex-col items-center justify-center mt-2">
                        <div className={`flex items-center justify-center h-12 w-12 rounded-full transition-all duration-300 ease-linear cursor-pointer ${activeLink === '/contact' ? 'bg-blue-500' : 'bg-gray-800 hover:bg-blue-600'}`}>
                            <AiOutlineMail size="30" className="text-white" />
                        </div>
                        {activeLink === '/contact' && <div className='indicator'></div>}
                        <span className='mt-1 text-gray-300 font-mono'>Contact</span>
                    </NavLink>
                </div>
                <div className="flex justify-center mt-4">
                <a href="http://linkedin.com/in/confidence-chukwudi-0236322a5" target="_blank" rel="noopener noreferrer">
                    <SideBarLink icon={<AiFillLinkedin size={15}/>} />
                </a>
                <a href="https://github.com/JUSTTNZ" target="_blank" rel="noopener noreferrer">
                    <SideBarLink icon={<AiFillGithub size={15}/>} />
                </a>
                <a href="https://www.instagram.com/justt_nz/" target="_blank" rel="noopener noreferrer">
                    <SideBarLink icon={<AiFillInstagram size={15}/>} />
                </a>
                </div>
            </div>
        </>
    );
};

const SideBarLink = ({ icon }) => (
    <div className="sidebar-links mx-2">
        {icon}
    </div>
);

export default Sidebar;