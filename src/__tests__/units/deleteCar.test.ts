import { CarServices } from "../../services/car.service"
import { carMock } from "../__mocks__/car.mocks";

describe("Unit test: delete car", () => {
    test("create car should work correctly", async () => {
        const carServices = new CarServices();

        await carServices.delete(carMock.id)
    })
})