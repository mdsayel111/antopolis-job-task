import mongoose, { model, Schema } from "mongoose";
import { TAnimal } from "../animal/types";

// create animal schema
const animalSchema = new Schema<TAnimal>({
    name: { type: String, required: [true, "Animal Name is required!"] },
    category: { type: mongoose.Types.ObjectId, required: [true, "Category name is required!"], unique: true },
    img: { type: String, required: [true, "Image url is required!"] }
}, { timestamps: true });

// create animal model
const Animal = model<TAnimal>('Animal', animalSchema);

export default Animal



