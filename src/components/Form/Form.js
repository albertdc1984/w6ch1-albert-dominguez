import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTaskThunk } from "../../redux/thunks/taskThunks";
import { Button } from "../Button/Button";

export const Form = () => {
  const dispatch = useDispatch();
  const blankData = { name: "" };
  const [formData, setFormdata] = useState(blankData);
  const updateForm = (event) => {
    setFormdata({ ...formData, [event.target.id]: event.target.value });
  };

  return (
    <form
      onSubmit={(event) => {
        event.preventDefault();
        dispatch(addTaskThunk(formData));
        setFormdata(blankData);
      }}
      noValidate
      autoComplete="off"
    >
      <input
        name={formData.name}
        type="text"
        id="name"
        title="Add"
        value={formData.name}
        onChange={updateForm}
      />{" "}
      <Button type="submit" text="ADD TASK" />
    </form>
  );
};
