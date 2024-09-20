import z from "zod";

// category validation schema
export const categoryValidationSchema = z.object({
  name: z.string({ required_error: "Category name requiered !" }),
});
