import { useState } from "react";

 const Task =({task, updateTask, deleteTask}) =>{
    const [taskTitle, setTaskTitle] = useState(task);

    const handleChange = (e) => {
        e.preventDefault();
        setTaskTitle(e.target.value);
    };
    const handleupdate = async () => {
        if(taskTitle.trim( !task)) {
            const taskUpdated = await updateTask(taskTitle);
            if(!taskUpdated) {
                setTaskTitle(task);
            } else {
                alert("Task update");
            }
        } else{
            alert("change the task to update");
        }
    };

    return(
        <li className="task">
            <input
                type="text"
                name="task title"
                value={handleChange}
                />
                <button type="button" onClick={handleupdate}> 
                    update
                </button>
                <button id="delete" type="button" onClick={deleteTask}>
                    delete
                </button>
        </li>
    );
};

export default Task