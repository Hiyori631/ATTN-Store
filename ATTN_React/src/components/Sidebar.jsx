import React, { useState } from "react";
import logo from "../assets/images/Your paragraph text.png";
import transactionIcon from "../assets/images/1341083-200.png";
import inventoryIcon from "../assets/images/Untitled design.png";
import analyticsIcon from "../assets/images/1341083-200.png";
import dashboardIcon from "../assets/images/1341083-200.png";
import { Menu, X } from "lucide-react"; // optional icons for hamburger

function Navbar() {
  const [active, setActive] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false); // for mobile toggless

  const menuItems = [
    { name: "Dashboard", icon: dashboardIcon },
    { name: "Transaction", icon: transactionIcon },
    { name: "Inventory", icon: inventoryIcon },
    { name: "Analytics", icon: analyticsIcon },
  ];

  return (
    <>
      {/* Mobile Header */}
      <div className="lg:hidden flex items-center justify-between p-4 bg-white border-b border-gray-200 shadow-md fixed top-0 left-0 w-full z-50">
        <div className="flex items-center gap-3">
          <img src={logo} alt="ATTN Logo" className="w-10 h-10 object-contain" />
          <h1 className="text-xl font-bold text-[#F8961E]">ATTN</h1>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-[#F8961E]">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 h-screen w-72 bg-white border-r-2 border-[#F8961E] flex flex-col justify-between shadow-md transform transition-transform duration-300 z-40
        ${isOpen ? "translate-x-0" : "-translate-x-full"} 
        lg:translate-x-0`}
      >
        {/* Top Logo Section */}
        <div className="pt-20 lg:pt-0">
          <div className="hidden lg:flex items-center gap-3 p-6 border-b border-gray-200">
            <img src={logo} alt="ATTN Logo" className="w-14 h-14 object-contain" />
            <div>
              <h1 className="text-2xl font-bold text-[#F8961E] leading-tight">
                ATTN
              </h1>
              <p className="text-gray-700 text-sm">STORE</p>
            </div>
          </div>

          {/* Menu Title */}
          <p className="px-6 mt-6 text-sm text-gray-500 font-semibold tracking-wider">
            MENU
          </p>

          {/* Menu Items */}
          <ul className="mt-3 space-y-2 px-4">
            {menuItems.map((item) => (
              <li key={item.name}>
                <button
                  onClick={() => {
                    setActive(item.name);
                    setIsOpen(false); // auto-close on mobile
                  }}
                  className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-left ${
                    active === item.name
                      ? "bg-[#F8961E] text-white shadow-md"
                      : "hover:bg-[#F8961E]/10 text-gray-800"
                  }`}
                >
                  <img
                    src={item.icon}
                    alt={item.name}
                    className={`w-6 h-6 ${
                      active === item.name ? "filter brightness-0 invert" : ""
                    }`}
                  />
                  <span className="font-medium text-lg">{item.name}</span>
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Logout Button */}
        <div className="p-6 border-t border-gray-200">
          <button className="w-full bg-[#F8961E] hover:bg-[#e57e0c] text-white font-semibold py-2.5 rounded-lg shadow-md transition">
            Logout
          </button>
          <p className="text-center text-sm text-gray-500 mt-3">
            © 2025 ATTN Store
          </p>
        </div>
      </aside>

      {/* Overlay for mobile */}
      {isOpen && (
        <div
          className="fixed inset-0"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;
