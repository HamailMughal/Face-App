import { Chat, EmojiFlags, LocalHospital, People, VideoLibrary } from '@mui/icons-material';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Storefront from '@mui/icons-material/Storefront';
import React from 'react';
import "./Sidebar.css";
import SidebarRow from './SidebarRow';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue(); 

    return (
        <div className='sidebar'>
            <SidebarRow src={user.photoURL} title={user.displayName}/>
            <SidebarRow Icon={LocalHospital} title="Covid-19 Information Center"/>
            <SidebarRow Icon={EmojiFlags} title="Pages"/>
            <SidebarRow Icon={People} title="Friends"/>
            <SidebarRow Icon={Chat} title="Messenger"/>
            <SidebarRow Icon={Storefront} title="Marketplace"/>
            <SidebarRow Icon={VideoLibrary} title="Videos"/>
            <SidebarRow Icon={ExpandMore} title="More"/>
        </div>
    )
}

export default Sidebar
