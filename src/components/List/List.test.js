import List from "./List";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../redux/store";

describe("Given a List component", () => {
  describe("When it receives an array of todos", () => {
    const fakeList = [
      { todo: "Fregar platos", id: 1 },
      { todo: "Cambiar la arena de los gatos", id: 2 },
      { todo: "Comprar comida para gatos", id: 3 },
      { todo: "Poner una lavadora", id: 4 },
      { todo: "Tender la ropa", id: 5 },
      { todo: "Fregar el suelo", id: 6 },
    ];
    test("Then it should render a list", () => {
      render(
        <Provider store={store}>
          <List apiList={fakeList} />
        </Provider>
      );

      const list = screen.getAllByRole("list");

      expect(list).not.toBeNull();
    });
  });
});
