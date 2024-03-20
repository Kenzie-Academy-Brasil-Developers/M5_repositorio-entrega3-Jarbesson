import { Router } from "express";
import { CarControllers } from "../controllers/car.controllers";
import { validateBody } from "../middlewares/validateBody.middleware";
import { IsCarValid } from "../middlewares/IsCarCarValid";
import { carCreateSchema, carUpdateSchema} from "../schema/car.schema";


export const carRouter = Router();

const carControllers = new CarControllers();

carRouter.post("/",validateBody.execute(carCreateSchema), carControllers.create)
carRouter.get("/", carControllers.findMany)
carRouter.get("/:id", IsCarValid.execute, carControllers.findOne)
carRouter.patch("/:id", validateBody.execute(carUpdateSchema),IsCarValid.execute, carControllers.update)
carRouter.delete("/:id", IsCarValid.execute,carControllers.delete)