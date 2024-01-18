import React from "react";
import Logo from "./Logo";
import NavLinks from "./NavLinks";

function Nav(){

    return (<header>
        <nav>
          <Logo />
          <NavLinks />
        </nav>
      </header>);
}

export default Nav;