import { CarServices } from "../../services/car.service";
import { carListMock } from "../__mocks__/car.mocks"
import { prismaMock } from "../__mocks__/prisma"
import { carDefaultExpects } from "../utils/carDefaultExpect";

describe("Unit test: get many car", () =>{
    test("get many car should work correctly", async () => {
        prismaMock.car.findMany.mockResolvedValue(carListMock);

        const carServices = new CarServices();

        const data = await carServices.findMany();

        expect(data).toHaveLength(carListMock.length);
        carDefaultExpects(data[0], carListMock[0]);
        carDefaultExpects(data[1], carListMock[1]);
    })
})