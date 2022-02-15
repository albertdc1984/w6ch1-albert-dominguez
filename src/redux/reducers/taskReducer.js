import { actionTypes } from "../actions/actionTypes";

export const taskReducer = (tasks = [], action = {}) => {
  let newTasks;

  switch (action.type) {
    case actionTypes.loadTasks:
      newTasks = action.tasks;
      break;

    case actionTypes.deleteTask:
      newTasks = tasks.filter((task) => action.id !== task.id);
      break;
    default:
      newTasks = [...tasks];
      break;
  }

  return newTasks;
};
