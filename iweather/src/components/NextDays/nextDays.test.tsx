import { render, screen } from "@testing-library/react-native";
import { NextDays } from "@components/NextDays";

import clearDay from "@assets/clear_day.svg";
describe("Component: NextDays", () => {
  it("should render days", () => {
    render(
      <NextDays
        data={[
          {
            day: "23/12",
            min: "30C",
            max: "34C",
            icon: clearDay,
            weather: "Ceu Limpo",
          },
          {
            day: "24/12",
            min: "24C",
            max: "30C",
            icon: clearDay,
            weather: "Ceu Limpo",
          },
          {
            day: "25/12",
            min: "20C",
            max: "26C",
            icon: clearDay,
            weather: "Ceu Limpo",
          },
          {
            day: "26/12",
            min: "18C",
            max: "28C",
            icon: clearDay,
            weather: "Ceu Limpo",
          },
          {
            day: "27/12",
            min: "22C",
            max: "29C",
            icon: clearDay,
            weather: "Ceu Nublado",
          },
        ]}
      />
    );
    expect(screen.getByText("24/12")).toBeTruthy;
  });
});
