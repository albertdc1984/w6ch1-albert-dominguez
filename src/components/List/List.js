const List = ({ apiList }) => {
  debugger;
  return (
    <ul>
      {apiList.map((lItem) => {
        return <li key={lItem.id}>{lItem.todo}</li>;
      })}
    </ul>
  );
};

export default List;
