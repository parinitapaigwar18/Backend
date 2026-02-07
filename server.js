// import express from "express";
// import cors from "cors";
// import connectDB from "./DB.js";
// import UserRoutes from "./route/UserRoutes.js";
// import ProductRoutes from "./route/ProductRoutes.js";
// import dotenv from "dotenv";

// dotenv.config();
// connectDB();

// const app = express();

// app.use(cors({
//   origin: "*",
//   methods: "GET,PUT,POST,DELETE",
//   credentials: true
// }));

// // ✅ REQUIRED FOR FORM-DATA TEXT FIELDS
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/", UserRoutes);
// app.use("/", ProductRoutes);

// app.listen(3000, () => {
//   console.log("Server is running on port 3000");
// });

import express from "express";
import cors from "cors";
import connectDB from "./DB.js";
import UserRoutes from "./route/UserRoutes.js";
import ProductRoutes from "./route/ProductRoutes.js";
import dotenv from "dotenv";

dotenv.config();

// ⚠️ Avoid reconnecting DB on every request
let isConnected = false;
const dbConnect = async () => {
  if (!isConnected) {
    await connectDB();
    isConnected = true;
  }
};

const app = express();

// Middleware
app.use(cors({
  origin: "*",
  methods: ["GET", "PUT", "POST", "DELETE"],
  credentials: true,
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Ensure DB is connected before handling requests
app.use(async (req, res, next) => {
  await dbConnect();
  next();
});

// Routes
app.use("/", UserRoutes);
app.use("/", ProductRoutes);

// ❌ DO NOT use app.listen on Vercel
export default app;

