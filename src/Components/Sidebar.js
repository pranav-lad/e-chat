import React from "react";
import "../App.css";
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

function Sidebar() {
  const currentPathname = window.location.pathname;

  const handleItemClick = (pathname) => {
    window.location.pathname = pathname;
  };

  return (
    <div className="Sidebar">
      <ul className="SidebarList">
        <li
          key="Home"
          id={currentPathname === "/Home" ? "active" : ""}
          onClick={() => handleItemClick("/Home")}
          className="row">
          <HomeIcon/> Home
        </li>
        <li
          key="Trending" 
          id={currentPathname === "/Trending" ? "active" : ""}
          onClick={() => handleItemClick("/Trending")}
          className="row">
          <TrendingUpIcon/> Trending
          
        </li>
        <li 
         key="Most liked" 
          id={currentPathname === "/Most Liked" ? "active" : ""}
          onClick={() => handleItemClick("/Trending")}
          className="row">
          <ThumbUpIcon/> Most Liked
          
        </li>
        <li
          key="Latest" 
          id={currentPathname === "/latest" ? "active" : ""}
          onClick={() => handleItemClick("/Latest")}
          className="row">
          <FiberNewRoundedIcon/> Latest
          
        </li>

        <li
          key="settings" 
          id={currentPathname === "/settings" ? "active" : ""}
          onClick={() => handleItemClick("/settings")}
          className="row">
          <SettingsRoundedIcon/> Settings
        </li>
      </ul>
    </div>
  );
}

export default Sidebar;
