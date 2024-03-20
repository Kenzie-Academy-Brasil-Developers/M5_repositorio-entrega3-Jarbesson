
import { request } from "../utils/request"
import { carCreateBodyMock } from "../__mocks__/car.mocks"
import { carDefaultExpects } from "../utils/carDefaultExpect"

describe("Integrartion test: create car", () => {
    test("should be able to create a car sucessfully", async () => {
        const data = await request.post("/cars").send(carCreateBodyMock).expect(201).then((response => response.body));
        
        expect(data.id).toBeDefined();
        carDefaultExpects(data, carCreateBodyMock)
    })
})