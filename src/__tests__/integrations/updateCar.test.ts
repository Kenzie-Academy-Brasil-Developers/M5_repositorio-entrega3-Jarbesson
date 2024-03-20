import { prisma } from "../../database/prisma"
import { carCreateBodyListMock, carCreateBodyMock, carUpdateBodyMock } from "../__mocks__/car.mocks"
import { request } from "../utils/request"

describe("Integration test: update car", () => {
    test("should be able to update car sucessfully", async () => {
        const car = await prisma.car.create({data: carCreateBodyMock})

        const data = await request
        .patch(`/cars/${car.id}`)
        .send(carUpdateBodyMock)
        .expect(200)
        .then((response) => response.body);

        const newCar = {...car, ...carUpdateBodyMock}

        expect(data).toStrictEqual(newCar);
    });
})