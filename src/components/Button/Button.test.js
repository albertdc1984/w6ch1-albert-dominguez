import { Button } from "./Button";
import { render, screen } from "@testing-library/react";

describe("Given a Button component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a button", () => {
      render(<Button text={"hola"} />);

      const buttonRendered = screen.getByRole("button", { name: "hola" });

      expect(buttonRendered).not.toBeNull();
    });
  });
});
