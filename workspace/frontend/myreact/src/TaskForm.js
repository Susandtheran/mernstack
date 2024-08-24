

import { useState } from "react";
import axios from "axios";
import {API_URL} from "./config/global";

  const TaskForm = ({addTask}) => {
    const [newTask, setNewTask] = useState("");

    const handleTaskChange = (e) => {
        e.preventDefault();
        setNewTask(e.target.value);
    };

    const handleAddTask = async (e) => {
        e.preventDefault();
        if (newTask.trim()) {
            try {
                const response = await axios.post(`${API_URL}/TODO`, {
                title: newTask,
                });
                if (response.data) {
                    addTask();
                    setNewTask("");
                }
            } catch (error) {
                console.error("Error during task/add: ",error);
                alert("Something went wrong. Try again.");
            }
        }
    };
    
    return (
        <form className="task-form">
            <input
            tupe="text"
            name="new-task"
            placeholder="add a new task"
            id="new-task"
            value={newTask}
            onChange={handleTaskChange}
            />
            <button type="submit" onClick={handleAddTask}>
                Add
            </button>
            </form>
            );
        };

      export default TaskForm
