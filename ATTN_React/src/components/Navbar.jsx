// src/components/Navbar.jsx\
import "../App.css";
import MyImage from "../assets/images/BG-Logo.png";


function Navbar() {
  return (
<div className="navbar bg-white shadow-sm h-20 ">
<div className="navbar-start justify-start lg:justify-center">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#7a3813]" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        <li><a>Item 1</a></li>
        <li>
          <a>Parent</a>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </li>
        <li><a>Item 3</a></li>
      </ul>
    </div>
    <div className="flex items-center gap-3">

      <div className="">

          <img src={MyImage} alt="Logo" className="w-17 h-20 mt-3" />

      </div>
  
  <a className="btn btn-ghost flex flex-col items-start m-0 p-0">
    <h5 className="text-xl heritage-text text-[#7a3813]">
ATTN STORE    </h5>
    <p className="text-[#B45309] text-[10px] text-left">
      From Nanay's Table to Tomorrow's Store
    </p>
  </a>
</div>


  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 text-[#7a3813]">
      <li><a>Home</a></li>
      <li><a>Origins</a></li>
      <li>
        <details>
          <summary className="text-[#7a3813]">Recipes</summary>
          <ul className="p-2">
            <li><a>Submenu 1</a></li>
            <li><a>Submenu 2</a></li>
          </ul>
        </details>
      </li>
      <li><a>Heritage</a></li>
      <li><a>Founder</a></li>
      <li><a>Admin</a></li>


    </ul>
  </div>
  
</div>

  )
}

export default Navbar;
