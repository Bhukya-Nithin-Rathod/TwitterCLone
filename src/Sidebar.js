import React from 'react'
import './Sidebar.css';

//icon Imports from Material UI
import TwitterIcon from '@mui/icons-material/Twitter';
import SidebarOption from './SidebarOption';
import HomeRoundedIcon from '@mui/icons-material/HomeRounded';
import SearchIcon from '@mui/icons-material/Search';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import BookmarkBorderIcon from '@mui/icons-material/BookmarkBorder';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button } from '@mui/material';

function Sidebar() {
  return (
    <div className="sidebar">
      {/*Sidebar Option*/}
      <TwitterIcon className= "sidebar__twitterIcon" />
      <SidebarOption active Icon = {HomeRoundedIcon} text = "Home"/>
      <SidebarOption Icon = {SearchIcon} text = "Explore"/>
      <SidebarOption Icon = {NotificationsIcon} text = "Notifications"/>
      <SidebarOption Icon = {MailOutlineIcon} text = "Messages" />
      <SidebarOption Icon = {ListAltIcon} text = "Lists" />
      <SidebarOption Icon = {BookmarkBorderIcon} text = "Bookmarks" />
      <SidebarOption Icon = {PersonOutlineIcon} text = "Profile" />
      <SidebarOption Icon = {MoreHorizIcon} text = "More" />
     
      {/*Tweet Button*/}
      <Button variant = "outlined" className= "sidebar__tweet" fullWidth>Tweet</Button>
    </div>
  )
}

export default Sidebar
