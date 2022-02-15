import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Button } from "./components/Button/Button";
import List from "./components/List/List";
import { loadTasksThunk } from "./redux/thunks/taskThunks";
import { deleteTaskThunk } from "./redux/thunks/taskThunks";

function App() {
  const taskList = useSelector((state) => state.taskList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTasksThunk);
  }, [dispatch]);

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <Button text="REMOVE SELECTED" />
      <List apiList={taskList} />
      <Button text="MODIFY/UPDATE TASK" />
    </div>
  );
}

export default App;
