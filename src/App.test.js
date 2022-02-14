import App from "./App";
import { render, screen } from "@testing-library/react";

describe("Given an App component", () => {
  describe("When its instantiated", () => {
    test("Then it should render a list", () => {
      render(<App />);

      const list = screen.getAllByRole("list");

      expect(list).not.toBeNull();
    });
  });
});
