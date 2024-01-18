import React from "react";
import icons from "../../data/icons";
import Icon from "./Icon";

function SearchBox() {
  return (
    <div class="search-box">
      {icons.map((icon)=>{
        return icon.name==="SearchBox"?<Icon icon={icon} />:null;
      })}
      <input type="text" />
    </div>
  );
}

export default SearchBox;