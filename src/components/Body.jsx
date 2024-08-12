import './Body.css';
import ToDoList from './ToDoList';
import TodoImage from './todoImage';
import { useState } from 'react';

function Body() {

    let value = "";

    // create list array state to store input tasks
    const [todoList, setTodoList] = useState([]);
    const [edit, setEdit] = useState("");
    const [index, setIndex] = useState();
    const [isEdited, setIsEdited] = useState(true);

    // taking search input
    function InputText(e) {
        let val = e.target.value;
        value = val;
    }

    // ADD function
    function addTask(e) {
        e.preventDefault();

        // update the task
        if (value && !isEdited) {
            todoList[index] = value;
            
        }
        // Add new task
        else {
            //check condition if input is empty or not & using spread operator to take previous inputs
            value.length > 0 && setTodoList([...todoList, value]);
        }
        
        
        

        
        
        setIsEdited(true)
        console.log(value);
        document.getElementById("textInput").value = "";
    }

    // delete function
    function deleteListItem(key) {
        let newTodoList = [...todoList]
        newTodoList.splice(key,1);
        setTodoList([...newTodoList])
    }

    // Edit Function
    function editListItem(index) {
        let newEdit = [...todoList] 
        setEdit(newEdit[index])
    }

    function handlePress(e) {
        if (e.keyCode === 13) {
            addTask(e);
        }
    }


    return (
        <>
            <div className='todo-body'>
                {/* To do list add */}
                <div className='add'>
                    {
                       isEdited ? <textarea id="textInput" className='px-3 pt-1 rounded-lg' cols="30" placeholder='Write Your Task' name="task" onChange={InputText} onKeyDown={handlePress} /> :
                       <textarea id="textInput" className='px-3 pt-1 rounded-lg' cols="30" placeholder={edit} name="task" onChange={InputText} onKeyDown={handlePress} />
                    }
                    
                    {
                       isEdited ? <button className='btn-lg border-2 rounded-lg' type='button' onClick={addTask}>ADD</button> :
                       <button id="update-btn" className='btn-lg border-2 rounded-lg' type='button' onClick={addTask}><i className="fa-regular fa-pen-to-square fa-2x"></i></button>  
                    }
                           
                </div>

                {
                    todoList.length === 0 ? <TodoImage /> :
                    
                    <div className='list-container'>
                        <ToDoList todoList={todoList} deleteItem={deleteListItem} editItem={editListItem} edit={edit} setIndex={setIndex} setIsEdited={setIsEdited}/>                  
                    </div> 
                    
                }    
                
                
                
            </div>
        </>
    )
}

export default Body;