import { useState} from 'react'
import { VscDebugRestart } from "react-icons/vsc";

import Form from './components/Form';
import Tasks from './components/Tasks';
import Buton from './components/Buton';

import './App.css'
import { useHasTask } from './hooks/useHasTask';


function App() {
  const [task, setTask] = useState(() => {
    const taskFromStorage = window.localStorage.getItem('task')
    return taskFromStorage ? JSON.parse(taskFromStorage) : []
  })

  const { hasTask, setHasTask, handleReset} = useHasTask(task, setTask)

  return (
    <>
      <header>
        <h1>To do list</h1>
        <Form
          setTask={setTask}
          task={task} />
      </header>
      <main>
        <Tasks
          task={task}
          setTask={setTask}
          setHasTask={setHasTask} />
          <div className='container-btn-delete'>
          <Buton className={`buton-restart ${hasTask ? 'block' : ''}`} handleclick={handleReset}><VscDebugRestart size={30} /></Buton>
          </div>
      </main>
    </>
  )
}

export default App
