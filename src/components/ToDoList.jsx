import ToDoItem from "./ToDoItem";


function ToDoList(props) {

    return (
        <>

            {
                props.todoList.map((item, i) => {
                    
                    return (
                        <ToDoItem key={i} index={i} deleteItem={props.deleteItem} 
                        editItem={props.editItem} eachTask={item}
                        edit={props.edit} setIndex={props.setIndex} setIsEdited={props.setIsEdited}
                        />
                    ) 
                    
                })
            }
            
        </>
    )
}
export default ToDoList;