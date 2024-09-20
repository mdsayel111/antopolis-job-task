import { model, Schema } from "mongoose";
import { TCategory } from "./types";

// create category schema
const categorySchema = new Schema<TCategory>(
  {
    name: {
      type: String,
      required: [true, "Category Name is required!"],
      unique: true,
    },
  },
  { timestamps: true },
);

// create category model
const Category = model<TCategory>("Category", categorySchema);

export default Category;
