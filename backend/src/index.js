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

app.use(
  cors({
    origin: [
      "http://localhost:5173", 
      "https://my-travel-planner-app.vercel.app",
      "https://travel-planner-app-backend.vercel.app",
    ],
    methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
    credentials: true,
  })
);

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
