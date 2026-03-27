import React from 'react'
import { BrowserRouter ,Routes,Route} from 'react-router-dom'
import Register from './Pages/Register'
import Login from './Pages/Login'
import Chat from './Pages/Chat'

export default function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/register' element={<Register/>  }></Route>
      <Route path='/login' element={ <Login/>}></Route>
      <Route path='/chat' element={<Chat/> }></Route>
    </Routes>
    </BrowserRouter>
  )
}
