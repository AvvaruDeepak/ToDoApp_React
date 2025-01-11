import TodoTasks from "./Todotasks"
import OngoingTasks from "./OngoingTasks"
import CompletedTasks from "./CompletedTasks"

export default function HomePage()
{
    return(
        <>
            <div className="home">
                <form className="task-form">
                    <input type="text" required className="task-input" placeholder="Enter Task"></input>
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