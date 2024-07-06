import { render, screen } from "@testing-library/react";
import { act } from "react";
import { Body } from "../components/Body";
import MOCK_DATA from "../mocks/MockApiData.json";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

global.fetch = jest.fn(() => {
  return Promise.resolve({
    json: () => {
      return Promise.resolve(MOCK_DATA);
    },
  });
});
console.log(MOCK_DATA);
it("should render search buttton when page load", async () => {
  await act(async () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );
  });

  //   const searchBtn = screen.getByPlaceholderText("Find What u like");
  //   expect(searchBtn).toBeInTheDocument();
  //   screen.logTestingPlaygroundURL();
});
