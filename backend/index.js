import dbConnection from "./src/db/dbConnection.js";
import { v2 as cloudinary } from 'cloudinary';
import app from "./app.js";

// Cloudinary configuration
cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME || 'your_default_cloud_name', // Add a default value or log an error if not set
    api_key: process.env.CLOUDINARY_API_KEY || 'your_default_api_key', // Same as above
    api_secret: process.env.CLOUDINARY_API_SECRET || 'your_default_api_secret' // Same as above
});

// Database connection configuration
dbConnection()
    .then(() => {
        const port = process.env.PORT || 8000;
        app.listen(port, (err) => {
            if (err) {
                console.error("Error starting server:", err);
            } else {
                console.log(`⚙️ Server is running at port: ${port}`);
            }
        });
    })
    .catch((err) => {
        console.error("MongoDB connection failed: ", err);
    });
