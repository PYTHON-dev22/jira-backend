// Express app setup — middleware and routes are registered here
const express = require("express");
const cors = require("cors");

const authRoutes = require("./src/routes/authRoutes");
const userRoutes = require("./src/routes/userRoutes");
const projectRoutes = require("./src/routes/projectRoutes");
const issueRoutes = require("./src/routes/issueRoutes");
const { errorHandler } = require("./src/middleware/errorMiddleware");

const app = express();

app.use(cors());
app.use(express.json());

// Routes are declared by burhan
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/projects", projectRoutes);
app.use("/api/issues", issueRoutes);

// Global error handler (must be last)
app.use(errorHandler);

module.exports = app;
