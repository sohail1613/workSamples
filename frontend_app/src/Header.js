import React from 'react'
import "./Header.css";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import FlagIcon from '@mui/icons-material/Flag';
import SubscriptionsOutlinedIcon from '@mui/icons-material/SubscriptionsOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import { Avatar, IconButton } from '@mui/material';
import AddIcon from "@mui/icons-material/Add"
import ForumIcon from '@mui/icons-material/ForumOutlined';
import NotificationActiveIcon from '@mui/icons-material/NotificationsActive';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Header() {
  return (
    <div className='header'>
        <div className='header_left'>
            <img src='https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png'
            alt='facebooklogo'
            />

            <div className='header_input'>
              <SearchIcon />
              <input placeholder='search' type="text" />
            </div>
        </div>

        <div className='header_center'>
          <div className='header_option  header_option-active'>
            <HomeIcon fontSize="large" />
          </div>
          <div className='header_option'>
            <FlagIcon fontSize="large" />
          </div>
          <div className='header_option'>
            <SubscriptionsOutlinedIcon fontSize="large" />
          </div>
          <div className='header_option'>
            <StorefrontOutlinedIcon fontSize="large" />
          </div>
          <div className='header_option'>
            <SupervisedUserCircleOutlinedIcon fontSize="large" />
          </div>
        </div>

        <div className='header_right'>
          <div className='header_info'>
            <Avatar />
            <h4>sohail</h4>
          </div>

          <IconButton>
            <AddIcon />
          </IconButton>
          <IconButton>
            <ForumIcon />
          </IconButton>
          <IconButton>
            <NotificationActiveIcon />
          </IconButton>
          <IconButton>
            <ExpandMoreIcon />
          </IconButton>
          
        </div>

    </div>
  )
}

export default Header