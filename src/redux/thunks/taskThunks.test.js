import { deleteTaskThunk, loadTasksThunk } from "./taskThunks";

describe("Given a loadTaskThunks function", () => {
  describe("When it called", () => {
    test("Then it should dispatch a function", async () => {
      const dispatch = jest.fn();
      await loadTasksThunk(dispatch);
      expect(dispatch).toHaveBeenCalled();
    });
  });
});

describe("Given a deleteTasksThunks function", () => {
  describe("When it is called with a task with id '99'", () => {
    test("Then it should dispatch a function", async () => {
      const task = { name: "something 2", id: 29, status: false };

      const dispatch = jest.fn();
      const thunkCall = await deleteTaskThunk(task);
      await thunkCall(dispatch);

      expect(dispatch).not.toHaveBeenCalled();
    });
  });
});
