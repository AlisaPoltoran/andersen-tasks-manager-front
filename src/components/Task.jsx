import React from 'react'

const Task = ({task, remove}) => {
    return (
        <div className='task'>
            <div className='task__content time__field'>
                {task.timeBegin} - {task.timeEnd} 
            </div>
            <div className='task__content job__field'>
                {task.job}
            </div>
            <div className='task__content task_btns'>
                <button onClick={() => remove(task)}>Delete</button>
            </div>
        </div>
    )
}

export default Task 