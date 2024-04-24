import * as React from "react";
import { Link, NavLink } from "react-router-dom";
import { Button } from "@nextui-org/button";
import { styles } from "../../styles/styles";
import { navLinks, navLinksAdmin } from "../../constants";
import { useState } from "react";


function Navbar({CurrentUser , setCurrentPage}) {

  const [navLink , setNavlink] = useState(CurrentUser=='Admin'?navLinksAdmin : navLinks)


  return (
    <nav
      className={`${styles.paddingX} w-full items-center mona py-5  top-0 z-20 dark`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">

        <Link to="/"  className="flex items-center gap-2"
          onClick={() => {
            // setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <p className="text-white text-[18px] font-bold cursor-pointer flex ">
             Enlocs .Co&nbsp;
             <span className="sm:block hidden">Foundation</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex gap-10 flex-row ml-[2rem] my-2  mt-[13.5px]">
          {navLink.map((nav) => (
            <li key={nav.id}  className={`${"text-white"} hover:text-white text-[18px]  cursor-pointer li-width`}  >
              <NavLink to={nav.direction} onClick={ async()=>{await setCurrentPage(nav.id)}}>{nav.title}</NavLink>
            </li>
          ))}
        </ul>

        <ul className="list-none flex-row flex-wrap">
          <p className="text-white dark pr-5 cursor-pointer">Login</p>
          <Button className="rounded-[2rem] px-10 bg-btn ">Register</Button>
        </ul>
       
       
      </div>
    </nav>
  );
}

export default Navbar;
