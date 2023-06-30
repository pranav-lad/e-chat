// import React from 'react'
// import { Avatar } from '@mui/material'
// import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
// import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
// import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
// import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
// import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";
// export default function Post() {
//   return (
//         <div className='card'>lorem30 <br />lorem30 <br />lorem30 <br />lorem30<br />lorem30 <br />lorem30lorem30<br />lorem30<br />
        
        
//         <div className='post'>
//             <div className='post_info'>
//                 <Avatar />
//                 <h5>Username</h5>
//                 <small>Timestamp</small>
//             </div>
//             <div className='post_body'>
//                 <div className='post_question'>
//                     <p>Question</p>
//                     <button className='post_btnAnswer'>Answer</button>
//                 </div>
//                 <div className='post_answer'>
//                     <p></p>
                  
//                 </div>
//                 <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fnoticebard.com%2Fwp-content%2Fuploads%2F2022%2F08%2FTCS-Ninja.jpg&tbnid=UUObwOti4cLBIM&vet=12ahUKEwixxqCY2Yr_AhXMktgFHXNkBicQMygUegUIARCJAg..i&imgrefurl=https%3A%2F%2Fnoticebard.com%2Ftcs-ninja-hiring-2021%2F&docid=R6_4ZTXbGMCT0M&w=400&h=400&q=tcs%20ninja%20image&ved=2ahUKEwixxqCY2Yr_AhXMktgFHXNkBicQMygUegUIARCJAg" alt="" />
              
//             </div>
          
      
//             <div className='post_footer'>
//                 <div className='post_footerAction'>
//                     <ArrowUpwardOutlinedIcon />
//                     <ArrowDownwardOutlinedIcon />
                  
//                 </div>
//                 <RepeatOutlinedIcon />
//                 <ChatBubbleOutlineOutlinedIcon />
//                 <div className="post__footerLeft">
//                     <ShareOutlined />
//                     <MoreHorizOutlined />
//                 </div>
//             </div>
//         </div>

        
//         </div>
//   )
// }

import React from 'react'
import './Post.css'

export default function Post() {
  return (
    <div className='post'>
      <div className='upper'>
      <div className='detail'>
        <div className='title'>Heading of the post</div>
        <div className='icons'>
          <img src='https://img.icons8.com/?size=512&id=59805&format=png' /> 
          <img src='https://img.icons8.com/?size=512&id=59740&format=png' /> 
          <img src='https://img.icons8.com/?size=512&id=98963&format=png' /> 
        </div>
      </div>

        
        <div className='username'>
          <img src='https://static.vecteezy.com/system/resources/previews/005/544/718/original/profile-icon-design-free-vector.jpg' /> Username
        </div>
        </div>
      <div className='lower'>
        Post Content
        lorem30lorem30Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      </div>
      
      </div>
  )
}