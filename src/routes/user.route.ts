import { Router } from "express";
import {
  GetProfile,
  GetUpdate,
  Login,
  Register,
} from "../controllers/user.controller";
import {
  CreateANewProduct,
  Delete,
  getAllProduct,
  getASingleProductById,
  updateAProductById,
} from "../controllers/product.controller";

const userRoute = Router();

userRoute
  .post("/register", Register)
  .post("/login", Login)
  .post("/getProfile/:id", GetProfile)
  .put("/getUpdate/:id", GetUpdate)
  .post("/ProductNew", CreateANewProduct)
  .get("/ProductAll", getAllProduct)
  .get("/ProductId/:id", getASingleProductById)
  .put("ProductEdit", updateAProductById)
  .delete("/productDelete", Delete);
export { userRoute };
