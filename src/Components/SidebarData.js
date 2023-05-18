import React from 'react';
import HomeIcon from '@mui/icons-material/Home';
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import FiberNewRoundedIcon from '@mui/icons-material/FiberNewRounded';
import SettingsRoundedIcon from '@mui/icons-material/SettingsRounded';

export const SidebarData=[
    {
        title:"Home",
        icon:<HomeIcon/>,
        link:"/home"
    },
    {
        title:"Trending",
        icon:<TrendingUpIcon/>,
        link:"/trending"
    },
    {
        title:"Thumb",
        icon:<ThumbUpIcon/>,
        link:"/thumb"
    },
    {
        title:"New",
        icon:<FiberNewRoundedIcon/>,
        link:"/new"
    },
    {
        title:"Settings",
        icon:<SettingsRoundedIcon/>,
        link:"/settings"
    },
];
export default SidebarData;
    

