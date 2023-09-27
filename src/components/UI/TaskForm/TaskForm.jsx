import React, { useState } from 'react'
import FormInput from '../FormInput/FormInput'
import CommonButton from '../CommonButton/CommonButton'
import { TimePicker } from 'antd'
import dayjs from 'dayjs';


const TaskForm = ({create}) => {
  const [task, setTask] = useState({timeBegin: '', timeEnd: '', job: '123'})

  
  const addNewTask = (e) => {
    e.preventDefault()  
    const newTask = {
        ...task, id: Date.now()
    }
    create(newTask);
    setTask({timeBegin: '', timeEnd: '', job: ''})
  }

  const takeTime = (event) => {
    // console.log(event)
    const dateTimeBegin = dayjs(new Date(event[0].$d.toString())).format('YYYY-MM-DD HH:mm');
    const dateTimeBeginEnd = dayjs(new Date(event[1].$d.toString())).format('YYYY-MM-DD HH:mm');
    const timeBegin = dateTimeBegin.substring(dateTimeBegin.indexOf(' ') + 1);
    const timeEnd = dateTimeBeginEnd.substring(dateTimeBeginEnd.indexOf(' ') + 1);
    
    setTask({ ...task, timeBegin: timeBegin, timeEnd: timeEnd})
  }
  
  

  return (
    <form>
      <TimePicker.RangePicker 
        format="HH:mm"
        // defaultValue={dayjs('00:00', 'HH:mm')}
        // onChange={e => takeTime(e)}
        onChange={(e) => takeTime(e)}
      />
      <FormInput 
        value={task.job}
        onChange={e => setTask({ ...task, job: e.target.value })}
      />
      <CommonButton onClick={addNewTask}>Add New Task</CommonButton>
    </form>
  )
}



export default TaskForm