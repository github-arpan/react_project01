import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { Header } from "../components/Header";
import { BrowserRouter } from "react-router-dom";
import appStore from "../utils/appStore.js";
import "@testing-library/jest-dom";

it("Should render header compnent with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  const login = screen.getByRole("button", {
    name: /login/i,
  });
  expect(login).toBeInTheDocument();
});

it("Should render header compnent with login button", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );

  screen.logTestingPlaygroundURL();
});
