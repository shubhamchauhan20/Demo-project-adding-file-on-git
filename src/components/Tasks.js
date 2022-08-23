
import Task from './Task' 

const Tasks = ({ tasks, onDelete }) => {

    return (
        <>
            {tasks.map((task) => (
                <Task key={task.id} task={task} onDelete={onDelete} />
                // <h3 key={task.id}>{task.text}</h3>
            ))}
        </>
    )

}

export default Tasks

// import React from 'react'

