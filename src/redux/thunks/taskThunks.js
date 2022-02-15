import { addTask, deleteTask, loadTasks } from "../actions/actionsCreator";

export const loadTasksThunk = async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL);
  const tasks = await response.json();

  if (!response.ok) return;
  dispatch(loadTasks(tasks));
};

export const deleteTaskThunk = (id) => async (dispatch) => {
  const response = await fetch(`${process.env.REACT_APP_API_URL}${id}`, {
    method: "delete",
  });

  if (!response.ok) return;
  dispatch(deleteTask(id));
};

export const addTaskThunk = (task) => async (dispatch) => {
  const response = await fetch(process.env.REACT_APP_API_URL, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  });
  const newTask = await response.json();
  dispatch(addTask(newTask));
};
