import { TCar, TCarCreate } from "../../interface/car.interface";

export const carDefaultExpects = (data: TCar, expecData: TCarCreate) => {
    expect(data.name).toBe(expecData.name);
    expect(data.description).toBe(expecData.description);
    expect(data.brand).toBe(expecData.brand);
    expect(data.year).toBe(expecData.year);
    expect(data.km).toBe(expecData.km);
}