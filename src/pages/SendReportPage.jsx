import React, { useState, useContext } from 'react'
import TaskForm from '../components/UI/TaskForm/TaskForm'
import TaskList from '../components/TaskList'
import CommonModal from '../components/UI/CommonModal/CommonModal'
import CommonButton from '../components/UI/CommonButton/CommonButton'
import { AuthContext } from '../context/context'
import axios from "axios";


const SendReportPage = () => {
  const { isAuth, setIsAuth } = useContext(AuthContext)
  const [tasks, setTasks] = useState([
    // { timeBegin: "01:47", timeEnd: "03:47", job: "Job 1", id: 1695836843827 },
    // { timeBegin: "01:52", timeEnd: "03:47", job: "Job 2", id: 1695836852585 },
    // { timeBegin: "01:56", timeEnd: "03:54", job: "Job 3", id: 1695836860808 }
  ])


  const [modal, setModal] = useState(false)
  const createTask = (newTask) => {
    setTasks([...tasks, newTask])
    setModal(false)
  }

  const removeTask = (task) => {
    setTasks(tasks.filter(t => t.id !== task.id))
  }



  async function sendReport() {
    axios.post('http://34.42.179.248/report_sender_war/report', { tasks: copiedTasks, user_id: isAuth.user_id })
    //   axios.post('http://localhost:8080/report_sender_war/report', { tasks: copiedTasks, user_id: isAuth.user_id })

      .then(function (response) {
        setIsAuth({status: false, user_id: 0})
      })
      .catch(function (error) {
        console.log(error);
      });
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
//     {"timeBegin":"2023-09-27 01:47","timeEnd":"2023-09-27 03:47","job":"123","id":1695836843827},
//     {"timeBegin":"2023-09-27 01:52","timeEnd":"2023-09-27 03:47","job":"456","id":1695836852585},
//     {"timeBegin":"2023-09-27 01:56","timeEnd":"2023-09-27 03:54","job":"789","id":1695836860808}
//   ],
// "user_id":1}

// {"tasks":
//     [
//       {"timeBegin":"2023-09-28 01:47","timeEnd":"2023-09-28 03:47","job":"Job 1","id":1695836843827},
//       {"timeBegin":"2023-09-28 01:52","timeEnd":"2023-09-28 03:47","job":"Job 2","id":1695836852585},
//       {"timeBegin":"2023-09-28 01:56","timeEnd":"2023-09-28 03:54","job":"Job 3","id":1695836860808}
//     ],
// "user_id":1}