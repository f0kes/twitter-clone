import React from 'react';
import './Sidebar.css'
import SidebarFunction from "./SidebarFunction";
import HomeIcon from '@mui/icons-material/Home';
import BlurOnRoundedIcon from '@mui/icons-material/BlurOnRounded';
import {Button} from "@mui/material";

function Sidebar() {
    return (
        <div>
            {/*Logo*/}
            <BlurOnRoundedIcon sx={{fontSize: 50}}/>
            <SidebarFunction text="ADADADA" Icon={HomeIcon} active={true}/>
            <SidebarFunction text="ADADADA" Icon={HomeIcon} active={false}/>
            <SidebarFunction text="ADADADA" Icon={HomeIcon} active={false}/>
            <SidebarFunction text="ADADADA" Icon={HomeIcon} active={false}/>
            <SidebarFunction text="ADADADA" Icon={HomeIcon} active={false}/>

            <Button variant="outlined" className={"sidebar__shout"} fullWidth>
                Blalala lalal
            </Button>
        </div>
    );
}

export default Sidebar;