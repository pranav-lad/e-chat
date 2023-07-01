// import React, { useState } from 'react';
// import './ProfilePopup.css';

// const ProfilePopup = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handlePopupToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="ProfilePopup">
//       <img
//         className="profile-icon"
//         src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
//         alt="Profile"
//         onClick={handlePopupToggle}
//       />

//       {isOpen && (
//         <div className="popup-container">
//           <ul className="popup-menu">
//             <li className="popup-item">Edit Profile</li>
//             <li className="popup-item">Bookmarks</li>
//             <li className="popup-item">Reports</li>
//             <li className="popup-item">Logout</li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePopup;




// final code

// import React, { useState } from 'react';
// import './ProfilePopup.css';
// import { Edit, Bookmark, Description, ExitToApp } from '@material-ui/icons';

// const ProfilePopup = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const handlePopupToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <div className="ProfilePopup">
//       <img
//         className="profile-icon"
//         src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
//         alt="Profile"
//         onClick={handlePopupToggle}
//       />

//       {isOpen && (
//         <div className="popup-container">
//           <ul className="popup-menu">
//             <li className="popup-item">
//               <Edit className="popup-item-icon" />
//               <span className="popup-item-text">Edit Profile</span>
//             </li>
//             <li className="popup-item">
//               <Bookmark className="popup-item-icon" />
//               <span className="popup-item-text">Bookmarks</span>
//             </li>
//             <li className="popup-item">
//               <Description className="popup-item-icon" />
//               <span className="popup-item-text">Reports</span>
//             </li>
//             <li className="popup-item">
//               <ExitToApp className="popup-item-icon" />
//               <span className="popup-item-text">Logout</span>
//             </li>
//           </ul>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ProfilePopup;







// final code

// import React, { useState } from 'react';
// import './ProfilePopup.css';
// import { Edit, Bookmark, Description, ExitToApp } from '@material-ui/icons';
// import SettingsPage from './SettingsPage';

// const ProfilePopup = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false);

//   const handlePopupToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleItemClick = (item) => {
//     // Handle the click event for each item
//     console.log(`Clicked on ${item}`);

//     if (item === 'Settings') {
//       setIsSettingsOpen(true);
//     }
//   };

//   const handleCloseSettings = () => {
//     setIsSettingsOpen(false);
//   };

//   return (
//     <div className="ProfilePopup">
//       <img
//         className="profile-icon"
//         src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
//         alt="Profile"
//         onClick={handlePopupToggle}
//       />

//       {isOpen && (
//         <div className="popup-container">
//           <ul className="popup-menu">
//             <li className="popup-item" onClick={() => handleItemClick('Edit Profile')}>
//               <Edit className="popup-item-icon" />
//               <span className="popup-item-text">Edit Profile</span>
//             </li>
//             <li className="popup-item" onClick={() => handleItemClick('Bookmarks')}>
//               <Bookmark className="popup-item-icon" />
//               <span className="popup-item-text">Bookmarks</span>
//             </li>
//             <li className="popup-item" onClick={() => handleItemClick('Reports')}>
//               <Description className="popup-item-icon" />
//               <span className="popup-item-text">Report</span>
//             </li>
//             <li className="popup-item" onClick={() => handleItemClick('Settings')}>
//               <ExitToApp className="popup-item-icon" />
//               <span className="popup-item-text">Logout</span>
//             </li>
//           </ul>
//         </div>
//       )}

//       {isSettingsOpen && <SettingsPage onClose={handleCloseSettings} />}
//     </div>
//   );
// };

// export default ProfilePopup;














//final code
// import React, { useState } from 'react';
// import './ProfilePopup.css';
// import { Edit, Bookmark, Description, ExitToApp } from '@material-ui/icons';
// import SettingsPage from './SettingsPage';

// const ProfilePopup = () => {
//   const [isOpen, setIsOpen] = useState(false);
//   const [isSettingsOpen, setIsSettingsOpen] = useState(false);

//   const handlePopupToggle = () => {
//     setIsOpen(!isOpen);
//   };

//   const handleItemClick = (item) => {
//     console.log(`Clicked on ${item}`);

//     if (item === 'Edit Profile') {
//       setIsSettingsOpen(true);
//     }

//     setIsOpen(false); // Close the profile popup regardless of the clicked item
//   };

//   const handleCloseSettings = () => {
//     setIsSettingsOpen(false);
//   };

//   return (
//     <div className="ProfilePopup">
//       <img
//         className="profile-icon"
//         src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
//         alt="Profile"
//         onClick={handlePopupToggle}
//       />

//       {isOpen && (
//         <div className="popup-container">
//           <ul className="popup-menu">
//             <li className="popup-item" onClick={() => handleItemClick('Edit Profile')}>
//               <Edit className="popup-item-icon" />
//               <span className="popup-item-text">Edit Profile</span>
//             </li>
//             <li className="popup-item" onClick={() => handleItemClick('Bookmarks')}>
//               <Bookmark className="popup-item-icon" />
//               <span className="popup-item-text">Bookmarks</span>
//             </li>
//             <li className="popup-item" onClick={() => handleItemClick('Reports')}>
//               <Description className="popup-item-icon" />
//               <span className="popup-item-text">Reports</span>
//             </li>
//             <li className="popup-item" onClick={() => handleItemClick('Logout')}>
//               <ExitToApp className="popup-item-icon" />
//               <span className="popup-item-text">Logout</span>
//             </li>
//           </ul>
//         </div>
//       )}

//       {isSettingsOpen && <SettingsPage onClose={handleCloseSettings} />}
//     </div>
//   );
// };

// export default ProfilePopup;






// good win for close button
import React, { useState } from 'react';
import { Avatar } from '@mui/material';
import { Edit, Bookmark, Description, ExitToApp } from '@mui/icons-material';
import SettingsPage from './SettingsPage';
import './ProfilePopup.css';

const ProfilePopup = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const handlePopupToggle = () => {
    setIsOpen(!isOpen);
  };

  const handleItemClick = (item) => {
    console.log(`Clicked on ${item}`);

    if (item === 'Edit Profile') {
      setIsSettingsOpen(true);
    } else {
      setIsSettingsOpen(false);
    }
  };

  const handleCloseSettings = () => {
    setIsSettingsOpen(false);
  };

  return (
    <div className="ProfilePopup">
      <img
        className="profile-icon"
        src="https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg"
        alt="Profile"
        onClick={handlePopupToggle}
      />

      {isOpen && (
        <div className="popup-container">
          <ul className="popup-menu">
            <li className="popup-item" onClick={() => handleItemClick('Edit Profile')}>
              <Edit className="popup-item-icon" />
              <span className="popup-item-text">Edit Profile</span>
            </li>
            <li className="popup-item" onClick={() => handleItemClick('Bookmarks')}>
              <Bookmark className="popup-item-icon" />
              <span className="popup-item-text">Bookmarks</span>
            </li>
            <li className="popup-item" onClick={() => handleItemClick('Reports')}>
              <Description className="popup-item-icon" />
              <span className="popup-item-text">Reports</span>
            </li>
            <li className="popup-item" onClick={() => handleItemClick('Logout')}>
              <ExitToApp className="popup-item-icon" />
              <span className="popup-item-text">Logout</span>
            </li>
          </ul>
        </div>
      )}

      {isSettingsOpen && <SettingsPage handleClose={handleCloseSettings} />}
    </div>
  );
};

export default ProfilePopup;














