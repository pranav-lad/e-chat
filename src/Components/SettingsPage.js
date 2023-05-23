// // import React, { useState, useRef, useEffect } from 'react';

// // const SettingsPage = () => {
// //   const [showSettings, setShowSettings] = useState(false);
// //   const settingsContainerRef = useRef(null);

// //   const handleSettingsButtonClick = () => {
// //     setShowSettings(true);
// //   };

// //   const handleOutsideClick = (event) => {
// //     if (settingsContainerRef.current && !settingsContainerRef.current.contains(event.target)) {
// //       setShowSettings(false);
// //     }
// //   };

// //   useEffect(() => {
// //     document.addEventListener('click', handleOutsideClick);
// //     return () => {
// //       document.removeEventListener('click', handleOutsideClick);
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <button id="settings-button" onClick={handleSettingsButtonClick}>
// //         Settings
// //       </button>

// //       {showSettings && (
// //         <div id="settings-container" ref={settingsContainerRef}>
// //           {/* Settings content goes here */}
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default SettingsPage;




// // import React, { useState, useRef, useEffect } from 'react';

// // const SettingsPage = () => {
// //   const [showSettings, setShowSettings] = useState(false);
// //   const settingsContainerRef = useRef(null);

// //   const handleSettingsButtonClick = () => {
// //     setShowSettings(true);
// //   };

// //   const handleOutsideClick = (event) => {
// //     if (settingsContainerRef.current && !settingsContainerRef.current.contains(event.target)) {
// //       setShowSettings(false);
// //     }
// //   };

// //   useEffect(() => {
// //     document.addEventListener('click', handleOutsideClick);
// //     return () => {
// //       document.removeEventListener('click', handleOutsideClick);
// //     };
// //   }, []);

// //   return (
// //     <>
// //       <button id="settings-button" onClick={handleSettingsButtonClick}>
// //         Settings
// //       </button>

// //       {showSettings && (
// //         <div id="settings-container" ref={settingsContainerRef}>
// //           {/* Settings content goes here */}
// //         </div>
// //       )}
// //     </>
// //   );
// // };

// // export default SettingsPage;



// import React, { useState } from "react";

// const SettingsPage = () => {
//   const [showSettings, setShowSettings] = useState(false);

//   const handleSettingsButtonClick = () => {
//     setShowSettings(true);
//   };

//   return (
//     <>
//       <button id="settings-button" onClick={handleSettingsButtonClick}>
//         Settings
//       </button>

//       {showSettings && (
//         <div id="settings-container">
//           <div className="settings-float">
//             {/* Settings content goes here */}
//             <h2>Settings</h2>
//             <p>This is the settings content.</p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

// export default SettingsPage;
