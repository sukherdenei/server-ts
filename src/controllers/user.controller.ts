import { Request, RequestHandler, Response } from "express";
import { users } from "../database/user.db";
export const Register = (req: Request, res: Response) => {
  const { name, email, password } = req.body;

  const findUserName = users.find((user) => user.name === name);
  if (findUserName) {
    res.send("User already exists");
    return;
  }

  const findUser = users.find((user) => user.email === email);
  if (findUser) {
    res.send("Email already exist");
    return;
  }

  const lasUser = users[users.length - 1];
  const newUserId = lasUser?._id ? Number(lasUser._id) + 1 : 1;

  const newUser = { _id: newUserId.toString(), name, email, password };
  users.push(newUser);
  res.send("User registered succesfully");
  return;
};

export const Login: RequestHandler = (request, response) => {
  const { email, password } = request.body;

  const checkUser = users.find((user) => user.email == email);
  if (!checkUser) {
    response.send("already used email address");
    return;
  }
  if (checkUser.password !== password) {
    response.send("Wrong password!");
    return;
  }
  response.send(`Login succesfully,${checkUser._id}`);

  if (checkUser && checkUser.password === password) {
    response.send("Хэрэглэгч та амжилттай нэвтэрлээ");
  } else {
    response.send("Амжилтгүй");
  }
};

export const GetProfile = (req: Request, res: Response) => {
  const { id } = req.params;
  const profile = users.find((user) => user._id === id);
  if (!profile) {
    res.send("not ofund");
  } else {
    res.send(profile);
  }
};

export const GetUpdate = (req: Request, res: Response) => {
  const { name, email, password } = req.body;
  const { id } = req.params;
  let findUser = users.find((user) => user._id === id);
  if (!findUser) {
    res.send("User not found");
  }
  const profileEdit = { ...findUser, name, email, password };
  res.send(profileEdit);
};

module.exports = {
  Register,
  Login,
  GetProfile,
  GetUpdate,
};
