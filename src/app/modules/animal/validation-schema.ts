import { z } from 'zod';

// create animal validation schema
export const animalValidationSchema = z.object({
    name: z.string({ required_error: "Animal name is required!" }),
    category: z.string({ required_error: "Category name is required!" }),
    img: z.string({ required_error: "Image url is required!" })
});
