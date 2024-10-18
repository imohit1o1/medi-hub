import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import { errorHandler } from "./src/utilis/ApiError.js";

// Initialize the Express app
const app = express();

// Load environment variables from .env file
dotenv.config({
  path: "./.env",
});

// Configure CORS to allow frontend connections
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  })
);

// Middleware to parse cookies and request bodies
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
import userRouter from "./src/routes/user.routes.js";
import contactUsRouter from "./src/routes/contactus.routes.js";
import appointmentRouter from "./src/routes/appointment.routes.js";
import medicineRouter from "./src/routes/medicine.routes.js";
import cartRouter from "./src/routes/userCart.routes.js"; // Consistent naming
import paymentRouter from "./src/routes/payment.routes.js"; // Consistent naming
import testimonialRouter from "./src/routes/testimonial.routes.js"; // Consistent naming

// Define API routes
app.use("/api/v1/user", userRouter);
app.use("/api/v1/message", contactUsRouter);
app.use("/api/v1/appointment", appointmentRouter);
app.use("/api/v1/medicines", medicineRouter);
app.use("/api/v1/medicines-cart", cartRouter);
app.use("/api/v1/payment", paymentRouter);
app.use("/api/v1/testimonial", testimonialRouter);

// Error handling middleware
app.use(errorHandler);

// Export the app
export default app;
