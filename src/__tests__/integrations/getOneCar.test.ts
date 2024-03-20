
import { prisma } from "../../database/prisma"

import { carCreateBodyMock } from "../__mocks__/car.mocks"
import { carDefaultExpects } from "../utils/carDefaultExpect";
import { request } from "../utils/request";

describe("Integration test: get one cars", () => {
    test("should be able to get one cars sucessfully", async () => {
        const firstCar = await prisma.car.create({data: carCreateBodyMock});
       
        const data = await request
        .get(`/cars/${firstCar.id}`)
        .expect(200).then(response => response.body);

        expect(data.id).toBeDefined()
        carDefaultExpects(data,carCreateBodyMock); 
    })
})
