import React, {useState} from "react";
import SidebarButton from "./SidebarButton";
import icons from "../../../data/icons";
import SidebarOptions from "./SidebarOptions";

function Sidebar()
{
  const [visible, checkVisible] = useState(true);
  function handleClick()
  {
    checkVisible(()=>{
      return !visible;
    })
    console.log(visible);
  }

    return (
        <div className="sidebar" onClick={handleClick} style={visible?{visibility:"visible"}:{visibility:"hidden"}}>
          <SidebarButton />
          {icons.map((icon)=>{
            return icon.key>1&&icon.key<6?<SidebarOptions icon={icon} />:null;
          })}
          </div>

          
    );
}

export default Sidebar;