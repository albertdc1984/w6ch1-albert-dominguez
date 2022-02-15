import { Button } from "../Button/Button";

export const Form = () => {
  return (
    <form className="">
      <input type={"text"} placeholder="Input a new task"></input>
      <Button text="ADD TASK TO LIST" />
    </form>
  );
};
