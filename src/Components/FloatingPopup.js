// import React, { useState } from 'react';
// import styled from 'styled-components';

// const PopupContainer = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: #fff;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
// `;

// const FloatingPopup = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={togglePopup}>Toggle Popup</button>
//       {isOpen && (
//         <PopupContainer>
//           <h2>Floating Popup</h2>
//           <p>This is the content of the floating popup window.</p>
//         </PopupContainer>
//       )}
//     </>
//   );
// };

// export default FloatingPopup;








// import React, { useState } from 'react';
// import styled from 'styled-components';

// const PopupContainer = styled.div`
//   position: fixed;
//   top: 50%;
//   left: 50%;
//   transform: translate(-50%, -50%);
//   background-color: #fff;
//   padding: 20px;
//   border-radius: 8px;
//   box-shadow: 0 2px 10px rgba(0, 0, 0, 0.15);
// `;

// const FloatingPopup = ({ children }) => {
//   const [isOpen, setIsOpen] = useState(false);

//   const togglePopup = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <>
//       <button onClick={togglePopup}>Toggle Popup</button>
//       {isOpen && (
//         <PopupContainer>
//           {children}
//         </PopupContainer>
//       )}
//     </>
//   );
// };

// export default FloatingPopup;
