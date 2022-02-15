import { render, screen } from "@testing-library/react";
import { Form } from "./Form";

describe("Given a Form component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a text input", () => {
      render(<Form />);

      const textInput = screen.getByRole("textbox", { name: "" });

      expect(textInput).toBeInTheDocument();
    });
    test("Then it should render a button", () => {
      render(<Form />);

      const buttonInput = screen.getByRole("button", {
        name: "ADD TASK TO LIST",
      });

      expect(buttonInput).toBeInTheDocument();
    });
  });
});
