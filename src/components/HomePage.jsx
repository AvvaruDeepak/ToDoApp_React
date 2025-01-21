import {useState} from "react"

export default function HomePage()
{
    const [task,setTask]=useState("")
    const [tasklist,setTasklist]=useState({todo:[], ongoing:[], completed:[]})
    
    const addTask= (event) => {
        event.preventDefault()
        if(task.trim() !=='')
        {
            // alert(task)
            setTasklist((prevTasks) => ({...prevTasks, todo:[...prevTasks.todo, task]}))
        }
        setTask("")
    }

    const moveTask= (currentCategory, targetCategory, taskToMove) => {
       setTasklist((currentList) => {
       const updatedCurrent = currentList[currentCategory].filter(t => t!==taskToMove)

       const updatedTarget = [...currentList[targetCategory], taskToMove]

       return {...currentList, [currentCategory]:updatedCurrent, [targetCategory]:updatedTarget}
    })}

    const deleteTask = (category, taskToDelete) => {
        setTasklist((currentList) => {
            const updatedList = currentList[category].filter(t => t!== taskToDelete)
            return {...currentList, [category]:updatedList}
        })
    }

    const clearSection = (category) => {
        setTasklist((currentList) => ({...currentList, [category]:[]}))
    }



    return(
        <>
            <div className="home">
                <form className="task-form" onSubmit={addTask}>
                    <input type="text" className="task-input" placeholder="Enter Task" 
                        onChange={(e) => setTask(e.target.value)} value={task}></input>
                    <button className="add-task-button">ADD TASK</button>
                </form>



                <div className="task-sections">
                    <div className="task-section">
                        <h3>Todo Tasks</h3>
                        <ul>
                            {tasklist.todo.map((t,index) => 
                            <li key={index}>{t}
                                <br></br>
                                <button className="MoveToOngoing" onClick={() => {moveTask('todo', 'ongoing', t)}}>Ongoing</button>
                                <button className="MoveToCompleted" onClick={() => {moveTask('todo', 'completed', t)}}>Completed</button>
                                <button className="deleteTask" onClick={() => {deleteTask('todo', t)}}>Delete</button>
                            </li>
                            )}
                        </ul>
                        <button className="clearAll" onClick={() => clearSection('todo')}>Clear All</button>
                    </div>

                    <div className="task-section">
                        <h3>Ongoing Tasks</h3>
                        <ul>
                            {tasklist.ongoing.map((t,index) =>
                                <li key={index}>{t}
                                    <br></br>
                                    <button className="MoveToTodo" onClick={() => moveTask('ongoing', 'todo', t)}>Todo</button>
                                    <button className="MoveToCompleted" onClick={() => moveTask('ongoing', 'completed', t)}>Completed</button>
                                    <button className="deleteTask" onClick={() => deleteTask('ongoing', t)}>Delete</button>
                                </li>
                            )}
                        </ul>
                        <button className="clearAll" onClick={() => clearSection('ongoing')}>Clear All</button>
                    </div>

                    <div className="task-section">
                        <h3>Completed Tasks</h3>
                        <ul>
                            {tasklist.completed.map((t,index) =>
                                <li key={index}>{t}
                                    <br></br>
                                    <button className="MoveToTodo" onClick={() => moveTask('completed', 'todo', t)}>Todo</button>
                                    <button className="MoveToOngoing" onClick={() => moveTask('completed', 'ongoing', t)}>Ongoing</button>
                                    <button className="deleteTask" onClick={() => deleteTask('completed', t)}>Delete</button>
                                </li>
                            )}
                        </ul>
                        <button className="clearAll" onClick={() => clearSection('completed')}>Clear All</button>
                    </div>
                </div>
            </div>
        </>
    )
}