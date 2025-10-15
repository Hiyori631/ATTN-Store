import React, { useState } from "react";
import logo from "../assets/images/Your paragraph text.png";
import transactionIcon from "../assets/images/1341083-200.png";
import inventoryIcon from "../assets/images/Untitled design.png";
import analyticsIcon from "../assets/images/1341083-200.png";
import dashboardIcon from "../assets/images/1341083-200.png";
import { Menu, X, ChevronDown } from "lucide-react"; // icons

function Navbar() {
  const [active, setActive] = useState("Dashboard");
  const [isOpen, setIsOpen] = useState(false); // mobile sidebar toggle
  const [openDropdown, setOpenDropdown] = useState(null); // which dropdown is open

  const handleItemClick = (name) => {
    setActive(name);
    setOpenDropdown(null);
    setIsOpen(false);
  };

  const toggleDropdown = (name) => {
    setOpenDropdown(openDropdown === name ? null : name);
  };

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
            {/* Dashboard */}
            <li>
              <button
                onClick={() => handleItemClick("Dashboard")}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-left ${
                  active === "Dashboard"
                    ? "bg-[#F8961E] text-white shadow-md"
                    : "hover:bg-[#F8961E]/10 text-gray-800"
                }`}
              >
                <img
                  src={dashboardIcon}
                  alt="Dashboard"
                  className={`w-6 h-6 ${
                    active === "Dashboard" ? "filter brightness-0 invert" : ""
                  }`}
                />
                <span className="font-medium text-lg">Dashboard</span>
              </button>
            </li>

            {/* Transaction Dropdown */}
            <li>
              <button
                onClick={() => toggleDropdown("Transaction")}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 text-left ${
                  active === "Transaction"
                    ? "bg-[#F8961E] text-white shadow-md"
                    : "hover:bg-[#F8961E]/10 text-gray-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={transactionIcon}
                    alt="Transaction"
                    className={`w-6 h-6 ${
                      openDropdown === "Transaction" ? "filter brightness-0 invert" : ""
                    }`}
                  />
                  <span className="font-medium text-lg">Transaction</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openDropdown === "Transaction" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "Transaction" && (
                <ul className="ml-10 mt-2 space-y-2 text-gray-700">
                  <li>
                    <button
                      onClick={() => handleItemClick("Sales Transactions")}
                      className="hover:text-[#F8961E] transition"
                    >
                      Sales Transactions
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleItemClick("Purchase Transactions")}
                      className="hover:text-[#F8961E] transition"
                    >
                      Purchase Transactions
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleItemClick("Reports")}
                      className="hover:text-[#F8961E] transition"
                    >
                      Reports
                    </button>
                  </li>
                </ul>
              )}
            </li>

            {/* Inventory Dropdown */}
            <li>
              <button
                onClick={() => toggleDropdown("Inventory")}
                className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 text-left ${
                  active === "Inventory"
                    ? "bg-[#F8961E] text-white shadow-md"
                    : "hover:bg-[#F8961E]/10 text-gray-800"
                }`}
              >
                <div className="flex items-center gap-3">
                  <img
                    src={inventoryIcon}
                    alt="Inventory"
                    className={`w-6 h-6 ${
                      openDropdown === "Inventory" ? "filter brightness-0 invert" : ""
                    }`}
                  />
                  <span className="font-medium text-lg">Inventory</span>
                </div>
                <ChevronDown
                  className={`w-5 h-5 transition-transform duration-200 ${
                    openDropdown === "Inventory" ? "rotate-180" : ""
                  }`}
                />
              </button>

              {openDropdown === "Inventory" && (
                <ul className="ml-10 mt-2 space-y-2 text-gray-700">
                  <li>
                    <button
                      onClick={() => handleItemClick("Product List")}
                      className="hover:text-[#F8961E] transition"
                    >
                      Product List
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => handleItemClick("Add Product")}
                      className="hover:text-[#F8961E] transition"
                    >
                      Add Product
                    </button>
                  </li>
                </ul>
              )}
            </li>

            {/* Analytics */}
            <li>
              <button
                onClick={() => handleItemClick("Analytics")}
                className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-left ${
                  active === "Analytics"
                    ? "bg-[#F8961E] text-white shadow-md"
                    : "hover:bg-[#F8961E]/10 text-gray-800"
                }`}
              >
                <img
                  src={analyticsIcon}
                  alt="Analytics"
                  className={`w-6 h-6 ${
                    active === "Analytics" ? "filter brightness-0 invert" : ""
                  }`}
                />
                <span className="font-medium text-lg">Analytics</span>
              </button>
            </li>
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

      {/* Overlay for mobile yeah*/}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-[1px]"
          onClick={() => setIsOpen(false)}
        ></div>
      )}
    </>
  );
}

export default Navbar;
