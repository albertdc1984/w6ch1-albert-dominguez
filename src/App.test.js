import App from "./App";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "./redux/store";

describe("Given an App component", () => {
  describe("When its instantiated", () => {
    test("Then it should render a list", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );

      const list = screen.getAllByRole("list");

      expect(list).not.toBeNull();
    });

    test("Then it should render a heading", () => {
      render(
        <Provider store={store}>
          <App />
        </Provider>
      );
      const title = screen.getByRole("heading", { level: 1 });
      expect(title).not.toBeNull();
    });
  });
});
