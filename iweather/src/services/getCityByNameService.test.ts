import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";
describe("API: GetCityByNameService", () => {
  it("should return city details", async () => {
    const data = {
      id: "1",
      name: "Sao Paulo",
      sys: { country: "BR" },
      coord: { lon: 23523, lat: 46346 },
    };
    jest.spyOn(api, "get").mockResolvedValue({
      data,
    });

    const response = await getCityByNameService("Sao Paulo");

    expect(response.length).toBeGreaterThan(0);
  });
});
