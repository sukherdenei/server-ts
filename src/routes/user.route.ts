import { Router } from "express";
import { Register } from "../controllers/user.controller";

const userRoute = Router();

userRoute.post("/regiser", Register);

export { userRoute };
