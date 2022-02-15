import { deleteTask, loadTasks } from "../actions/actionsCreator";
import { taskReducer } from "./taskReducer";

describe("Given a tasks reducer", () => {
  describe("When it receives the current tasks and an action with type load and an array of tasks", () => {
    test("Then it should return a new state with the array of tasks inside the action", () => {
      const currentTasks = [];
      const expectedNewState = [{ name: "fregar el suelo" }];
      const tasks = [{ name: "fregar el suelo" }];
      const action = loadTasks(tasks);

      const newState = taskReducer(currentTasks, action);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it receives the current tasks and an action delete with id 1", () => {
    test("Then it should return a new state without the element with id 1", () => {
      const currentTasks = [
        { name: "fregar el suelo", id: 1 },
        { name: "alimentar a los gatos", id: 2 },
      ];
      const expectedNewState = [{ name: "alimentar a los gatos", id: 2 }];
      const action = deleteTask(1);

      const newState = taskReducer(currentTasks, action);

      expect(newState).toEqual(expectedNewState);
    });
  });

  describe("When it receives the current tasks and no action", () => {
    test("then it should return a new state equal to the previous one", () => {
      const currentTasks = [
        { name: "fregar el suelo", id: 1 },
        { name: "alimentar a los gatos", id: 2 },
      ];

      const newState = taskReducer(currentTasks);

      expect(newState).toEqual(currentTasks);
    });
  });
});
