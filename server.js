import express from "express";
import cors from "cors";
import connectDB from "./DB.js";
import UserRoutes from "./route/UserRoutes.js";
import ProductRoutes from "./route/ProductRoutes.js";
import dotenv from "dotenv";

dotenv.config();
connectDB();

const app = express();

app.use(cors({
  origin: "*",
  methods: "GET,PUT,POST,DELETE",
  credentials: true
}));

// ✅ REQUIRED FOR FORM-DATA TEXT FIELDS
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/", UserRoutes);
app.use("/", ProductRoutes);

app.listen(3000, () => {
  console.log("Server is running on port 3000");
});
