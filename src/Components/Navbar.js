// final code
import React from 'react'
import "./Navbar.css";
import ProfilePopup from './ProfilePopup';

export default function Navbar() {
  return (
    <div className='Navbar'><p className='logo'><img src='https://png.pngtree.com/element_our/sm/20180518/sm_5afec7f1592f4.jpg' width='30px' alt='logo' /> eChat PCCoE </p>
    <div className='search'>
    <input /> <img src='https://www.nicepng.com/png/detail/965-9653559_search-icon-circle.png' />
    </div>
    <div className='right'>
       <img className='notification' src='https://media.istockphoto.com/id/873520166/vector/bell-circle-icon-black-round-minimalist-icon-isolated-on-white-background.jpg?s=612x612&w=0&k=20&c=BTXKHPBPgBOrdF9gh_DoCgZsHqh04KUtuQiHHzfhHz0='/>
      {/*<img className='profile' src='https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg' /> */}
      <ProfilePopup />
    </div>

    </div>
  )
}
























// import React from 'react';
// import ProfilePopup from './ProfilePopup';

// const Navbar = () => {
//   return (
//     <div className="Navbar">
//       {/* Your other Navbar content */}
//       <ProfilePopup />
//     </div>
//   );
// };

// export default Navbar;



















