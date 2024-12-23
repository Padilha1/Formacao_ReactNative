import { render, screen } from "@testing-library/react-native";
import { Day } from "@components/Day";
import clearDay from "@assets/clear_day.svg";
describe("Component: Day ", () => {
  it("should render component day", () => {
    render(
      <Day
        data={{
          day: "23/12",
          min: "30C",
          max: "34C",
          icon: clearDay,
          weather: "Ceu Limpo",
        }}
      />
    );
    expect(screen.getByText("23/12")).toBeTruthy();
  });
});
