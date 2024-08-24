import "../styles/dashboard.css";

import { useEffect, useState } from "react";
import axios from "axios";

import TaskForm from "../TaskForm";
import { API_URL } from "../config/global";
import Task from "../Task";

export default function Dashboard() {
    const [tasks, setTask] = useState([]);

    useEffect(() => {
        fetchTasks();
    }, []);

    const fetchTasks = async () => {
        try {
            const response = await axios.get(`${API_URL}/todo`);
            setTask(response.data);
        } catch (error) {
            console.error("Error during fetchTasks: ", error);
        }
    };

    const addTask = () => {
        fetchTasks();
    };

const updateTask = async (id, taskTittle) => {
    try{
        const response = await axios.put(`${API_URL}/todo/${id}` , {
            title: taskTittle,
        });

        if (response.data) {
            fetchTasks();
            return true;
        } else {
            return false;
        }
    } catch (error) {
        console.error(" Error during updateTask: ", error);
        alert("Something went wrong. Try again.");
    }
};

const deleteTask = async (id) => {
    try{
        const response = await axios.delete(`${API_URL}/todo/${id}`);
        if (response.data) {
            setTask(tasks.filter((tasks) => tasks._id !== id));
        }
    } catch (error) {
        console.error("Error during deleteTask: ",error);
        alert("Something went wrong. Try again.");
    }
};

return (
    <div className="dashboard">
        <div className="dashboard-top">
            <h1>
                Todo&nbsp;<span>App</span>
            </h1>
            <TaskForm addTask={addTask}/>
        </div>
        <div className="task-list">
            {tasks.length ? (
                tasks
                .slice()
                .reverse()
                .map((task) => (
                <Task
                key={ task._id}
                task={task.title}
                updateTask={(taskTitle) => updateTask(task._id, taskTitle)}
                deleteTask={() => deleteTask(task.id)}
                />
                ))
            ):(
                <p>All tasks are complete! Well done</p>
            )}
        </div>
    </div>
);
}
