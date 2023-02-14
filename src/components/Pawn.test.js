import Pawn from "./Pawn";
import { render, screen } from "@testing-library/react";

describe("Pawn component", () => {
  test("renders pawn", () => {
    render(<Pawn />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeInTheDocument();
  });

  test("pawn not clickable if player is machine", () => {
    render(<Pawn player="machine" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });

  test("pawn not clickable if player is human toDisable is true", () => {
    render(<Pawn player="human" toDisable={true} />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toBeDisabled();
  });

  test("pawn is azure if player if human", () => {
    render(<Pawn player="human" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("human");
  });

  test("pawn is yellow if player if machine", () => {
    render(<Pawn player="machine" />);
    const buttonElement = screen.getByRole("button");
    expect(buttonElement).toHaveClass("machine");
  });
});
