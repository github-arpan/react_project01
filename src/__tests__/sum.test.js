import { sum } from "../basic/sum";

it("Sum function should calculate the value of two numbers", () => {
  const result = sum(2, 4);
  expect(result).toBe(6);
});
