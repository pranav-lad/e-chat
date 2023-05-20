// import logo from './logo.svg';
import './App.css';
import React from 'react';
// import './Components/Sidebar.js';
// import './Components/SidebarData.js';
import Sidebar from './Components/Sidebar.js';
// import SidebarData from './Components/SidebarData.js';
import "./Components/Darkmode/DarkMode";
// import { DarkMode } from './Components/Darkmode/DarkMode.js';



function App() {
  //  const [data, setData] = useState(false);
   return (
     <div className='App'>
       
       <Sidebar />
       {/* <DarkMode /> */}
       
     {/* <SidebarData /> */}
    </div>
   );
 }

export default App;
