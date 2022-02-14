import "./App.css";
import List from "./components/List/List";

function App() {
  const fakeApiList = [
    { todo: "Fregar platos", id: 1 },
    { todo: "Cambiar la arena de los gatos", id: 2 },
    { todo: "Comprar comida para gatos", id: 3 },
    { todo: "Poner una lavadora", id: 4 },
    { todo: "Tender la ropa", id: 5 },
    { todo: "Fregar el suelo", id: 6 },
  ];

  return (
    <div className="App">
      <List apiList={fakeApiList} />
    </div>
  );
}

export default App;
