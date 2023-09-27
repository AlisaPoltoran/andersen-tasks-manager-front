import React, { useState } from 'react'
import Task from './Task'

const TaskList = ({tasks, remove}) => {

  return (
    <div>
        {tasks.map((task, index) => 
            <Task 
              task={task}
              remove={remove} 
              number={index + 1}
              key={task.id}
            />
        )}
    </div>
  )
}

export default TaskList