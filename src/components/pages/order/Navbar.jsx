import React from "react";
import Logo from "../login/Logo";

import { PiUserCircleFill } from "react-icons/pi";
import { Link } from "react-router-dom";

const Navbar = ({name}) => {
  return (
    <div>
      <div>
        <Logo />
      </div>
      <div>
        <div>
            <span>Hey, {name}</span>
            <Link href="/"><button>Se déconnecter</button></Link>
        </div>
        <PiUserCircleFill className="inputIcon" />
      </div>
    </div>
  );
};

export default Navbar;
