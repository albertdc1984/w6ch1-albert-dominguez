import { combineReducers } from "redux";
import tasksReducer from "./taskReducer";

const rootReducer = combineReducers({
  taskList: tasksReducer,
});

export default rootReducer;
