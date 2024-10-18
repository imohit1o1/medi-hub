import dotenv from "dotenv";
import express from "express";
import cookieParser from "cookie-parser";
import { errorHandler } from "./src/utilis/ApiError.js";
import cors from "cors";

const app = express();

// dotenv configuration
dotenv.config({
  path: "./.env",
});

// Validate essential environment variables
if (!process.env.FRONTEND_URL || !process.env.DASHBOARD_URL) {
  console.error("Essential environment variables are missing.");
  process.exit(1); // Exit if essential variables are not set
}

// CORS middleware configuration connects frontend to backend
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ["GET", "POST", "DELETE", "PUT"],
    credentials: true,
  }),
);

app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Import routes
import userRouter from "./src/routes/user.routes.js";
import contactUsRouter from "./src/routes/contactus.routes.js";
import appointmentRouter from "./src/routes/appointment.routes.js";
import medicineRouter from "./src/routes/medicine.routes.js";
import cartRouter from "./src/routes/UserCart.routes.js"; // Changed to lowercase
import paymentRouter from "./src/routes/payment.routes.js"; // Changed to lowercase
import testimonialRouter from "./src/routes/testimonial.routes.js"; // Changed to lowercase

// Define the root route
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Routes declaration
app.use("/api/v1/user", userRouter);
app.use("/api/v1/message", contactUsRouter);
app.use("/api/v1/appointment", appointmentRouter);
app.use("/api/v1/medicines", medicineRouter);
app.use("/api/v1/medicines-cart", cartRouter);
app.use("/api/v1/payment", paymentRouter);
app.use("/api/v1/testimonial", testimonialRouter);

// Error middleware
app.use(errorHandler);

export default app;
