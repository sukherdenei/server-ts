import { Router } from "express";
import { Login, Register } from "../controllers/user.controller";

const userRoute = Router();

userRoute.post("/regiser", Register).post("/login", Login);

export { userRoute };
