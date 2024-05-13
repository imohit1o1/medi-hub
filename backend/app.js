import dotenv from "dotenv";

import express from "express"; import cookieParser from "cookie-parser";
import { errorHandler } from "./src/utilis/ApiError.js"
import cors from "cors";

const app = express();

// dotenv configuration
dotenv.config({
    path: './.env'
})

// cors middleware configuration connects frontend to backend
app.use(
    cors({
        origin: [process.env.FRONTEND_URL, process.env.DASHBOARD_URL],
        method: ["GET", "POST", "DELETE", "PUT"],
        credentials: true,
    })
);



app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));



// import routes
import userRouter from "./src/routes/user.routes.js";
import contactUsRouter from "./src/routes/contactus.routes.js";
import appointmentRouter from "./src/routes/appointment.routes.js";
import buymeidcineRouter from "./src/routes/medicine.routes.js";
import paymentRoute from "./src/routes/payment.routes.js";
import CartRouter from "./src/routes/UserCart.routes.js"


// routes declaration
app.use("/api/v1/user", userRouter);
app.use("/api/v1/message", contactUsRouter);
app.use("/api/v1/appointment", appointmentRouter);
app.use("/api/v1/BuyMedicines", buymeidcineRouter);
app.use("/api/v1/payment", paymentRoute);
app.use("/api/v1/medicines-cart",CartRouter)

// error middleware 
app.use(errorHandler);
export default app;
