import { ExpandMoreOutlined } from '@mui/icons-material';
import { Avatar } from '@mui/material';
import React from 'react';
import "./Post.css";
import ThumbIcon from '@mui/icons-material/ThumbUp';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubble';
import NearMeIcon from '@mui/icons-material/NearMe';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

function Post({profilePic, image, userName, message}) {
  return (
    <div className='post'>
        <div className='post_top'>
            <Avatar src={profilePic} className="post-avatar" />
            <div className='post_topInfo'>
                <h3>{userName}</h3>
                {/* <p>TimeStamp...</p> */}
            </div>
        </div>

        <div className='post_bottom'>
            <p>{message}</p>
        </div>

        <div className='post_image'>
            <img src={image} alt=" " />
        </div>

        <div className='post_options'>
            <div className='post_option'>
                <ThumbIcon />
                <p>Like</p>
            </div>
            <div className='post_option'>
                <ChatBubbleOutlineIcon />
                <p>Comment</p>
            </div>
            <div className='post_option'>
                <NearMeIcon />
                <p>Share</p>
            </div>
            <div className='post_option'>
                <AccountCircleIcon />
                <ExpandMoreOutlined />
            </div>
        </div>

    </div>
  )
}

export default Post