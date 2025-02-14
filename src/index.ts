import express from "express";
import bodyParser from "body-parser";
import cors from "cors";
import { userRoute } from "./routes/user.route";
import { users } from "./database/user.db";

const app = express();
const port = 4000;
const x = users;

// app.post("/user/register", (req, res) => {
//   try {
//     users.push(req.body);
//     res.status(201).json({ message: "success!" });
//   } catch (error) {
//     res.status(500).json({ message: "error", error });
//   }
// });

app.get(`/`, (req, res) => {
  res.send("hellll");
});

app.use(bodyParser.json());
app.use(`/user`, userRoute);

app.listen(port, () => {
  console.log(`Server running on port${port}`);
});
