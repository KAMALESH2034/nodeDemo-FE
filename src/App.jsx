import './App.css'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Users from './Users'
import UserCreate from './User-create'
import ViewUsers from './ViewUsers'
import EditUser from './EditUser'


function App() {
 
  
  return (
    <>
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Users/>}/>
        <Route path="/create-user" element={<UserCreate/>}/>
        <Route path="/user/:id" element={<ViewUsers/>}/>
        <Route path="/edit/:id" element={<EditUser/>}/>
      </Routes>
      </BrowserRouter>

     

    </>
 
  )
}

export default App
