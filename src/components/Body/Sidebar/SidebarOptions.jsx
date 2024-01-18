import React from "react";
import Icon from "../Icon";

function SidebarOptions(props)
{
    return(
        <div class="sidebar-options">
            <div class="sidebar-options-logo">
              <Icon icon={props.icon} />
            </div>
            <p class="sidebar-text">{props.icon.name}</p>
          </div>
    );
}

export default SidebarOptions;