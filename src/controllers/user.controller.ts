import { Request, RequestHandler, response, Response } from "express";
import { users } from "../database/user.db";

export const register: RequestHandler = (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const findUser = users.find((user) => user.email === email);
  const findUserName = users.find((user) => user.name === name);

  const lasUser = users[users.length - 1];
  const newUserId = lasUser?._id ? Number(lasUser._id) + 1 : 1;

  if (findUserName) {
    res.send("Email already exist");
    return;
  }

  const newUser = { _id: newUserId.toString(), name, email, password };
  users.push(newUser);
  res.send("User registered succesfully Хэрэглэгч амжилттай бүртгэгдлээ");
};

const login: RequestHandler = (request, response) => {
  const { name, password } = request.body;
  const checkUser = users.find((user) => user.name == name);
  if (checkUser && checkUser.password === password) {
    response.send("Хэрэглэгч та амжилттай нэвтэрлээ");
  } else {
    response.send("Амжилтгүй");
  }
};

const getProfile = (req: Request, res: Response) => {
  res.send(users);
};

module.exports = {
  register,
  login,
  getProfile,
};
