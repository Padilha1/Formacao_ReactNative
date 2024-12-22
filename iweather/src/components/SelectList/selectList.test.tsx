import { render, screen, fireEvent } from "@testing-library/react-native";
import { SelectList } from "@components/SelectList";

describe("Component: SelectList", () => {
  it("should be returned city details selected", () => {
    const data = [
      { id: "1", name: "Campinas", latitude: 123, longitude: 12454 },
      { id: "2", name: "Campo grande", latitude: 4536, longitude: 2352 },
    ];

    const onPress = jest.fn();

    render(<SelectList data={data} onChange={() => {}} onPress={onPress} />);

    const selectedCity = screen.getByText(/campo/i);
    fireEvent.press(selectedCity);

    // expect(onPress).toHaveBeenCalledTimes(1); // chamou 1x
    // expect(onPress).toHaveBeenCalledWith(data[0]); //Receber primeira posicao do array
  });

  it("not should be show options when data props is empty", () => {
    render(<SelectList data={[]} onChange={() => {}} onPress={() => {}} />);

    const options = screen.getByTestId("options");
    expect(options.children).toHaveLength(0);
  });
});
