import React from "react";
import links from "../../data/links";
import Link from "./Link";

function NavLinks() {
  return (
    <div className="links">
      <ul>
        {links.map((link) => {
          return <Link key={link.id} name={link.name} />;
        })}
      </ul>
    </div>
  );
}

export default NavLinks;