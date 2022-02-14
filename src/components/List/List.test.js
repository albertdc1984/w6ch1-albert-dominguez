import List from "./List";
import { render, screen } from "@testing-library/react";

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
      render(<List apiList={fakeList} />);

      const list = screen.getAllByRole("list");

      expect(list).not.toBeNull();
    });
  });
});
