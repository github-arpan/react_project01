import { render } from "@testing-library/react";
import { Body } from "../components/Body";
import MOCK_DATA from "../mocks/MockApiData.json";
import { BrowserRouter } from "react-router-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});

it("should render search buttton when page load", () => {
  render(
    <BrowserRouter>
      <Body />
    </BrowserRouter>
  );
});
