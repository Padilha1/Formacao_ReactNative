import { renderHook, waitFor, act } from "@testing-library/react-native";
import { useCity } from "@hooks/useCity";
import { CityProvider } from "@contexts/CityContext";

describe("Context: City Context", () => {
  it("should change selected city", async () => {
    const { result } = renderHook(() => useCity(), { wrapper: CityProvider });

    await waitFor(() =>
      act(() =>
        result.current.handleChanceCity({
          id: "1",
          name: "Sao Paulo",
          latitude: 1245,
          longitude: 1234,
        })
      )
    );

    expect(result.current.city?.name).toBe("Sao Paulo");
  });
});
