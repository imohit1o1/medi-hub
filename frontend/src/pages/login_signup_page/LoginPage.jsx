import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Helmet } from "react-helmet";
import Lottie from "react-lottie";
import animationData from "../../lottie-animation/loginAnimation.json"; // Replace with your Lottie animation file

function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check if the token exists in localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsAuthenticated(true);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = formData;
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        {
          email,
          password,
        }
      );
      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        setIsAuthenticated(true); // Update authentication status
        toast.success("Login successful");
        navigate("/dashboard");
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      console.error("Error logging in:", error);
      toast.error("Login failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false);
    toast.info("Logged out successfully");
    navigate("/");
  };

  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: animationData,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };

  return (
    <div
      className="flex h-screen"
      style={{ backgroundColor: "rgb(179, 218, 217)" }}
    >
      <Helmet>
        <script src="https://www.google.com/recaptcha/api.js"></script>
      </Helmet>
      <div className="w-1/2 flex justify-center items-center">
        <Lottie options={defaultOptions} height={400} width={400} />
      </div>
      <div className="w-1/2 flex flex-col justify-center items-center bg-white shadow-lg p-8">
        <div className="w-full max-w-md">
          <h1 className="text-3xl font-bold text-center mb-6">Welcome back</h1>
          <h2 className="text-2xl text-center mb-6">Login to your account</h2>
          <form
            className="flex flex-col"
            id="login-form"
            onSubmit={handleLogin}
          >
            <label htmlFor="email" className="mb-2">
              Email:
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleInputChange}
              id="email"
              required
              className="border border-gray-300 rounded-md mb-4 p-2"
            />
            <label htmlFor="password" className="mb-2">
              Password:
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleInputChange}
              id="password"
              required
              className="border border-gray-300 rounded-md mb-4 p-2"
            />
            <button
              className="g-recaptcha bg-main_theme text-white font-bold py-2 px-4 rounded-md mb-4"
              data-sitekey="your-site-key"
              data-action="login"
            >
              Login
            </button>
          </form>
          <div className="flex justify-between text-sm md:text-lg">
            <Link
              to="/signup"
              className="text-purple-600 hover:underline"
              style={{ color: "rgb(27, 120, 120)" }}
            >
              Create Account
            </Link>
            <Link
              to="/"
              className="text-purple-600 hover:underline"
              style={{ color: "rgb(27, 120, 120)" }}
            >
              Forgot Password?
            </Link>
          </div>
        </div>
      </div>

      {/* Conditional rendering for logged-in user's menu */}
      <div className="absolute top-0 right-0 p-4">
        {isAuthenticated ? (
          <div className="dropdown">
            <button className="dropdown-button">My Account</button>
            <div className="dropdown-content">
              <Link to="/profile">My Profile</Link>
              <Link to="/wishlist">Wishlist</Link>
              <button onClick={handleLogout}>Logout</button>
            </div>
          </div>
        ) : (
          <Link to="/login" className="login-button">Login</Link>
        )}
      </div>
    </div>
  );
}

export default LoginPage;
