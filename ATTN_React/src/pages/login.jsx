import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/images/Your paragraph text.png";

export default function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  // ✅ Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("access");
    if (token) {
      navigate("/dashboard"); // already log.ged in, go to dashboard
    }
  }, [navigate]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setLoading(true);
    try {
      const response = await axios.post("http://127.0.0.1:8000/api/token/", {
        username,
        password,
      });
      localStorage.setItem("access", response.data.access);
      localStorage.setItem("refresh", response.data.refresh);
      navigate("/dashboard");
    } catch {
      setError("Invalid username or password");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row bg-white">
      {/* LEFT SIDE */}
      <div className="w-full md:w-[40%] bg-[#C53B09] flex flex-row md:flex-col items-center justify-center py-1 md:h-screen gap-4">
        <img
          src={Logo}
          alt="ATTN Logo"
          className="w-15 md:w-34 h-15 md:h-34 object-cover mb-4 rounded-2xl"
        />
        <h1 className="text-white text-2xl md:text-4xl font-extrabold tracking-wide text-center leading-tight">
          ATTN<br />STORE
        </h1>
      </div>

      {/* RIGHT SIDE */}
      <div className="w-full md:w-[60%] flex items-center justify-center py-26.5 md:h-screen bg-gradient-to-br from-[#fff8f6] via-[#fff3ef] to-[#ffe5da]">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-[#f3d3c6]">
          <h2 className="text-3xl font-semibold text-[#C53B09] text-center mb-2">
            Welcome Back 👋
          </h2>
          <p className="text-gray-500 text-center mb-8">
            Sign in to access your account
          </p>

          <form onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div>
              <label className="text-sm font-medium text-gray-700">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                required
                className="w-full mt-1 px-4 py-2 border border-[#d5b89c] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#C53B09]/30 focus:border-[#C53B09] transition-all"
              />
            </div>

            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="••••••••"
                required
                className="w-full mt-1 px-4 py-2 border border-[#d5b89c] rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-[#C53B09]/30 focus:border-[#C53B09] transition-all"
              />
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-[#C53B09] text-white py-2.5 rounded-lg font-semibold hover:bg-[#a23207] transition-all disabled:opacity-60"
            >
              {loading ? "Signing in..." : "Login"}
            </button>
          </form>

          {error && (
            <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
          )}

          <p className="text-center text-sm text-gray-600 mt-6">
            Don’t have an account?{" "}
            <a
              href="/register"
              className="text-[#C53B09] font-medium hover:underline"
            >
              Sign up
            </a>
          </p>
        </div>
      </div>
    </div>
  );
}
