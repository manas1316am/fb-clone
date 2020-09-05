import React from 'react'
import './Sidebar.css'
import SidebarRow from './SidebarRow'

import LocalHospitalIcon from '@material-ui/icons/LocalHospital';
import EmojiFlagsIcon from '@material-ui/icons/EmojiFlags';
import PeopleIcon from '@material-ui/icons/People';
import ChatIcon from '@material-ui/icons/Chat';
import StorefrontIcon from '@material-ui/icons/Storefront';
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import ExpandMoreOutlinedIcon from '@material-ui/icons/ExpandMoreOutlined';
import { useStateValue } from "./StateProvider"


function Sidebar() {
    const [{ user }, dispatch] = useStateValue();

    return (
        <div className='sidebar'>
            <SidebarRow src={user.photoURL} title={user.displayName} />
            <SidebarRow 
                Icon={LocalHospitalIcon}
                title="COVID-19 Information Center" />
            <SidebarRow Icon={EmojiFlagsIcon} title='Pages' />
            <SidebarRow Icon={PeopleIcon} title='Friends' />
            <SidebarRow Icon={ChatIcon} title='Messenger' />
            <SidebarRow Icon={StorefrontIcon} title='MarketPlace' />
            <SidebarRow Icon={VideoLibraryIcon} title='Videos' />
            <SidebarRow Icon={ExpandMoreOutlinedIcon} title='Others' />

        </div>
    )
}

export default Sidebar

// 'https://instagram.fccu19-1.fna.fbcdn.net/v/t51.2885-19/s150x150/117903631_126496179152267_5562772097187043307_n.jpg?_nc_ht=instagram.fccu19-1.fna.fbcdn.net&_nc_ohc=4BaK0ax6dFsAX-MJPrr&oh=3544f631a4c5ba440e3c879192fcdce1&oe=5F7AF012'