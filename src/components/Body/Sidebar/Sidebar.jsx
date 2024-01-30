import React from "react";
import SidebarButton from "./SidebarButton";
import icons from "../../../data/icons";
import SidebarOptions from "./SidebarOptions";

function Sidebar()
{
    return (
        <div className="sidebar">
          <SidebarButton />
          {icons.map((icon)=>{
            return icon.key>1&&icon.key<6?<SidebarOptions icon={icon} />:null;
          })}
          </div>

          
    );
}

export default Sidebar;