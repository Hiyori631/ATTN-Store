  import { useState, useEffect } from "react";
  import Navbar from "./components/Sidebar";
  import Topbar from "./components/Topbar";
  import "./App.css";

  function App() {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false); // shared state

    const [message, setMessage] = useState("Loading...");

    useEffect(() => {
      fetch("http://127.0.0.1:8000/ATTN_Backend/web_desc/")
        .then((res) => {
          if (!res.ok) throw new Error("Network error");
          return res.json();
        })
        .then((data) => setMessage(JSON.stringify(data.recipes, null, 2)))
        .catch(() => setMessage("Failed to load recipes."));
    }, []);

    return (
      <div className="bg-gray-50 min-h-screen flex flex-col">
        

        {/* Layout container */}
          {/* Sidebar (fixed width on desktop) */}
          <div className="hidden lg:block fixed left-0 top-[4rem] h-[calc(100vh-4rem)] w-72 bg-white shadow-md border-r border-gray-100">
            <Navbar />
            
          </div>

          {/* Main Content */}

          
          <main
            className="
              flex-1 
              transition-all duration-300
              lg:ml-72    /* ensures content starts after sidebar */
              mt-0 lg:mt-0
            "
          >

            {/* Topbar */}
        <div className="sticky top-0bg-white shadow-sm">
          <Topbar />
        </div>
            
            <div className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10 
  ">
            

              {/* Stats Cards */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white border-l-4 border-[#F8961E] p-4 rounded-md shadow-sm">
                  <p className="text-sm text-gray-500">Top-Selling Product</p>
                  <h2 className="text-xl font-bold text-[#F8961E] mt-1">
                    Mighty Bond
                  </h2>
                </div>
                <div className="bg-white border-l-4 border-[#F8961E] p-4 rounded-md shadow-sm">
                  <p className="text-sm text-gray-500">Total Orders</p>
                  <h2 className="text-xl font-bold text-[#F8961E] mt-1">1234</h2>
                </div>
                <div className="bg-white border-l-4 border-[#F8961E] p-4 rounded-md shadow-sm">
                  <p className="text-sm text-gray-500">Total Sales</p>
                  <h2 className="text-xl font-bold text-[#F8961E] mt-1">₱1234</h2>
                </div>
              </div>

              {/* Analytics Box */}
              <div className="bg-white border border-[#F8961E]/30 rounded-lg p-6 shadow-sm">
                <h2 className="text-lg font-semibold text-gray-700 mb-2">
                  Analytics
                </h2>
                <div className="w-full h-60 sm:h-72 bg-gray-100 rounded-lg flex items-center justify-center text-gray-500 text-sm sm:text-base">
                  Analytics Chart Placeholder
                </div>
              </div>
            </div>
          </main>
      </div>
    );
  }

  export default App;
