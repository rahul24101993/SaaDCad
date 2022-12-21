import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import sidebarItems from './pages/LiveLink.jsx';
import myJson from './pages/example.json';


let l ="/";
const sidebarItem = Object.keys(myJson);
function test(index){
  let Comp = sidebarItems[index];
  return <Comp/>
}

const App = () => {
  return (
    <>
    <h1 className='hello' align="center">SaaS CAD</h1>
 <BrowserRouter>
      <Sidebar>
        <Routes>
       { sidebarItem.map((item, index)=>(
          <Route path={l.concat(item)} element={test(index)}/>
                   ))
       }
        </Routes>
      </Sidebar>
    </BrowserRouter>
    </>
  );
};

export default App;