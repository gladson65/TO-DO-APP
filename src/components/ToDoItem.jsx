import ToDoList from "./ToDoList";
import { useState } from "react";
import './Body.css'

function ToDoItem(props) {

    const [taskDone, setTaskDone] = useState(false);

    function deleteElement(e) {
        e.preventDefault();

        props.deleteItem(props.index);
        
    }

    function editItem() {
        props.setIsEdited(false)
        props.editItem(props.index);
        props.setIndex(props.index);
    }

    function taskComplete() {
        setTaskDone(true);
    }

    return (
        <>
            <div className="todo-item relative rounded-lg flex justify-start px-5 py-4 mt-5">
                
                {
                  taskDone ?   <p className="todo-para line-through decoration-4 decoration-black text-white px-5 text-lg break-all sm:w-96 text-center">{props.eachTask}</p> :
                                <p className="todo-para rounded-lg text-black px-5 text-lg break-all sm:w-96 bg-teal-300 text-center">{props.eachTask}</p>
                }
                
                
                <div className="button-div ml-4">
                    {
                        taskDone ?  <i id="taskCompleted" onClick={()=>{setTaskDone(false)}} className="fa-solid fa-clipboard-check fa-2x" style={{color:'skyblue'}}></i> : 
                                    <i onClick={taskComplete} className="fa-regular fa-hourglass fa-2x"></i>
                    }
                    {
                        taskDone ? <i onClick={editItem} className="fa-regular fa-pen-to-square fa-2x" style={{color: 'yellow',}}></i> :
                                    <i onClick={editItem} className="fa-regular fa-pen-to-square fa-2x"></i>
                    }
                    
                    <i onClick={deleteElement} className="fa-solid fa-trash-can fa-2x"></i>
                </div>
                
            </div>

        </>
    )
}

export default ToDoItem;