import express from "express"
import { GetDashboard, GetUser, RegisterUser } from "../controller/UserController.js"
import { LoginUser } from "../controller/UserController.js";
// import { protect } from "../midleware/authMidleware.js";



const router = express.Router()
router.post("/register", RegisterUser);
router.post("/login", LoginUser );
router.get("/user", GetUser);
router.get("/dashboard/:userId", GetDashboard);
export default router