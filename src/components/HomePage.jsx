import TodoTasks from "./TodoTasks"
import OngoingTasks from "./OngoingTasks"
import CompletedTasks from "./CompletedTasks"
import {useState} from "react"

export default function HomePage()
{
    const [task,setTask]=useState("")
    const [click, setClick]=useState(false)
    function submit()
    {
        alert(task)
        
    }
    
    return(
        <>
            <div className="home">
                <form className="task-form" onSubmit={submit}>
                    <input type="text" required className="task-input" placeholder="Enter Task" 
                        onChange={(e) => setTask(e.target.value)}></input>
                    <button className="add-task-button">ADD TASK</button>
                </form>
                <div className="task-sections">
                    <TodoTasks/>
                    <OngoingTasks/>
                    <CompletedTasks/>
                </div>
            </div>
        </>
    )
}