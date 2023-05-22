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



import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Components/Home';
import Trending from './Components/Trending';
import MostLiked from './Components/MostLiked';
import Latest from './Components/Latest';
import Settings from './Components/Settings';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/trending" component={Trending} />
          <Route path="/most-liked" component={MostLiked} />
          <Route path="/latest" component={Latest} />
          <Route path="/settings" component={Settings} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;

