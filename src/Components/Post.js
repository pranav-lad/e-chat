import React from 'react'
import './Post.css'
import { Avatar } from '@mui/material'
import ArrowUpwardOutlinedIcon from "@material-ui/icons/ArrowUpwardOutlined";
import ArrowDownwardOutlinedIcon from "@material-ui/icons/ArrowDownwardOutlined";
import RepeatOutlinedIcon from "@material-ui/icons/RepeatOutlined";
import ChatBubbleOutlineOutlinedIcon from "@material-ui/icons/ChatBubbleOutlineOutlined";
import { MoreHorizOutlined, ShareOutlined } from "@material-ui/icons";

function Post() {
    return (
        <div className='post'>
            <div className='post_info'>
                <Avatar />
                <h5>Username</h5>
                <small>Timestamp</small>


            </div>
            <div className='post_body'>
                <div className='post_question'>
                    <p>Question</p>
                    <button className='post_btnAnswer'>Answer</button>
                </div>
                <div className='post_answer'>
                    <p></p>
                  

                </div>
                <img src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fnoticebard.com%2Fwp-content%2Fuploads%2F2022%2F08%2FTCS-Ninja.jpg&tbnid=UUObwOti4cLBIM&vet=12ahUKEwixxqCY2Yr_AhXMktgFHXNkBicQMygUegUIARCJAg..i&imgrefurl=https%3A%2F%2Fnoticebard.com%2Ftcs-ninja-hiring-2021%2F&docid=R6_4ZTXbGMCT0M&w=400&h=400&q=tcs%20ninja%20image&ved=2ahUKEwixxqCY2Yr_AhXMktgFHXNkBicQMygUegUIARCJAg" alt="" />
              
            </div>
          
      
            <div className='post_footer'>
                <div className='post_footerAction'>
                    <ArrowUpwardOutlinedIcon />
                    <ArrowDownwardOutlinedIcon />
                  
                </div>

                <RepeatOutlinedIcon />
                <ChatBubbleOutlineOutlinedIcon />

                <div className="post__footerLeft">
                    <ShareOutlined />
                    <MoreHorizOutlined />
                </div>
            </div>
        </div>

    );
}

export default Post
