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
          <img src={logo} alt="ATTN Logo" className="w-10 h-10 object-contain rounded-xl" />
          <h1 className="text-xl font-bold text-[#F8961E]">ATTN</h1>
        </div>
        <button onClick={() => setIsOpen(!isOpen)} className="text-[#F8961E]">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Sidebars */}
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
    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-left transform ${
      active === "Dashboard"
        ? "bg-[#F8961E] text-white shadow-md scale-[1.02]"
        : "text-gray-800 hover:bg-gray-100 hover:scale-[1.02]"
    }`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      className={`w-6 h-6 transition-colors duration-200 ${
        active === "Dashboard" ? "text-white" : "text-gray-800"
      }`}
    >
      <path
        fill="currentColor"
        d="M13 9V3h8v6zM3 13V3h8v10zm10 8V11h8v10zM3 21v-6h8v6zm2-10h4V5H5zm10 8h4v-6h-4zm0-12h4V5h-4zM5 19h4v-2H5zm4-2"
      />
    </svg>
    <span className="font-medium text-lg">Dashboard</span>
  </button>
</li>

{/* Transaction */}
<li>
  <button
    onClick={() => {
      handleItemClick("Transaction");
      toggleDropdown("Transaction");
    }}
    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 text-left transform ${
      active === "Transaction"
        ? "bg-[#F8961E] text-white shadow-md scale-[1.02]"
        : "text-gray-800 hover:bg-gray-100 hover:scale-[1.02]"
    }`}
  >
    <div className="flex items-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`w-6 h-6 transition-colors duration-200 ${
          active === "Transaction" ? "text-white" : "text-gray-800"
        }`}
      >
        <path
          fill="currentColor"
          d="M10 5.5a4.5 4.5 0 0 1 6.5-4.032a4.5 4.5 0 1 1 0 8.064A4.5 4.5 0 0 1 10 5.5m8.25 2.488q.123.012.25.012a2.5 2.5 0 1 0-.25-4.988A4.5 4.5 0 0 1 19 5.5a4.5 4.5 0 0 1-.75 2.488M8.435 13.25a1.25 1.25 0 0 0-.885.364l-2.05 2.05V19.5h5.627l5.803-1.45l3.532-1.508a.555.555 0 0 0-.416-1.022l-.02.005L13.614 17H10v-2h3.125a.875.875 0 1 0 0-1.75zm7.552 1.152l3.552-.817a2.56 2.56 0 0 1 3.211 2.47a2.56 2.56 0 0 1-1.414 2.287l-.027.014l-3.74 1.595l-6.196 1.549H0v-7.25h4.086l2.052-2.052a3.25 3.25 0 0 1 2.3-.948h4.687a2.875 2.875 0 0 1 2.862 3.152M3.5 16.25H2v3.25h1.5z"
        />
      </svg>
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
          className={`transition ${
            active === "Sales Transactions"
              ? "text-[#F8961E] font-semibold"
              : "hover:text-[#F8961E]"
          }`}
        >
         Order Product
        </button>
      </li>
      <li>
        <button
          onClick={() => handleItemClick("Purchase Transactions")}
          className={`transition ${
            active === "Purchase Transactions"
              ? "text-[#F8961E] font-semibold"
              : "hover:text-[#F8961E]"
          }`}
        >
          Transaction List
        </button>
      </li>
      <li>
        <button
          onClick={() => handleItemClick("Reports")}
          className={`transition ${
            active === "Reports"
              ? "text-[#F8961E] font-semibold"
              : "hover:text-[#F8961E]"
          }`}
        >
          E-Wallet Transaction
        </button>
      </li>
    </ul>
  )}
</li>

{/* Inventory */}
<li>
  <button
    onClick={() => {
      handleItemClick("Inventory");
      toggleDropdown("Inventory");
    }}
    className={`w-full flex items-center justify-between p-3 rounded-lg transition-all duration-200 text-left transform ${
      active === "Inventory"
        ? "bg-[#F8961E] text-white shadow-md scale-[1.02]"
        : "text-gray-800 hover:bg-gray-100 hover:scale-[1.02]"
    }`}
  >
    <div className="flex items-center gap-3">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        className={`w-6 h-6 transition-colors duration-200 ${
          active === "Inventory" ? "text-white" : "text-gray-800"
        }`}
      >
        <path
          fill="currentColor"
          d="M5 22q-.825 0-1.412-.587T3 20V8.725q-.45-.275-.725-.712T2 7V4q0-.825.588-1.412T4 2h16q.825 0 1.413.588T22 4v3q0 .575-.275 1.013T21 8.724V20q0 .825-.587 1.413T19 22zM5 9v11h14V9zM4 7h16V4H4zm5 7h6v-2H9zm3 .5"
        />
      </svg>
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
          className={`transition ${
            active === "Product List"
              ? "text-[#F8961E] font-semibold"
              : "hover:text-[#F8961E]"
          }`}
        >
          Product List
        </button>
      </li>
      <li>
        <button
          onClick={() => handleItemClick("Add Product")}
          className={`transition ${
            active === "Add Product"
              ? "text-[#F8961E] font-semibold"
              : "hover:text-[#F8961E]"
          }`}
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
    className={`w-full flex items-center gap-3 p-3 rounded-lg transition-all duration-200 text-left transform ${
      active === "Analytics"
        ? "bg-[#F8961E] text-white shadow-md scale-[1.02]"
        : "text-gray-800 hover:bg-gray-100 hover:scale-[1.02]"
    }`}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 32 32"
      className={`w-6 h-6 transition-colors duration-200 ${
        active === "Analytics" ? "text-white" : "text-gray-800"
      }`}
    >
      <path fill="currentColor" d="M4 2H2v26a2 2 0 0 0 2 2h26v-2H4Z" />
      <path
        fill="currentColor"
        d="M30 9h-7v2h3.59L19 18.59l-4.29-4.3a1 1 0 0 0-1.42 0L6 21.59L7.41 23L14 16.41l4.29 4.3a1 1 0 0 0 1.42 0l8.29-8.3V16h2Z"
      />
    </svg>
    <span className="font-medium text-lg">Analytics</span>
  </button>
</li>


          </ul>
        </div>

        {/* Logout Button */}
        <div className="p-6 border-t border-gray-200">
<button
  className="w-full flex items-center justify-center gap-2 border-2 border-[#F8961E] text-[#F8961E] bg-white font-semibold py-2.5 rounded-lg shadow-md transition-transform duration-150 hover:bg-[#F8961E] hover:text-white active:scale-95"
>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 512 512"
    className="w-5 h-5 fill-current"
  >
    <path d="M160 96c17.7 0 32-14.3 32-32s-14.3-32-32-32L96 32C43 32 0 75 0 128L0 384c0 53 43 96 96 96l64 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-64 0c-17.7 0-32-14.3-32-32l0-256c0-17.7 14.3-32 32-32l64 0zM502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 192 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l210.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"/>
  </svg>
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
