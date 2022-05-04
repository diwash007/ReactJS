import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoList, toggleItem }) => {
  return (
    <div className='todo-list'>
      <ul>
        {toDoList.map((item) => (
          <ToDoItem item={item} key={item.id} toggleItem={toggleItem}/>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
