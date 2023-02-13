import React,{ useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FiSettings } from 'react-icons/fi';
import { TooltipComponent } from '@syncfusion/ej2-react-popups';
import './App.css'

import { Navbar, Footer, Sidebar, ThemeSetting } from './components';
import { Calendar, ColorPicker, Customers, Ecommerce, Editor, Employees, Kanban, Orders, Financial, Line, Pie, Stacked ,Area} from './pages';
import { useStateContext } from './contexts/contextProvider';
 
const App = () => {
  const {currentColor, activeMenu , themeSettings, setThemeSettings ,currentMode} = useStateContext();
  // const activeMenu = true;
  return (

    <div className={currentMode === 'Dark' ? 'dark':''}> 
      <BrowserRouter>
        <div className="flex relative dark:bg-main-dark-bg">
          <div className = "fixed right-4 bottom-4" style = {{ zIndex:'1000'}}>
            <TooltipComponent 
              content = "Settings" 
              position = "Top"
            >
              <button 
                type = "button" 
                onClick={()=> setThemeSettings(true)}
                className = "text-3xl p-3 hover:drop-shadow-xl text-white hover:bg-light-gray" 
                style={{ backgroundColor:currentColor, borderRadius:'50%' }}
              >
                <FiSettings />
              </button>
            </TooltipComponent>
          </div>

          {activeMenu ? (
            <div className = "w-72 fixed sidebar dark:bg-secondary-dark-bg bg-white ">
              <Sidebar />
            </div>
          ) : (
            <div className = "w-0 dark:dg-secondary-dark-bg">
              <Sidebar />
            </div>
          )}

          {/* <div className = {
            `dark:bg-main-bg min-h-screen w-full $(activeMenu ? 'md:ml-72'
            : 'flex-2')`
          }>  */}
          <div
            className={
              activeMenu
                ? 'bg-main-bg dark:bg-main-dark-bg min-h-screen w-full md:ml-72'
                : 'bg-main-bg dark:bg-main-dark-bg min-h-screen w-full flex-2'
            }
          >
            <div className = "fixed md:static bg-main-bg dark:bg-main-bg-black navbar w-full">
              <Navbar />
            </div>
          
            <div>
              {themeSettings && (<ThemeSetting />)}
              <Routes>
                {/* dashboard */}
                <Route path="/" element={<Ecommerce />} />
                <Route path="/ecommerce" element={<Ecommerce />} />

                {/* page */}
                <Route path="/orders" element={<Orders />} />
                <Route path="/employees" element={<Employees />} />
                <Route path="/customers" element={<Customers />} />

                {/*app*/}
                <Route path="/kanban" element={<Kanban />} />
                <Route path="/editor" element={<Editor />} />
                <Route path="/calendar" element={<Calendar />} />
                <Route path="/color-picker" element={<ColorPicker />} />

                {/* graphs */}
                <Route path="/line" element={<Line />} />
                <Route path="/pie" element={<Pie />} />
                <Route path="/stacked" element={<Stacked />} />
                <Route path="/financial" element={<Financial />} />
                <Route path="/area" element={<Area />} />
                
              </Routes>
            </div>

          </div> 
        </div>
      </BrowserRouter> 
    </div>
  );
};

export default App 