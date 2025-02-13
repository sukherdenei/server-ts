import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
// import { Register, Login } from "./controllers/user.controller";
import { userRoute } from "./routes/user.route";

const app = express();
const port = 4000;

app.get(`/`, (req, res) => {
  res.send("hellll");
});

app.use(bodyParser.json());
app.use(`/user`, userRoute);
// app.post("/user/register", Register);
// app.post("/user/login", Login);

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});
