import React from "react";
import icons from "../../../data/icons";
import Icon from "../Icon";

function SidebarButton()
{
    return(
        <div className="sidebar-button">
            <button id="sidebar-button">
              <Icon icon={icons[0]} />
            </button>
          </div>
    )
}

export default SidebarButton;