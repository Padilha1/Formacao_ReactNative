import {
  getStorageCity,
  saveStorageCity,
  removeStorageCity,
} from "./cityStorage";
import { CityProps } from "@services/getCityByNameService";

const newCity: CityProps = {
  id: "1",
  name: "Sao Paulo",
  latitude: 35465,
  longitude: 356432,
};
describe("Storage: City Storage", () => {
  it("should be returned null when don`t have city storaged", async () => {
    const response = await getStorageCity();

    expect(response).toBeNull();
  });

  it("should return city storaged", async () => {
    await saveStorageCity(newCity);
    const response = await getStorageCity();

    expect(response).toEqual(newCity);
  });

  it("should remove city storaged", async () => {
    await saveStorageCity(newCity);
    await removeStorageCity();
    const response = await getStorageCity();

    expect(response).toBeNull();
  });
});
