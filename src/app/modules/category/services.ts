import Category from "./model";
import { TCategory } from "./types";

// create createCategory service
export const createCategoryService = async (data: TCategory) => {
    // insert category into DB
    const result = await Category.create(data)
    
    return result
}