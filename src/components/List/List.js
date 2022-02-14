const List = ({ apiList }) => {
  debugger;
  return (
    <>
      {apiList.map((lItem) => {
        return <li key={lItem.id}>{lItem.todo}</li>;
      })}
    </>
  );
};

export default List;
