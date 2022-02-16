import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";
import { Form } from "./Form";

describe("Given a Form component", () => {
  describe("When it's instantiated", () => {
    test("Then it should render a text input", () => {
      render(
        <Provider store={store}>
          <Form />
        </Provider>
      );

      const textInput = screen.getByRole("textbox", { id: "name" });

      expect(textInput).toBeInTheDocument();
    });
    test("Then it should render a button", () => {
      render(
        <Provider store={store}>
          <Form />
        </Provider>
      );

      const buttonInput = screen.getByRole("button", {
        name: "ADD TASK",
      });

      expect(buttonInput).toBeInTheDocument();
    });
  });
});
