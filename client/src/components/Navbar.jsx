import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mx-32">
      <nav className="flex flex-row	 justify-between  bg-slate-600 py-5">
        <div className="border "> Logo</div>
        <div className="flex flex-row items-center border gap-5">
          <Link className="font-extralight text-2xl" to="/?cat=design">
            design
          </Link>
          <Link className="font-light text-2xl" to="/?cat=cinema">
            cinema
          </Link>
          <Link className="font-thin text-2xl" to="/?cat=food">
            food
          </Link>
          <Link className="font-thin text-2xl" to="/?cat=technology">
            technology
          </Link>

          <div className="text-xl">Name</div>
          <div className="text-xl">Logout</div>
          <Link className="" to="/write">
            <div className="rounded-full p-3 bg-teal-800 hover:bg-white hover:outline hover:outline-1">
              Write
            </div>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
