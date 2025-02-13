import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import { userRoute } from "./";
import { register, login } from "./controllers/user.controller";

const app = express();
const port = 3000;

app.get(`/`, (req, res) => {
  res.send("hellll");
});

app.post("/user/register", register);
app.post("/user/login", login);

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});
