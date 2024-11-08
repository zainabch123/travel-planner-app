// Load our .env file
import { config } from "dotenv";
config();

// Import express and cors
import express from "express";
import cors from "cors";

// Set up express
const app = express();
app.disable("x-powered-by");
// app.use(cors());

// CORS Configuration
const allowedOrigins = [
  "http://localhost:5173", // Local development
  "https://my-travel-planner-app.vercel.app", // Production
  "https://travel-planner-app-backend.vercel.app", // Backend (if it's used directly)
  // Add any other production domains here if needed
];

app.use((req, res, next) => {
  const origin = req.headers.origin;
  
  // Check if the origin of the request is in the allowedOrigins array
  if (allowedOrigins.includes(origin)) {
    res.setHeader("Access-Control-Allow-Origin", origin); // Allow the origin if it's in the list
  }
  
  // Set common CORS headers
  res.setHeader("Access-Control-Allow-Methods", "GET,HEAD,PUT,PATCH,POST,DELETE");
  res.setHeader("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept, Authorization");
  res.setHeader("Access-Control-Allow-Credentials", "true");

  next();
});


// Tell express to use a JSON parser middleware
app.use(express.json());
// Tell express to use a URL Encoding middleware
app.use(express.urlencoded({ extended: true }));

//Add routers below:
import userRouter from "./routes/user.js";
app.use("/user", userRouter);

import tripsRouter from "./routes/trips.js";
app.use("/trips", tripsRouter);

import tripAdvisorApiRouter from "./routes/api.js";
app.use("/api", tripAdvisorApiRouter);


// Set up a default "catch all" route to use when someone visits a route
// that we haven't built
app.get("*", (req, res) => {
  res.json({ ok: true });
});

// Start our API server
const port = process.env.VITE_PORT || 3000;
app.listen(port, () => {
  console.log(`\n Server is running on http://localhost:${port}\n`);
});
