import { getNextDays } from "./getNextDays";
// test == it
// test("should be returned next 5 days", () => {
//   //Executar o teste
//   const days = getNextDays();

//   expect(days.length).toBe(5);
// });

describe("get Next 5 Days", () => {
  test("should be returned next 5 days", () => {
    //Executar o teste
    const days = getNextDays();

    expect(days.length).toBe(5);
  });
});
