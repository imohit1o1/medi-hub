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

// Check necessary environment variables
const { FRONTEND_URL, DASHBOARD_URL } = process.env;
if (!FRONTEND_URL || !DASHBOARD_URL) {
  console.error("Error: FRONTEND_URL and DASHBOARD_URL must be defined in your .env file");
  process.exit(1); // Exit the process if URLs are not defined
}

// cors middleware configuration connects frontend to backend
app.use(
  cors({
    origin: [FRONTEND_URL, DASHBOARD_URL],
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
import CartRouter from "./src/routes/UserCart.routes.js";
import PaymentRouter from "./src/routes/payment.routes.js";
import TestimonialRouter from "./src/routes/testimonial.routes.js";

// Define the root route
app.get('/', (req, res) => {
  res.send('Welcome to the homepage!');
});

// Routes declaration
app.use("/api/v1/user", userRouter);
app.use("/api/v1/message", contactUsRouter);
app.use("/api/v1/appointment", appointmentRouter);
app.use("/api/v1/medicines", medicineRouter);
app.use("/api/v1/medicines-cart", CartRouter);
app.use("/api/v1/payment", PaymentRouter);
app.use("/api/v1/testimonial", TestimonialRouter);

// Error middleware
app.use(errorHandler);

export default app;
