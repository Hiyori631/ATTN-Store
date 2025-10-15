import React from "react";
import transactionIcon from "../assets/images/1341083-200.png";
import attnLogo from "../assets/images/Your paragraph text.png";


function Navbar() {
  return (
    <div className="drawer drawer-open">
      <input id="my-drawer-4" type="checkbox" className="drawer-toggle" />

      {/* Sidebar */}
      <div className="drawer-side overflow-visible ">
        <label
          htmlFor="my-drawer-4"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>

        {/* Main sidebar container */}
        <div className="w-80 bg-white border-r-2 border-[#F8961E] flex flex-col items-start h-screen overflow-y-auto p-4 shadow-lg">

          {/* Header / Logo */} 
            <li className="mb-10 flex items-center gap-3 ml-15">
              <img
                src={attnLogo}
                alt="ATTN Store Logo"
                className="w-18 h-18 mt-1 radius-custom object-contain"
              />
              <a
                href="/"
                className="text-3xl font-bold sidebar-fontcolor"
              >
                <a className="ml-2">ATTN</a><br /> STORE
              </a>
            </li>


          {/* Menu items */}
          <ul className="menu w-full grow">
            {/* Dashboard */}
            <li>
              <button
                className="tooltip tooltip-right flex items-center gap-3 ml-7"
                data-tip="Dashboard"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 my-1.5"
                >
                  <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                  <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                </svg>
                <span className="font-medium sidebar-fontcolor text-lg ml-1">Dashboard</span>
              </button>
            </li>

            {/* Transaction */}
           <li className="ml-7">
        <details className="group">
          <summary className="flex items-center gap-3 cursor-pointer list-none hover:bg-gray-100 p-2 rounded-lg">
            <img
              src={transactionIcon}
              alt="Transaction Icon"
              className="w-6 h-6 inline-block my-1.5"
            />
            <span className="font-medium sidebar-fontcolor text-lg">
              Transaction
            </span>
            {/* optional dropdown arrow icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-auto transition-transform duration-200 group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          {/* Dropdown Content */}
          <ul className="ml-9 mt-2 space-y-2 sidebar-fontcolor">
            <li>
              <a
                href="/transactions/sales"
                className="block py-1 hover:text-blue-600 hover:font-semibold"
              >
                Sales Transactions
              </a>
            </li>
            <li>
              <a
                href="/transactions/purchases"
                className="block py-1 hover:text-blue-600 hover:font-semibold"
              >
                Purchase Transactions
              </a>
            </li>
            <li>
              <a
                href="/transactions/reports"
                className="block py-1 hover:text-blue-600 hover:font-semibold"
              >
                Reports
              </a>
            </li>
          </ul>
        </details>
      </li>
       {/* Transaction */}
           <li className="ml-7">
        <details className="group">
          <summary className="flex items-center gap-3 cursor-pointer list-none hover:bg-gray-100 p-2 rounded-lg">
            <img
              src={transactionIcon}
              alt="Transaction Icon"
              className="w-6 h-6 inline-block my-1.5"
            />
            <span className="font-medium sidebar-fontcolor text-lg">
              Inventory
            </span>
            {/* optional dropdown arrow icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4 ml-auto transition-transform duration-200 group-open:rotate-180"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </summary>

          {/* Dropdown Content */}
          <ul className="ml-9 mt-2 space-y-2 sidebar-fontcolor">
            <li>
              <a
                href="/transactions/sales"
                className="block py-1 hover:text-blue-600 hover:font-semibold"
              >
                Sales Transactions
              </a>
            </li>
            <li>
              <a
                href="/transactions/purchases"
                className="block py-1 hover:text-blue-600 hover:font-semibold"
              >
                Purchase Transactions
              </a>
            </li>
            <li>
              <a
                href="/transactions/reports"
                className="block py-1 hover:text-blue-600 hover:font-semibold"
              >
                Reports
              </a>
            </li>
          </ul>
        </details>
      </li>


            {/* Settings */}
            <li>
              <button
                className="tooltip tooltip-right flex items-center gap-3"
                data-tip="Settings"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  strokeLinejoin="round"
                  strokeLinecap="round"
                  strokeWidth="2"
                  fill="none"
                  stroke="currentColor"
                  className="w-5 h-5 my-1.5"
                >
                  <path d="M20 7h-9"></path>
                  <path d="M14 17H5"></path>
                  <circle cx="17" cy="17" r="3"></circle>
                  <circle cx="7" cy="7" r="3"></circle>
                </svg>
                <span className="font-medium text-gray-700">Settings</span>
              </button>
            </li>
          </ul>

          {/* Toggle button (for future collapsible sidebar) */}
          <div className="m-2 tooltip tooltip-right" data-tip="Open / Close">
            <label
              htmlFor="my-drawer-4"
              className="btn btn-ghost btn-circle drawer-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2"
                fill="none"
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                <path d="M9 4v16"></path>
                <path d="M14 10l2 2l-2 2"></path>
              </svg>
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Navbar;
