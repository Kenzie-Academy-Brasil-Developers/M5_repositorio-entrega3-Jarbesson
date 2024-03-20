import { TCar, TCarCreate } from "../interface/car.interface";
import { prisma } from "../database/prisma";

export class CarServices {
    public create = async (payload: TCarCreate): Promise<TCar> =>{
        const newCar = await prisma.car.create({
            data: payload
        })

        return newCar as TCar
    }

    public findMany = async (): Promise<TCar[]> => {
    const allCar = await prisma.car.findMany();

    return allCar as TCar[]
    }

    public findOne = async (carId: string): Promise<TCar> => {
        const findCar = await prisma.car.findFirst({
            where: {id: carId}
        })

        return findCar as TCar
    }

    public update = async (carId: string, payload: TCarCreate):Promise<TCar> => {
        const updateCar = await prisma.car.update({where: {id: carId}, data: payload})

        return updateCar as TCar
    }

    public delete = async (carId: string):Promise<void> => {
        await prisma.car.delete({where: {id: carId}})
    }

}
