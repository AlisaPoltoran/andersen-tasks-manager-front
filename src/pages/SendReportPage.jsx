import React, { useState } from 'react'
import TaskForm from '../components/UI/TaskForm/TaskForm'
import TaskList from '../components/TaskList'
import CommonModal from '../components/UI/CommonModal/CommonModal'
import CommonButton from '../components/UI/CommonButton/CommonButton'

const SendReportPage = () => {
  const [tasks, setTasks] = useState([
    { timeBegin: "01:47", timeEnd: "03:47", job: "Job 1", id: 1695836843827 },
    { timeBegin: "01:52", timeEnd: "03:47", job: "Job 2", id: 1695836852585 },
    { timeBegin: "01:56", timeEnd: "03:54", job: "Job 3", id: 1695836860808 }
  ])

  const [modal, setModal] = useState(false)
  const createTask = (newTask) => {
    setTasks([...tasks, newTask])
    setModal(false)
  }

  const removeTask = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id))
  }

  const sendReport = () => {
    const myJson = JSON.stringify(
      { tasks: copiedTasks, user_id: 1 }
    )

    console.log(myJson)
    // fetch('url', {
    //   method: 'POST',
    //   headers: { "Content-Type": "application/json" },
    //   body: JSON.stringify(tasks)
    // }).then(response => {
    //   console.log(response);
    // })
    //   .catch(error => {
    //     console.log(error);
    //   });
  }


  const copiedTasks = tasks.map(task => {
    const now = new Date();
    const year = now.getFullYear();
    let month = now.getMonth() + 1;
    let day = now.getDate();

    month = month < 10 ? `0${month}` : month;
    day = day < 10 ? `0${day}` : day;

    return {
      ...task,
      timeBegin: `${year}-${month}-${day} ${task.timeBegin}`,
      timeEnd: `${year}-${month}-${day} ${task.timeEnd}`
    };
  });

  return (
    <div className='container'>
      <h1>Add tasks you've done</h1>
      <CommonModal visible={modal} setVisible={setModal}>
        <TaskForm create={createTask} />
      </CommonModal>
      <TaskList
        tasks={tasks}
        remove={removeTask}
      />
      <CommonButton style={{ marginTop: 10 }} onClick={() => setModal(true)}>
        Add task
      </CommonButton>
      <hr style={{ margin: '15px 0' }} />
      <h2>After you added all tasks for today</h2>
      <CommonButton
        style={{ marginTop: 15 }}
        onClick={sendReport}
      >
        Send Report
      </CommonButton>
    </div>
  )
}

export default SendReportPage

// {"tasks":
//   [
//     {"id":1,"timeBegin":"10","timeEnd":"14","job":"create VMs"},
//     {"id":2,"timeBegin":"14","timeEnd":"16","job":"configure Jenkins"},
//     {"id":3,"timeBegin":"17","timeEnd":"20","job":"testing"}
//   ],
// "user_id":1}

// {"tasks":
//   [
//     {"timeBegin":"03:32","timeEnd":"20:36","job":"РАБОТАЛ","id":1695835959351},
//     {"timeBegin":"03:37","timeEnd":"20:41","job":"МНОГО РАБОТАЛ","id":1695835984108}
//   ],
// "user_id":1}
// {"tasks":
//   [
//     {"timeBegin":"2023-09-27 01:47","timeEnd":"2023-09-27 03:47","job":"123","id":1695836843827},
//     {"timeBegin":"2023-09-27 01:52","timeEnd":"2023-09-27 03:47","job":"456","id":1695836852585},
//     {"timeBegin":"2023-09-27 01:56","timeEnd":"2023-09-27 03:54","job":"789","id":1695836860808}
//   ],
// "user_id":1}
