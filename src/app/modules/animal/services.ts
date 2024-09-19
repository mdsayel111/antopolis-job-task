import AppError from "../../errors/app-error";
import Category from "../category/model";
import Animal from "./model";
import { TAnimal } from "./types";

// create create animal service
export const createAnimalService = (data: TAnimal) => {
    // find category from DB
    const isCategoryExist = Category.findById(data.category)

    // if category not exist
    if (!isCategoryExist) {
        throw new AppError(400, "Invalid category id!")
    }

    const result = Animal.create(data)

    return result
}