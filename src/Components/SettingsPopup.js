
//final test1
import React, { useState } from 'react';
import './SettingsPopup.css';

const BlurBackground = () => {
  return <div className="blur-background"></div>;
};

const SettingsPopup = ({ handleClose }) => {
  const [darkMode, setDarkMode] = useState(false);

  const handleToggle = () => {
    setDarkMode(!darkMode);
    if (darkMode) {
      document.documentElement.classList.remove('dark-mode');
    } else {
      document.documentElement.classList.add('dark-mode');
    }
  };

  return (
    <div>
      <BlurBackground />
      <div className="settings-popup">
        <div className="settings-popup-header">
          <h3 className="settings-popup-title">Settings</h3>
          <button className="settings-popup-close" onClick={handleClose}>
            &times;
          </button>
        </div>
        <div className="settings-popup-content">
          <div className="settings-popup-section">
            <h4>Theme</h4>
            <label className="settings-popup-toggle">
              <input type="checkbox" checked={darkMode} onChange={handleToggle} />
              <span className="slider"></span>
            </label>
          </div>
          <div className="settings-popup-section">
            <h4>Email Updates</h4>
            <label className="settings-popup-toggle">
              <input type="checkbox" />
              <span className="slider"></span>
            </label>
          </div>
          <div className="settings-popup-section">
            <button className="settings-popup-button settings-popup-delete">
              Delete Account
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsPopup;







//react state 

// import React, { useContext } from 'react';
// import './SettingsPopup.css';
// import { ThemeContext } from '../ThemeContext'; // Update the import statement

// const BlurBackground = () => {
//   return <div className="blur-background"></div>;
// };

// const SettingsPopup = ({ handleClose }) => {
//   const { darkMode, toggleDarkMode } = useContext(ThemeContext); // Update the variable names

//   const handleToggle = () => {
//     toggleDarkMode();
//   };

//   return (
//     <div>
//       <BlurBackground />
//       <div className="settings-popup">
//         <div className="settings-popup-header">
//           <h3 className="settings-popup-title">Settings</h3>
//           <button className="settings-popup-close" onClick={handleClose}>
//             &times;
//           </button>
//         </div>
//         <div className="settings-popup-content">
//           <div className="settings-popup-section">
//             <h4>Theme</h4>
//             <label className="settings-popup-toggle">
//               <input
//                 type="checkbox"
//                 checked={darkMode}
//                 onChange={handleToggle}
//               />
//               <span className="slider"></span>
//             </label>
//           </div>
//           <div className="settings-popup-section">
//             <h4>Email Updates</h4>
//             <label className="settings-popup-toggle">
//               <input type="checkbox" />
//               <span className="slider"></span>
//             </label>
//           </div>
//           <div className="settings-popup-section">
//             <button className="settings-popup-button settings-popup-delete">
//               Delete Account
//             </button>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default SettingsPopup;




