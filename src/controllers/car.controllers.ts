import { Request, Response } from "express";
import { CarServices } from "../services/car.service";


export class CarControllers{

    public create = async (req: Request, res: Response):Promise<Response> => {
        const carServices = new CarServices();
        const body = req.body;

        const newCar = await carServices.create(body);
        return res.status(201).json(newCar)
    }

    public findMany = async (_: Request, res: Response):Promise<Response> => {
        const carServices = new CarServices();
        const allCar = await carServices.findMany()

        return res.status(200).json(allCar)

    }

    public findOne = async (req: Request, res: Response):Promise<Response> => {
        const carServices = new CarServices();
        const id = req.params.id;

        const car = await carServices.findOne(id)
        return res.status(200).json(car)

    }

    public update = async (req: Request, res: Response):Promise<Response> => {
        const carServices = new CarServices();
        const params = req.params.id;
        const body = req.body;

        const car = await carServices.update(params,body);
        return res.status(200).json(car);
    }

    public delete = async (req: Request, res: Response):Promise<Response> => {
        const carServices = new CarServices();
        const params = req.params.id;

        const car = await carServices.delete(params);
        return res.status(204).json(car)
    }

}
