import React from 'react';
import myJson from './example.json';

let sidebarItems = Object.keys(myJson);

let sideBarItemsValue = Object.values(myJson);

function nameFunction(name, body) {
    return {[name](...args) {return body(...args)}}[name]
}


 sidebarItems.map((item, index)=>{
    sidebarItems[index] = nameFunction(sidebarItems[index], () => sideBarItemsValue[index].map(item=>
        <div>
        <div className='spaced-para'>
        <h1 >{item.Title}</h1>
        {item.isLiveLink==="true"? <a target="_blank" href={item.link}>{item.Description}</a>: <a target="_blank">{item.Description}</a>}
        </div>
        </div>))
 })

export default sidebarItems;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         