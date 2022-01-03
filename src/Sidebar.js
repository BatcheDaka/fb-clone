import React from 'react';
import './Sidebar.css';
import SidebarRow from "./SidebarRow";

function Sidebar() {
  return (
    <div className="sidebar">
      <SidebarRow srce={user.photoURL} title='Pages'/>
      <SidebarRow title='Friends'/>
      <SidebarRow />
      <SidebarRow />
      <SidebarRow />
    </div>
  )
}

export default Sidebar;
