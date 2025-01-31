import './Layout.scss';
import { Outlet } from "react-router-dom";
import Sidebar from "../Sidebar/Sidebar";

export const Layout = () => {
  return (
    <div className='App'>
      <div className="sideba">
        <Sidebar />
      </div>
      <div className='page w-full'>
        <Outlet />
      </div>
    </div>
  );
};


