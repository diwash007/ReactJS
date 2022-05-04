const ToDoItem = ({item, toggleItem}) => {

    const handleClick = (id) => {
        toggleItem(id)
    }
    return ( 
        <li className={item.complete? 'completed': 'not-completed'} onClick={id => handleClick(item.id-1)}>

{item.task}
          </li>
     );
}
 
export default ToDoItem;