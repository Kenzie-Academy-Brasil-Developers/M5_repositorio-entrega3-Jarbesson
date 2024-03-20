import { number, z } from "zod";

export const carSchema = z.object({
    id: z.string(),
    name: z.string().min(1).max(255),
    description: z.string().min(1).max(255),
    brand: z.string().min(1).max(255),
    year: z.number(),
    km: z.number()
});

export const carCreateSchema = carSchema.omit({id: true});
export const carUpdateSchema = carSchema.partial();
