import { useState, useEffect } from 'react'
import './App.css'
import {Link, Routes, Route} from 'react-router-dom'
import DisplayAll from './components/DisplayAll'
import CreateForm from './components/CreateForm'
import ViewOne from './components/ViewOne'
import Edit from './components/Edit'


function App() {
  const [taskList, setTaskList] = useState([])
  return (
    <>
      <Routes>
        <Route path="/" element={<DisplayAll taskList={taskList} setTaskList={setTaskList}/>}/>
        <Route path="/newTask" element={<CreateForm taskList={taskList} setTaskList={setTaskList}/>}/>
        <Route path="/task/:id" element={<ViewOne/>} />
        <Route path="/edit/:id" element={<Edit />} />
      </Routes>
    </>
  )
}

export default App
