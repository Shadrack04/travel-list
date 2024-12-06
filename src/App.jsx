import { useState } from "react";
import "./App.css";
import Logo from "./components/Logo";
import Form from "./components/Form";
import PackingList from "./components/PackingList";
import Stats from "./components/Stats";

function App() {
  const [items, setItems] = useState([]);

  function addNewItem(newItem) {
    setItems([...items, newItem]);
  }
  function deleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }

  function handleToggle(id) {
    setItems((items) =>
      items.map((item) => {
        return item.id === id ? { ...item, isPacked: !item.isPacked } : item;
      })
    );
  }

  function handleClear() {
    if (items.length !== 0) {
      const confirm = window.confirm("Are you sure you want to clear list");
      if (confirm) setItems([]);
    }
  }

  return (
    <div className=" w-full h-[100vh] grid grid-rows-12">
      <Logo />
      <Form onAddItem={addNewItem} />
      <PackingList
        items={items}
        deleteItem={deleteItem}
        onCheck={handleToggle}
        onClear={handleClear}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
