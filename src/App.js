import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import List from "./components/List/List";
import { loadTasksThunk } from "./redux/thunks/taskThunks";

function App() {
  const taskList = useSelector((state) => state.taskList);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(loadTasksThunk);
  }, [dispatch]);

  return (
    <div className="App">
      <h1>TO DO LIST</h1>
      <List apiList={taskList} />
    </div>
  );
}

export default App;
