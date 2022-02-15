import { useDispatch } from "react-redux";
import { deleteTaskThunk } from "../../redux/thunks/taskThunks";
import { Button } from "../Button/Button";

const List = ({ apiList }) => {
  const dispatch = useDispatch();
  return (
    <ul>
      {apiList.map((lItem) => {
        return (
          <li key={lItem.id}>
            {lItem.todo}
            <Button
              actionOnClick={() => dispatch(deleteTaskThunk(lItem.id))}
              text="REMOVE"
            />
          </li>
        );
      })}
    </ul>
  );
};

export default List;
