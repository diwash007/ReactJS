import "./App.css";
import Header from "./components/Header";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { useState } from "react";

import data from "./data/items.json";

function App() {
  const [dataList, setDataList] = useState(data);

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
  }

  const toggleItem = (id) => {
    let items = [...dataList];
    items[id]['complete']? items[id].complete = false: items[id].complete = true
    setDataList(items)
  }

  return (
    <div className="todoapp">
      <Header />
      <ToDoForm addItem={addItem} />
      <ToDoList toDoList={dataList} toggleItem={toggleItem}/>
    </div>
  );
}

export default App;
