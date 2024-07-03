import { render, screen } from "@testing-library/react";
import Contact from "../components/Contact";
import "@testing-library/jest-dom";

describe(" Contact us page test case", () => {
  it("should load contact us component", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");

    expect(heading).toBeInTheDocument();
  });

  it("Button should be there inside the component", () => {
    render(<Contact />);
    const Button = screen.getByText("Submit");
    expect(Button).toBeInTheDocument();
  });

  it("input should be there inside the component", () => {
    render(<Contact />);

    const inputboxs = screen.getAllByRole("textbox");

    expect(inputboxs.length).toBe(2);
  });
});
