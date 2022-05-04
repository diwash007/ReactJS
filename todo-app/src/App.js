import "./App.css";
import Header from "./components/Header";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { useState, useEffect } from "react";

function App() {
  const [dataList, setDataList] = useState(() => {
    const data = localStorage.getItem('items');
    if (data) return JSON.parse(data)
    return []
  });
  
  useEffect(() => localStorage.setItem('items', JSON.stringify(dataList)))

  const addItem = (task) => {
    let items = [...dataList];
    items = [
      ...items,
      {
        id: dataList.length + 1,
        task: task,
        complete: false,
      },
    ];
    setDataList(items);
  };

  const toggleItem = (id) => {
    let items = [...dataList];
    items[id]["complete"]
      ? (items[id].complete = false)
      : (items[id].complete = true);
    setDataList(items);
  };

  return (
    <div className="todoapp">
      <Header />
      <ToDoForm addItem={addItem} />
      <ToDoList toDoList={dataList} toggleItem={toggleItem} />
    </div>
  );
}

export default App;
