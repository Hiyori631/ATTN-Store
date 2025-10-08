import { useState, useEffect } from "react";
import Navbar from "./components/Navbar";
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
      {/* Navbar always at the top */}
      <Navbar />

      {/* Main content should expand to fill the rest of the page */}
      <main className="flex-1 flex flex-col items-center justify-center text-center">
        <div
          className="w-full h-170 sm:h-170 md:h-170 bg-cover bg-center flex flex-col items-center justify-center text-center"
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${MyImage})`,
          }}
        >
          <h1 className="heritage-text text-white text-3xl sm:text-4xl md:text-[72px] font-bold drop-shadow-lg">
ATTN          </h1>
          <h1 className="heritage-text text-white text-3xl sm:text-4xl md:text-[72px] font-bold drop-shadow-lg">
            STORE HEY
          </h1>

          {/* ✅ Dynamic message from Django */}
          <h6 className="text-white text-base sm:text-lg md:text-sm max-w-3xl text-center mx-auto">
            {message}
          </h6>

          {/* Buttons */}
          <div className="flex space-x-4 mt-4">
            <button className="btn border-none bg-[#D97706] text-white hover:bg-orange-700 rounded-full">
              Read My Story
            </button>
            <button className="btn border-white btn-outline text-white">
              Learn More
            </button>
          </div>
        </div>
      </main>

      {/* Footer at the bottom */}
      <footer className="bg-gray-900 text-white py-4 text-center">
        © 2025 MyApp. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
