import dotenv from 'dotenv';
import express from 'express';
import cookieParser from 'cookie-parser';
import cors from 'cors';

import { errorHandler } from './src/utilis/ApiError.js'; // Custom error handler

// Import all routes
import userRouter from './src/routes/user.routes.js';
import contactUsRouter from './src/routes/contactus.routes.js';
import appointmentRouter from './src/routes/appointment.routes.js';
import medicineRouter from './src/routes/medicine.routes.js';
import CartRouter from './src/routes/UserCart.routes.js';
import PaymentRouter from './src/routes/payment.routes.js';
import TestimonialRouter from './src/routes/testimonial.routes.js';

// Load environment variables
dotenv.config({ path: './.env' });

const app = express();

// Middleware configurations
// Setup CORS to allow requests from trusted origins, including credentials support
app.use(
  cors({
    origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
    methods: ['GET', 'POST', 'DELETE', 'PUT'],
    credentials: true,
  })
);

// Middleware for parsing cookies and request bodies
app.use(cookieParser());
app.use(express.json()); // Automatically parse JSON payloads
app.use(express.urlencoded({ extended: true })); // Parse URL-encoded data

// API route handlers
app.use('/api/v1/user', userRouter);
app.use('/api/v1/message', contactUsRouter);
app.use('/api/v1/appointment', appointmentRouter);
app.use('/api/v1/medicines', medicineRouter);
app.use('/api/v1/medicines-cart', CartRouter);
app.use('/api/v1/payment', PaymentRouter);
app.use('/api/v1/testimonial', TestimonialRouter);

// Default route (optional for base-level check)
app.get('/', (req, res) => {
  res.send('API is running successfully.');
});

// Error handling middleware for unified API error responses
app.use(errorHandler);

export default app;
