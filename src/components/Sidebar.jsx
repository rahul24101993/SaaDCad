import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import myJson from '../pages/example.json';

const sidebarItems = Object.keys(myJson);
let p ="/"
const Sidebar = ({children}) => {
    return (
        <div className="container">
           <div style={{width: "200px"}} className="sidebar">
               {
                sidebarItems.map((item, index)=>(
                       <NavLink to={p.concat(item)} key={index} className="link" activeclassName="active">
                           <div  style={{display:"block"}} className="link_text">{item}</div>
                       </NavLink>
                   ))
               }
           </div>
           <main className='trial'>{children}</main>
        </div>
    );
};

export default Sidebar;