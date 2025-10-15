// Copyright 2025 PREM
//
// Licensed under the Apache License, Version 2.0 (the "License");
// you may not use this file except in compliance with the License.
// You may obtain a copy of the License at
//
// https://www.apache.org/licenses/LICENSE-2.0
//
// Unless required by applicable law or agreed to in writing, software
// distributed under the License is distributed on an "AS IS" BASIS,
// WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
// See the License for the specific language governing permissions and
// limitations under the License.

import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import imageRouter from "./routes/imageRoutes.js";
import userRouter from "./routes/userRoutes.js";

const port = process.env.PORT || 4000;
const app = express();

// Define allowed origins for production and development
const allowedOrigins = [
  "https://imagegenerator-client-7izk.onrender.com", // Your production frontend
  "http://localhost:3000", // Local development
  "http://localhost:5173", // Vite dev server
  "http://localhost:5174", // Alternative Vite port
  "https://localhost:5173", // HTTPS local (if needed)
];

// CORS configuration to handle custom headers
const corsOptions = {
  origin: function (origin, callback) {
    // Allow requests with no origin (mobile apps, Postman, etc.)
    if (!origin) return callback(null, true);

    if (allowedOrigins.includes(origin)) {
      return callback(null, true);
    } else {
      return callback(new Error("Not allowed by CORS"));
    }
  },
  credentials: true,
  methods: ["GET", "POST", "PUT", "DELETE", "PATCH", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "token", // Your custom token header
    "X-Requested-With",
    "Accept",
    "Origin",
  ],
  optionsSuccessStatus: 200, // For legacy browser support
};

// Apply CORS middleware BEFORE other middleware
app.use(cors(corsOptions));

// Handle preflight OPTIONS requests explicitly
app.options("*", cors(corsOptions));
app.use((req, res, next) => {
  console.log(`${req.method} ${req.url} - Origin: ${req.headers.origin}`);
  next();
});

// Body parser middleware
app.use(express.json());

// Connect to MongoDB
await connectDB();

// API Routes
app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);

// Basic route
app.get("/", (req, res) => {
  res.send("API Working");
});

// Global error handler for CORS
app.use((err, req, res, next) => {
  if (err.message === "Not allowed by CORS") {
    return res.status(403).json({
      success: false,
      message: "CORS: Origin not allowed",
    });
  }
  next(err);
});

// Start server
app.listen(port, () => console.log(`Server started on PORT:${port}`));
