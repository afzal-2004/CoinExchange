import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";

import "../Components.css";

export const NavBar = () => {
  return (
    <>
      <nav className="  p-[1px] stricky mb-[25px] w-full ">
        <div className="NavBar">
          <h1 className="sm:text-[35px] text-[20px]"> Quantam Coin</h1>
          <ul className=" flex gap-4  sm:text-[18px] text-[15px] p-3 cursor-pointer">
            <li>
              <Link to={"/"}>Home</Link>
            </li>
            <li>
              <HashLink to={"#about"}>About</HashLink>
            </li>
            <li>
              <Link to={"/exchange"}>Exchange</Link>
            </li>

            <li>
              <Link to={"/coin"}>Coin</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};
