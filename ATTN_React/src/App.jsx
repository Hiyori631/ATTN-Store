import { useState, useEffect } from "react";
import Navbars from "./components/Navbar";
import MyImage from "./assets/images/BG-Hero.jpg";
import "./App.css";

function App() {
  const [message, setMessage] = useState("Loading message...");

  useEffect(() => {
  fetch("http://127.0.0.1:8000/ATTN_Backend/web_desc/")
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      // Access the "recipes" key instead of "message"
      setMessage(JSON.stringify(data.recipes, null, 2));
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
      setMessage("Failed to load recipes.");
    });
}, []);


  return (
    <div className="min-h-screen flex flex-col bg-gray-100">
    

      {/* Main content should expand to fill the rest of the page */}
      <main className="flex flex-1">
  {/* ✅ Sidebar (left side) */}
    <Navbars />


  {/* ✅ Main Content (right side) */}
  <div className="flex-1 flex flex-col items-center justify-center text-center">
    
  </div>
</main>

  
    </div>
  );
}

export default App;
