import Header from "./Header";
import { render, screen } from "@testing-library/react";

describe("Header component", () => {
  test("renders header title", () => {
    render(<Header />);
    const titleElement = screen.getByText("GAME APP", { exact: true });
    expect(titleElement).toBeInTheDocument();
  });

  test("renders new game button", () => {
    render(<Header />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });
});
