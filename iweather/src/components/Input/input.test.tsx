import { render, screen } from "@testing-library/react-native";
import { Input } from "@components/Input";

describe("Component: Input", () => {
  it("should be rendered Input without Activity Indicator", () => {
    render(<Input />);

    const activityIndicator = screen.queryByTestId("activity_indicator");
    expect(activityIndicator).toBeNull();
  });
  it("should be rendered Input if loading prop is true", () => {
    render(<Input isLoading />);

    const activityIndicator = screen.getByTestId("activity_indicator");
    expect(activityIndicator).toBeTruthy();
  });
});
