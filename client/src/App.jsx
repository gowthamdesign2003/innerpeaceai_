import { useState } from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'

import Signup from './signup'
import Login from './Login'
import Task from './Task'
import Cb from './Cb'

function App() {
  return (

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Signup />} ></Route>
        <Route path="/login" element={<Login />} ></Route>
        <Route path="/Task" element={<Task />} ></Route>
        <Route path="/Cb" element={<Cb />} ></Route>
      </Routes>
    </BrowserRouter>

  )
}

export default App
