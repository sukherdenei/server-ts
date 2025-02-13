type User = {
  _id: string;
  name: string;
  email: string;
  password: string;
  roles?: string;
};

export const users: User[] = [
  {
    _id: "1",
    name: "Luka",
    email: "lukadoncic@gmail.com",
    password: "pass123",
    roles: "customer",
  },
];
