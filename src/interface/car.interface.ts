import { z } from "zod";
import { carCreateSchema, carSchema, carUpdateSchema } from "../schema/car.schema";

type TCar = z.infer<typeof carSchema>;

type TCarCreate = z.infer<typeof carCreateSchema>;

type TCarUpdate = z.infer<typeof carUpdateSchema>

export {TCar,TCarCreate, TCarUpdate};