import "./App.css";
import Header from "./components/Header";
import ToDoForm from "./components/ToDoForm";
import ToDoList from "./components/ToDoList";
import { useState, useEffect } from "react";

function App() {
  const [dataList, setDataList] = useState(() => {
    const data = localStorage.getItem("items");
    if (data) return JSON.parse(data);
    return [];
  });

  useEffect(() => localStorage.setItem("items", JSON.stringify(dataList)));

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
    // let items = [...dataList];
    // items[id]["complete"]
    //   ? (items[id].complete = false)
    //   : (items[id].complete = true);
    // setDataList(items);

    const mapped = dataList.map((item) => {
      return item.id !== id
        ? item
        : { id: item.id, task: item.task, complete: !item.complete };
    });
    setDataList(mapped);
  };

  const getCompleted = () => {
    let completed = [];
    let notCompleted = [];
    for (let item of dataList) {
      if (item.complete) completed.push(item);
      else notCompleted.push(item);
    }
    let sortedItems = [...completed, ...notCompleted];
    setDataList(sortedItems);
  };

  const removeCompleted = () => {
    let newList = []
    for(let item of dataList) {
      if (!item.complete) newList.push(item)
    }
    setDataList(newList)
  }

  return (
    <div className="todoapp">
      <Header />
      <ToDoForm addItem={addItem} />
      <input type="button" onClick={getCompleted} value="Completed" />
      <input type='button' onClick={removeCompleted} value='Remove completed' />
      <ToDoList toDoList={dataList} toggleItem={toggleItem} />
    </div>
  );
}

export default App;
