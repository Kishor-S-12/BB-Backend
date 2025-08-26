const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const { notFound, errorHandler } = require("./middleware/errorMiddleware");

// Load env variables
dotenv.config();

// Connect to DB
connectDB();

const app = express();

// Middleware
const corsOptions = {
  origin: "http://localhost:5173", // Frontend URL
  methods: "GET,POST,PUT,DELETE",
  credentials: true, // If you need cookies or auth headers
};

app.use(cors(corsOptions));

app.use(express.json());

// Routes
app.use("/api/matches", require("./routes/matchRoutes"));
app.use("/api/teams", require("./routes/teamRoutes"));
app.use("/api/players", require("./routes/playerRoutes"));

// Error Handling
app.use(notFound);
app.use(errorHandler);

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`🚀 Server running in ${process.env.NODE_ENV} mode on port ${PORT}`)
);
