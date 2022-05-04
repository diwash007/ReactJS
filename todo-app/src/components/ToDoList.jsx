import ToDoItem from "./ToDoItem";

const ToDoList = ({ toDoList }) => {
  return (
    <div className='todo-list'>
      <ul>
        {toDoList.map((item) => (
          <ToDoItem item={item} key={item.id}/>
        ))}
      </ul>
    </div>
  );
};

export default ToDoList;
