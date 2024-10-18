import React, { useState } from "react";
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

    // You can use a ref to get the reCAPTCHA response if needed
    const recaptchaResponse = window.grecaptcha.getResponse();
    if (!recaptchaResponse) {
      toast.error("Please complete the reCAPTCHA");
      return;
    }

    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/user/login",
        {
          email,
          password,
          recaptchaResponse, // Send the reCAPTCHA response if required
        }
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);
        toast.success("Login successful");
        navigate("/dashboard");
      } else {
        toast.error("Login failed");
      }
    } catch (error) {
      const errorMessage = error.response?.data?.message || "Login failed";
      toast.error(errorMessage);
      console.error("Error logging in:", error);
    }
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
              type="submit" // Ensure the button is of type submit
              className="bg-main_theme text-white font-bold py-2 px-4 rounded-md mb-4"
            >
              Login
            </button>
            <div className="g-recaptcha" data-sitekey="your-site-key"></div> {/* Include reCAPTCHA here */}
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
    </div>
  );
}

export default LoginPage;
