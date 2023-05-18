// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import './Components/Sidebar.js';
// import './Components/SidebarData.js';
import Sidebar from './Components/Sidebar.js';
// import SidebarData from './Components/SidebarData.js';
// import { useEffect, useState } from 'react';

function App() {
  //  const [data, setData] = useState(false);
  // I will add navbar and main code soon....
   return (
     <div className='App'>
       
       <Sidebar />
       
     {/* <SidebarData /> */}
    </div>
   );
 }

export default App;
