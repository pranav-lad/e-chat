// // import logo from './logo.svg';
// import './App.css';
// import React from 'react';
// // import './Components/Sidebar.js';
// // import './Components/SidebarData.js';
// import Sidebar from './Components/Sidebar.js';
// // import SidebarData from './Components/SidebarData.js';
// // import "./Components/Darkmode/DarkMode";
// // import { DarkMode } from './Components/Darkmode/DarkMode.js';

// import SettingsPage from './Components/SettingsPage.js';



// function App() {
//   //  const [data, setData] = useState(false);
//    return (
//      <div className='App'>
       
//        <Sidebar />

//       <SettingsPage />
//     </div>
//     //    {/* <DarkMode /> */}
//     //  {/* <SidebarData /> */}
    

//    );
//  }

// export default App;


//Main code
// import React from 'react';
// // import './Components/Sidebar.js';
// // import './Components/SidebarData.js';
// import Sidebar from './Components/Sidebar.js';
// // import SidebarData from './Components/SidebarData.js';
// // import "./Components/Darkmode/DarkMode";
// import Navbar from './Components/Navbar.js';
// // import { DarkMode } from './Components/Darkmode/DarkMode.js';

// function App() {
//   //  const [data, setData] = useState(false);
//    return (
//      <div className='App'>
       
//        <Navbar />
//        <Sidebar />

       
//        {/* <DarkMode /> */}
       
//      {/* <SidebarData /> */}
//     </div>
//    );
//  }

// export default App;





// final code

// import React from 'react';
// import Sidebar from './Components/Sidebar';
// import Navbar from './Components/Navbar';
// import Feed from './Components/Feed';
// import "./App.css";

// function App() {
//   return (
//     <div className='App'>
//       <Navbar />
//       <div className="content">
//         <Sidebar />
//         <Feed />
//         {/* <FloatingPopup /> */}
//       </div>
//     </div>
//   );
// }

// export default App;





// final success settings

// import React, { useState } from 'react';
// import SettingsPopup from './Components/SettingsPopup';
// import Sidebar from './Components/Sidebar';
// import Navbar from './Components/Navbar';
// import Feed from './Components/Feed';
// import "./App.css";

// function App() {
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false);

//   const handleItemClick = () => {
//     setIsSettingsOpen(true);
//   };

//   const handleClose = () => {
//     setIsSettingsOpen(false);
//   };


  
//   return (
//     <div className="App">
//       <Navbar />
//       {/* <div className="content"> */}
      
//          <Sidebar />
//          <Feed />
        
//       {/* </div> */}
//       <Sidebar handleItemClick={handleItemClick} />
//       {isSettingsOpen && <SettingsPopup handleClose={handleClose} />}
//     </div>
//   );
// }

// export default App;



//bro final code

import React, { useState } from 'react';
import { Route, Routes } from "react-router-dom"
import SettingsPopup from './Components/SettingsPopup';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import './App.css';
import Maincontent from './Components/Maincontent';
import LoginSignup from './Components/LoginSignupPage';

function App() {
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handleItemClick = () => {
    setIsSettingsOpen(true);
  };

  const handleClose = () => {
    setIsSettingsOpen(false);
  };

  return (
    <div className="App">
        <Routes>
          <Route path="/" element={<LoginSignup />} />          
        </Routes> 
       <Navbar />   
       <div className='main-section'>
       <Sidebar handleItemClick={handleItemClick}/>    
        <Routes>          
          <Route path="/home" element={<Maincontent />} />
        </Routes> 
       </div>
      {isSettingsOpen && <SettingsPopup handleClose={handleClose} />}
    </div>
  );
}

export default App;




//seperate login/signup
// import React from 'react';
// import './App.css';
// import LoginSignupPage from './Components/LoginSignupPage';

// function App() {
//   return (
//     <div className="App">
//       {/* Other code */}
//       <div className="forms-container">
//         <LoginSignupPage />
//       </div>
//     </div>
//   );
// }

// export default App;













// import React, { useState } from 'react';
// import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
// import SettingsPopup from './Components/SettingsPopup';
// import Sidebar from './Components/Sidebar';
// import Navbar from './Components/Navbar';
// import Feed from './Components/Feed';
// import LoginSignupPage from './Components/LoginSignupPage';
// import './App.css';

// function App() {
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false);

//   const handleItemClick = () => {
//     setIsSettingsOpen(true);
//   };

//   const handleClose = () => {
//     setIsSettingsOpen(false);
//   };

//   return (
//     <Router>
//       <div className="App">
//         <Navbar />
//         <Sidebar handleItemClick={handleItemClick} />
//         <Feed />
//         {isSettingsOpen && <SettingsPopup handleClose={handleClose} />}
//         <Switch>
//           <Route path="/login" component={LoginSignupPage} />
//         </Switch>
//       </div>
//     </Router>
//   );
// }

// export default App;




















//react state 

// import React, { useState } from 'react';
// import SettingsPopup from './Components/SettingsPopup';
// import Sidebar from './Components/Sidebar';
// import Navbar from './Components/Navbar';
// import Feed from './Components/Feed';
// import './App.css';
// import { ThemeProvider } from './ThemeContext'; // Update the import statement

// function App() {
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false);

//   const handleItemClick = () => {
//     setIsSettingsOpen(true);
//   };

//   const handleClose = () => {
//     setIsSettingsOpen(false);
//   };

//   return (
//     <ThemeProvider> {/* Wrap the components with the ThemeProvider */}
//       <div className="App">
//         <Navbar />
//         <Sidebar handleItemClick={handleItemClick} />
//         <Feed />
//         {isSettingsOpen && <SettingsPopup handleClose={handleClose} />}
//       </div>
//     </ThemeProvider>
//   );
// }

// export default App;


































// blured background not working
// import React, { useState } from 'react';
// import Sidebar from './Components/Sidebar';
// import Navbar from './Components/Navbar';
// import Feed from './Components/Feed';
// import SettingsPopup from './Components/SettingsPopup';
// import './App.css';

// function App() {
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false);

//   const handleSettingsClick = () => {
//     setIsSettingsOpen(true);
//   };

//   const handleItemClick = (itemName) => {
//     // Handle the click event for each item in the sidebar
//     console.log('Clicked item:', itemName);
//   };

//   const handleCloseSettings = () => {
//     setIsSettingsOpen(false);
//   };

//   return (
//     <div className="App">
//       <Navbar />
//       <div className="content">
//         <Sidebar handleSettingsClick={handleSettingsClick} handleItemClick={handleItemClick} />
//         <Feed />
//       </div>
//       {isSettingsOpen && (
//         <>
//           <div className="blurred-background"></div>
//           <SettingsPopup handleCloseSettings={handleCloseSettings} />
//         </>
//       )}
//     </div>
//   );
// }

// export default App;






// settings popup code
// import React, { useState } from 'react';
// import Sidebar from './Components/Sidebar';
// import Navbar from './Components/Navbar';
// import Feed from './Components/Feed';
// import FloatingPopup from './Components/FloatingPopup';
// import SettingsPage from './Components/SettingsPage'; 
// import "./App.css";

// function App() {
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false); // Add state variable for settings popup

//   const toggleSettingsPopup = () => {
//     setIsSettingsOpen(!isSettingsOpen);
//   };

//   return (
//     <div className='App'>
//       <Navbar />
//       <div className="content">
//         <Sidebar toggleSettingsPopup={toggleSettingsPopup} /> {/* Pass toggleSettingsPopup as prop */}
//         <Feed />
//       </div>
//       {isSettingsOpen && (
//         <FloatingPopup>
//           <SettingsPage />
//         </FloatingPopup>
//       )}
//     </div>
//   );
// }

// export default App;





























// import React from 'react';
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import Sidebar from './Components/Sidebar';
// import Home from './Components/Home';
// import Trending from './Components/Trending';
// import MostLiked from './Components/MostLiked';
// import Latest from './Components/Latest';
// import Settings from './Components/Settings';
// import Navbar from './Components/Navbar';

// const App = () => {
//   return (
//     <Router>
//       <div>
//         <Navbar />
//         <Sidebar />
//         <Switch>
//           <Route exact path="/" component={Home} />
//           <Route path="/trending" component={Trending} />
//           <Route path="/mostliked" component={MostLiked} />
//           <Route path="/latest" component={Latest} />
//           <Route path="/settings" component={Settings} />
//         </Switch>
//       </div>
//     </Router>
//   );
// };

// export default App;


