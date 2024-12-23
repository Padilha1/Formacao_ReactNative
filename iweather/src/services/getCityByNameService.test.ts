import { mockCityApiReponse } from "@__tests__/mocks/api/mockCityApiResponse";
import { api } from "./api";
import { getCityByNameService } from "./getCityByNameService";
describe("API: GetCityByNameService", () => {
  it("should return city details", async () => {
    jest.spyOn(api, "get").mockResolvedValue({
      data: mockCityApiReponse,
    });

    const response = await getCityByNameService("Sao Paulo");

    expect(response.length).toBeGreaterThan(0);
  });
});
