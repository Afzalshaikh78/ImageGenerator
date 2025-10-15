import express from "express";
import cors from "cors";
import "dotenv/config";
import connectDB from "./config/mongodb.js";
import imageRouter from "./routes/imageRoutes.js";
import userRouter from "./routes/userRoutes.js";

const port = process.env.PORT || 4000;
const app = express();

app.use(express.json());
const CLIENT_URL =
  process.env.CLIENT_URL || "https://imagegenerator-client-7izk.onrender.com";

// CORS configuration
const corsOptions = {
  origin: [
    CLIENT_URL,
    "http://localhost:5173", // Vite dev
    "http://localhost:3000", // Local testing
  ],
  methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
  allowedHeaders: [
    "Content-Type",
    "Authorization",
    "token", // Your custom header
  ],
  credentials: true,
  optionsSuccessStatus: 200,
};

// Apply CORS before routes
app.use(cors(corsOptions));

// Body parser middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
await connectDB();

app.use("/api/user", userRouter);
app.use("/api/image", imageRouter);
app.get("/", (req, res) => {
  res.send("API Working");
});

app.listen(port, () => console.log(`Server started on PORT:${port}`));
