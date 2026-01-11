require("dotenv").config();
const express = require("express");
const cors = require("cors");
const connectDB = require("./database/db");

const errorHandler = require("./middleware/errorHandler");

const app = express();

const start = async () => {
    try {
        await connectDB(); // <-- block startup

        app.use(cors()); // allow all origins, safe for dev

        app.use(express.json());
        app.use("/api/products", require("./route/product.route"));
        app.use(errorHandler);

        const PORT = process.env.PORT || 3000;
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    } catch (err) {
        console.error("Application failed to start");
        process.exit(1); // <-- ONLY place this is acceptable
    }
};

start();
