import { Button } from "./Button";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

describe("Given a Button component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a button", () => {
      render(<Button text={"hola"} />);

      const buttonRendered = screen.getByRole("button", { name: "hola" });

      expect(buttonRendered).not.toBeNull();
    });
  });
  describe("When the button is clicked", () => {
    test("Then it should call a function", () => {
      const mockFunction = jest.fn();

      render(<Button actionOnClick={mockFunction} />);

      userEvent.click(screen.getByRole("button"));

      expect(mockFunction).toBeCalled();
    });
  });
});
