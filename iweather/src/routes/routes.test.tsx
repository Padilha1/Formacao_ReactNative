import { mockWeatherAPIResponse } from "@__tests__/mocks/api/mockWeatherApiResponse";
import { act, render, screen, waitFor } from "@__tests__/utils/customRender";
import { saveStorageCity } from "@libs/asyncStorage/cityStorage";
import { Routes } from "@routes/index";
import { api } from "@services/api";

/**
 * se rodar o describe = ok
 * se rodar o it = nao ok ?????
 **/

describe("Routes", () => {
  it("should be rendered Search Screen when it doesn`t have city selected", async () => {
    render(<Routes />);

    const title = await waitFor(() => screen.findByText(/^escolha um local/i));
    expect(title).toBeTruthy();
  });
  it("should be rendered Dashboard Screen when city is selected", async () => {
    jest.spyOn(api, "get").mockResolvedValue({ data: mockWeatherAPIResponse });

    const city = {
      id: "1",
      name: "Sao Paulo",
      latitude: 1234,
      longitude: 2345,
    };
    await saveStorageCity(city);

    await act(() => waitFor(() => render(<Routes />)));

    const title = screen.getByText(city.name);
    expect(title).toBeTruthy();
  });
});
