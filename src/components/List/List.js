const List = ({ apiList }, { deleteTaskOnClick }) => {
  return (
    <ul>
      {apiList.map((lItem) => {
        return (
          <li key={lItem.id}>
            {lItem.todo}
            <input type="checkbox"></input>
          </li>
        );
      })}
    </ul>
  );
};

export default List;
