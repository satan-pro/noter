import React from "react";
import links from "../data/links";
import Link from "./Link";

function NavLinks() {
  return (
    <div class="links">
      <ul>
        {links.map((link) => {
          return <Link key={link.id} name={link.name} />;
        })}
      </ul>
    </div>
  );
}

export default NavLinks;