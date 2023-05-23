// import React from 'react'
// import "./Feed.css";
// import Qbox from './Qbox';

// const Feed = () => {
//   return (
//       <div className="feed">
//           <Qbox />
      
//     </div>
//   )
// }

// export default Feed


// old final code

// import React from 'react';
// import "./Feed.css";
// import Qbox from './Qbox';
// import Post from './Post';

// const Feed = () => {
//   return (
//     <div className="feed">
//       <Qbox />
//       <Post />
//     </div>
//   );
// }

// export default Feed;







//it runs easily
// import React from 'react';
// import "./Feed.css";
// import Qbox from './Qbox';
// import Post from './Post';

// const Feed = () => {
//   return (
//     <div className="feed">
//       <div className="navbar">
//         {/* Navbar content */}
//       </div>
//       <div className="container">
//         <Qbox />
//         <Post />
//       </div>
//     </div>
//   );
// }

// export default Feed;






import React from 'react';
import "./Feed.css";
import Qbox from './Qbox';
import Post from './Post';

const Feed = () => {
  return (
    <div className="feed-container">
      <div className="navbar">
        {/* Navbar content */}
      </div>
      <div className="feed-content">
        <Qbox />
        <Post />
        <Post />
        <Post />
        <Post />
      </div>
    </div>
  );
}

export default Feed;
