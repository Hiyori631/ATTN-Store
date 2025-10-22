import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import Topbar from "./components/Topbar";
import PrivateRoute from "./utility/PrivateRoute";
import Login from "./pages/login";
import Dashboard from "./pages/dashboard";
import "./App.css";

function App() {
  return (
    <Router>
      <Routes>
        {/* Public route */}
        <Route path="/" element={<Login />} />

        {/* Protected route with Sidebar and. Topbar */}
        <Route
          path="/dashboard"
          element={
            <PrivateRoute>
              <div className="bg-gray-50 min-h-screen flex flex-col">
                {/* Sidebar */}
                <div className="hidden lg:block fixed left-0 top-[4rem] h-[calc(100vh-4rem)] w-72 bg-white shadow-md border-r border-gray-100">
                  <Sidebar />
                </div>

                {/* Main Content Area */}
                <main
                  className="
                    flex-1 
                    transition-all duration-300
                    lg:ml-72
                  "
                >
                  {/* Topbar */}
                  <div className="sticky top-0 bg-white shadow-sm z-50">
                    <Topbar />
                  </div>

                  {/* Page content (Dashboard) */}
                  <div className="flex flex-col gap-6 p-6 sm:p-8 lg:p-10">
                    <Dashboard />
                  </div>
                </main>
              </div>
            </PrivateRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
