import { useState } from "react";
import { Bell, User, ChevronDown } from "lucide-react";

function Topbar() {
  const [isFocused, setIsFocused] = useState(false);

  return (
    <div className="h-16 bg-white shadow-md flex items-center justify-between px-6 top-0 left-0 z-30 transition-all duration-300">
      {/* Left Section (Title / Logo) */}
      <h1 className="text-2xl font-bold text-[#4D1C0A]">DASHBOARD</h1>

      {/* Right Section (Notificationss + User Info) */}
      <div className="flex items-center gap-6">
        {/* Notification Icon */}
        <button className="relative p-2 rounded-full border border-[#4D1C0A] text-[#4D1C0A] hover:bg-[#4D1C0A]/10 transition">
          <Bell size={22} />
          {/* Notification dot */}
          <span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full"></span>
        </button>

        {/* User Info */}
        <div className="flex items-center gap-2 cursor-pointer">
          <div className="p-2 border border-[#4D1C0A] rounded-full text-[#4D1C0A]">
            <User size={22} />
          </div>
          <span className="text-[#4D1C0A] font-medium">Mushorf</span>
          <ChevronDown size={18} className="text-[#4D1C0A]" />
        </div>
      </div>
    </div>
  );
}

export default Topbar;
