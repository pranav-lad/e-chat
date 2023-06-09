
// return (
  //   <div className="Sidebar">
  //     <ul className="SidebarList">
  //       <li
  //         key="Home"
  //         id={currentPathname === "/Home" ? "active" : ""}
  //         onClick={() => handleItemClick("/Home")}
  //         className="row">
  //         <HomeIcon/> Home
  //       </li>
  //       <li
  //         key="Trending" 
  //         id={currentPathname === "/Trending" ? "active" : ""}
  //         onClick={() => handleItemClick("/Trending")}
  //         className="row">
  //         <TrendingUpIcon/> Trending
  
  //       </li>
  //       <li 
  //        key="Most liked" 
  //         id={currentPathname === "/Most Liked" ? "active" : ""}
  //         onClick={() => handleItemClick("/Trending")}
  //         className="row">
  //         <ThumbUpIcon/> Most Liked
  
  //       </li>
  //       <li
  //         key="Latest" 
  //         id={currentPathname === "/latest" ? "active" : ""}
  //         onClick={() => handleItemClick("/Latest")}
  //         className="row">
  //         <FiberNewRoundedIcon/> Latest
          
  //       </li>
  
  //       <li
  //         key="settings" 
  //         id={currentPathname === "/settings" ? "active" : ""}
  //         onClick={() => handleItemClick("/settings")}
  //         className="row">
  //         <SettingsRoundedIcon/> Settings
  //       </li>
  //     </ul>
  //   </div>
  // );
  
  
  
  //   return (
    //   <div className="Sidebar">
    //     <div className="SidebarContainer">
    //       <li key="Home" id={currentPathname === "/Home" ? "active" : ""} onClick={() => handleItemClick("/Home")} className="row">
    //         <HomeIcon/> Home
    //       </li>
    //       <li key="Trending" id={currentPathname === "/Trending" ? "active" : ""} onClick={() => handleItemClick("/Trending")} className="row">
    //         <TrendingUpIcon/> Trending
    //       </li>
    //       <li key="MostLiked" id={currentPathname === "/MostLiked" ? "active" : ""} onClick={() => handleItemClick("/MostLiked")} className="row">
    //         <ThumbUpIcon/> Most Liked
    //       </li>
    //       <li key="Latest" id={currentPathname === "/Latest" ? "active" : ""} onClick={() => handleItemClick("/Latest")} className="row">
    //         <FiberNewRoundedIcon/> Latest
    //       </li>
//       <li key="Settings" id={currentPathname === "/Settings" ? "active" : ""} onClick={() => handleItemClick("/Settings")} className="row">
//         <SettingsRoundedIcon/> Settings
//       </li>
//     </div>
//   </div>
// );






//final code 
// import React from "react";
// import "../App.css";
// import HomeIcon from '@mui/icons-material/Home';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded';
// import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

// function Sidebar() {
//   const currentPathname = window.location.pathname;

//   const handleItemClick = (pathname) => {
//     window.location.pathname = pathname;
//   };


// return (
//   <div className="Sidebar">
//     <ul className="SidebarList">
//       <li key="Home" id={currentPathname === "/Home" ? "active" : ""} onClick={() => handleItemClick("/Home")} className="row">
//         <HomeIcon/> <span className="sidebar-text">Home</span>
//       </li>
//       <li key="Trending" id={currentPathname === "/Trending" ? "active" : ""} onClick={() => handleItemClick("/Trending")} className="row">
//         <TrendingUpIcon/> <span className="sidebar-text">Trending</span>
//       </li>
//       <li key="MostLiked" id={currentPathname === "/MostLiked" ? "active" : ""} onClick={() => handleItemClick("/MostLiked")} className="row">
//         <ThumbUpIcon/> <span className="sidebar-text">Most Liked</span>
//       </li>
//       <li key="Latest" id={currentPathname === "/Latest" ? "active" : ""} onClick={() => handleItemClick("/Latest")} className="row">
//         <FiberNewRoundedIcon/> <span className="sidebar-text">Latest</span>
//       </li>
//     </ul>
//     <ul className="SidebarList">
//       <li key="Settings" id={currentPathname === "/Settings" ? "active" : ""} onClick={() => handleItemClick("/Settings")} className="row">
//         <SettingsRoundedIcon /> <span className="sidebar-text">Settings</span>
//       </li>
//     </ul>

  
//   </div> 
// );


// }

// export default Sidebar;





// final code

import React from "react";
import "../App.css";
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';


const Sidebar = ({ currentPathname, handleItemClick, handleSettingsClick }) => {
  
  return (
  <div className="Sidebar">
    <ul className="SidebarList">
      <li key="Home" id={currentPathname === "/Home" ? "active" : ""} onClick={() => handleItemClick("/Home")} className="row">
        <HomeIcon/> <span className="sidebar-text">Home</span>
      </li>
      <li key="Trending" id={currentPathname === "/Trending" ? "active" : ""} onClick={() => handleItemClick("/Trending")} className="row">
        <TrendingUpIcon/> <span className="sidebar-text">Trending</span>
      </li>
      <li key="MostLiked" id={currentPathname === "/MostLiked" ? "active" : ""} onClick={() => handleItemClick("/MostLiked")} className="row">
        <ThumbUpIcon/> <span className="sidebar-text">Most Liked</span>
      </li>
      <li key="Latest" id={currentPathname === "/Latest" ? "active" : ""} onClick={() => handleItemClick("/Latest")} className="row">
        <FiberNewRoundedIcon/> <span className="sidebar-text">Latest</span>
      </li>
    </ul>
    <ul className="SidebarList">
      <li key="Settings" id={currentPathname === "/Settings" ? "active" : ""} onClick={() => handleItemClick("/Settings")} className="row">
        <SettingsRoundedIcon /> <span className="sidebar-text">Settings</span>
        <li onClick={handleSettingsClick}></li>
      </li>
    </ul>

  
  </div> 
);


}

export default Sidebar;
















































// import React from "react";
// import { useNavigate } from "react-router-dom";
// import HomeIcon from "@mui/icons-material/Home";
// import TrendingUpIcon from "@mui/icons-material/TrendingUp";
// import ThumbUpIcon from "@mui/icons-material/ThumbUp";
// import FiberNewRoundedIcon from "@mui/icons-material/FiberNewRounded";
// import SettingsRoundedIcon from "@mui/icons-material/SettingsRounded";

// function Sidebar() {
//   const navigate = useNavigate();

//   const handleItemClick = (pathname) => {
//     navigate(pathname);
//   };

//   return (
//     <div className="Sidebar">
//       <ul className="SidebarList">
//         <li
//           key="Home"
//           onClick={() => handleItemClick("/Home")}
//           className="row"
//         >
//           <HomeIcon />
//           <span className="sidebar-text">Home</span>
//         </li>
//         <li
//           key="Trending"
//           onClick={() => handleItemClick("/Trending")}
//           className="row"
//         >
//           <TrendingUpIcon />
//           <span className="sidebar-text">Trending</span>
//         </li>
//         <li
//           key="MostLiked"
//           onClick={() => handleItemClick("/MostLiked")}
//           className="row"
//         >
//           <ThumbUpIcon />
//           <span className="sidebar-text">Most Liked</span>
//         </li>
//         <li
//           key="Latest"
//           onClick={() => handleItemClick("/Latest")}
//           className="row"
//         >
//           <FiberNewRoundedIcon />
//           <span className="sidebar-text">Latest</span>
//         </li>
//         <li
//           key="Settings"
//           onClick={() => handleItemClick("/Settings")}
//           className="row"
//         >
//           <SettingsRoundedIcon />
//           <span className="sidebar-text">Settings</span>
//         </li>
//       </ul>
//     </div>
//   );
// }

// export default Sidebar;





// settings code 

// import React from "react";
// import "../App.css";
// import HomeIcon from '@mui/icons-material/Home';
// import TrendingUpIcon from '@mui/icons-material/TrendingUp';
// import ThumbUpIcon from '@mui/icons-material/ThumbUp';
// import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded';
// import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

// function Sidebar({ toggleSettingsPopup }) {
//   const currentPathname = window.location.pathname;

//   const handleItemClick = (pathname) => {
//     if (pathname === "/Settings") {
//       toggleSettingsPopup();
//     } else {
//       window.location.pathname = pathname;
//     }
//   };

//   return (
//     <div className="Sidebar">
//       <ul className="SidebarList">
//         <li key="Home" id={currentPathname === "/Home" ? "active" : ""} onClick={() => handleItemClick("/Home")} className="row">
//           <HomeIcon/> <span className="sidebar-text">Home</span>
//         </li>
//         <li key="Trending" id={currentPathname === "/Trending" ? "active" : ""} onClick={() => handleItemClick("/Trending")} className="row">
//           <TrendingUpIcon/> <span className="sidebar-text">Trending</span>
//         </li>
//         <li key="MostLiked" id={currentPathname === "/MostLiked" ? "active" : ""} onClick={() => handleItemClick("/MostLiked")} className="row">
//           <ThumbUpIcon/> <span className="sidebar-text">Most Liked</span>
//         </li>
//         <li key="Latest" id={currentPathname === "/Latest" ? "active" : ""} onClick={() => handleItemClick("/Latest")} className="row">
//           <FiberNewRoundedIcon/> <span className="sidebar-text">Latest</span>
//         </li>
//       </ul>
//       <ul className="SidebarList">
//         <li key="Settings" id={currentPathname === "/Settings" ? "active" : ""} onClick={() => handleItemClick("/Settings")} className="row">
//           <SettingsRoundedIcon/> <span className="sidebar-text">Settings</span>
//         </li>
//       </ul>
//     </div> 
//   );
// }

// export default Sidebar;
