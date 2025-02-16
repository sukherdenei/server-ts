type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  category?: string;
  images?: string[]; // Assuming this is an array of image URLs
  createdAt?: Date;
  updatedAt?: Date;
};

export const products: Product[] = [
  {
    _id: "1",
    name: "Apple AirPods",
    description: "Which AirPods are right for you?",
    price: 400,
    category: "Wireless Earpods",
    images: ["image1.jpg", "image2.jpg"],
    createdAt: new Date(),
    updatedAt: new Date(),
  },
];
