import { Router } from "express";
import {
  GetProfile,
  GetUpdate,
  Login,
  Register,
} from "../controllers/user.controller";

const userRoute = Router();

userRoute
  .post("/register", Register)
  .post("/login", Login)
  .post("/getProfile/:id", GetProfile)
  .put("/getUpdate/:id", GetUpdate);

export { userRoute };
