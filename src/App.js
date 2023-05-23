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







import React from 'react';
import Sidebar from './Components/Sidebar';
import Navbar from './Components/Navbar';
import Feed from './Components/Feed';
import "./App.css";

function App() {
  return (
    <div className='App'>
      <Navbar />
      <div className="content">
        <Sidebar />
        <Feed />
      </div>
    </div>
  );
}

export default App;













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


