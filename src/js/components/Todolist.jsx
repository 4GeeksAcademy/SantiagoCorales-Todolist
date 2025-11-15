import React, { useState } from 'react'

export const Todolist = () => {
    const [task, setTask] = useState("")
    const [list, setList] = useState([])
    const [hoverIndex, setHoverIndex] = useState(null)

    const handleKeyDown = (e) => {
        if (e.key === "Enter" && task.trim() !== "") {
            setList([...list, task])
            setTask("")
        }
    }

    const deleteTask = (i) => {
        setList(list.filter((_, index) => index !== i))
    }

    return (
    <div>
        
        <div className="todo-container">
            <h2 className="text-center mb-3">Mi lista de tareas</h2>

            <input 
                type="text"
                className="form-control todo-input"
                placeholder="Añadir tarea..."
                value={task}
                onChange={(e) => setTask(e.target.value)}
                onKeyDown={handleKeyDown}
            />

            <ul className="list-group list-group-flush mt-3">
                {list.length === 0 && (
                    <li className="empty-text">
                        No hay tareas, añadir tareas
                    </li>
                )}

                {list.map((item, index) => (
                    <li
                        key={index}
                        className="todo-item"
                        onMouseEnter={() => setHoverIndex(index)}
                        onMouseLeave={() => setHoverIndex(null)}
                    >
                        {item}
                        {hoverIndex === index && (
                            <button 
                                className="delete-btn"
                                onClick={() => deleteTask(index)}
                            >
                                X
                            </button>
                        )}
                    </li>
                ))}
            </ul>

            <p className="counter">Quedan {list.length} tareas</p>
        </div>
        <div className="paper"></div>

    </div>
)
}