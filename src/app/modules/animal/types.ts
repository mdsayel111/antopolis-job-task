import mongoose from "mongoose";

// create TAnimal type
export type TAnimal = {
  _id: string;
  name: string;
  category: mongoose.ObjectId;
  img: string;
};
