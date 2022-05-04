const ToDoItem = ({item}) => {
    return ( 
        <li>
            {item.complete?
                <font color='red'>{item.task}</font>:
                item.task
            }
          </li>
     );
}
 
export default ToDoItem;