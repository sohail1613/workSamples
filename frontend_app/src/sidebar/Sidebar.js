
import React from 'react'
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import EmojiFlagsIcon from '@mui/icons-material/EmojiFlags';
import PeopleIcon from '@mui/icons-material/EmojiPeople';
import ChatIcon from '@mui/icons-material/Chat';
import StoreFrontIcon from '@mui/icons-material/Storefront';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import ExpandMoreOutlined from '@mui/icons-material/ExpandMore';


function Sidebar() {
  return (
    <div className='sidebar'>
        <SidebarRow src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxbKCoBTZwfhVw0ArKoCVJDxt2EcTJ6b_1Vg&usqp=CAU.png' title="Sohail"/>
        <SidebarRow Icon = {LocalHospitalIcon} title = "Virus Information Center" />
        <SidebarRow Icon = {EmojiFlagsIcon} title = "Pages" />
        <SidebarRow Icon = {PeopleIcon} title = "Friends" />
        <SidebarRow Icon = {ChatIcon} title = "Massenger" />
        <SidebarRow Icon = {StoreFrontIcon} title = "Marketplace" />
        <SidebarRow Icon = {VideoLibraryIcon} title = "Videos" />
        <SidebarRow Icon = {ExpandMoreOutlined} title = "More" />
    </div>
  )
}

export default Sidebar;