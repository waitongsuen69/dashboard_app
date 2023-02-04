import React from 'react'
import {Link , NavLink } from 'react-router-dom'
import { RiMotorbikeFill } from 'react-icons/ri'
import { MdOutlineCancel } from 'react-icons/md';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import { links } from '../data/dummy'

const Sidebar = () => {
  const CallMenu = true;

  const ActiveMenu = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md m-2';
  const NormalMenu = 'flex items-center gap-5 pl-4 pt-3 pb-2.5 rounded-lg text-white text-md text-gray-700 dark:text-gray-200 dark:hover:text-black hover:bg-light-gray m-2';

  return (
    <div className='ml-10 h-screen
    md:overflow-hidden overflow-auto 
    md:hover: overflow-auto pb-10'>

      {CallMenu && (<>
        <div className='flex justify-between items-center'>
          
          <Link to="/" 
          onClick = {() =>{}} 
          className= "items-center gap-3 ml-3 mt-5 flex text-xxl font-extrabold tracking-tight dark:text-white text-slate-900">
            <RiMotorbikeFill /> <span> si_shop</span>
          </Link>

          <TooltipComponent content="Close Menu" position="BottomCenter" >
            <button type="button"  className = "text-xl rounded-full p-3 hover:bg-light-gray mt-4 block md:hidden">

            {/* onClick = {() => ()} */}
              <MdOutlineCancel />
            </button>
          </TooltipComponent> 
        </div>

        <div className="mt-10">
          {links.map((item)=> (
            <div key = {item.title}>
            <p  className="text-gray-400 m-3 mt-4 uppercase">
              {item.title}
            </p>
            {item.links.map((link) => (
              <NavLink 
                to={`/${link.name}`}
                key = {link.name}
                onClick={({ isActive }) => isActive ? ActiveMenu:NormalMenu}
              >
                {link.icon}
                
                <span className="capitalize ">
                  {link.name}
                </span>
              </NavLink>
            ))}
              
            </div>
          ))}
        </div>
      </>)
      }
       

    </div>
  )
}

export default Sidebar